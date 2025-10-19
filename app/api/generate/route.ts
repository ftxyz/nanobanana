import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { prompt, imageData } = await request.json()

    if (!prompt || !imageData) {
      return NextResponse.json(
        { error: 'Prompt and image are required' },
        { status: 400 }
      )
    }

    console.log('=== API调试信息 ===')
    console.log('接收到的prompt:', prompt)
    console.log('接收到的imageData长度:', imageData?.length)
    console.log('imageData前100字符:', imageData?.substring(0, 100))

    console.log('发送给AI的提示词:', prompt)

    // 使用原生fetch调用OpenRouter API
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://nanobanana.vercel.app',
        'X-Title': 'Nano Banana AI Editor',
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": prompt
              },
              {
                "type": "image_url",
                "image_url": {
                  "url": imageData
                }
              }
            ]
          }
        ],
        modalities: ["image", "text"]
      })
    })

    if (!response.ok) {
      throw new Error(`API请求失败: ${response.status}`)
    }

    const completion = await response.json()

    console.log('=== API响应信息 ===')
    console.log('完整的API响应:', JSON.stringify(completion, null, 2))
    console.log('choices数量:', completion.choices?.length)
    console.log('第一个choice:', completion.choices?.[0])
    console.log('message内容:', completion.choices?.[0]?.message)
    console.log('message.images:', completion.choices?.[0]?.message?.images)

    const message = completion.choices[0]?.message
    const images = message?.images

    if (!images || images.length === 0) {
      console.log('❌ 没有收到生成的图像')
      return NextResponse.json(
        { error: 'No images generated' },
        { status: 500 }
      )
    }

    console.log('✅ 成功获取生成的图像:', images.length, '张')
    console.log('第一张图像URL:', images[0]?.image_url?.url)
    
    // 返回生成的图像URL数组
    const imageUrls = images.map((img: any) => img.image_url?.url).filter(Boolean)
    return NextResponse.json({ images: imageUrls })
  } catch (error) {
    console.error('Error generating image:', error)
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    )
  }
}
