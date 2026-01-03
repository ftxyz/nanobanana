import { NextRequest, NextResponse } from 'next/server'
import { OpenRouter } from '@/lib/openrouter'

export async function POST(request: NextRequest) {
  try {
    const { prompt, imageData } = await request.json()

    console.log('=== API调试信息 ===')
    console.log('接收到的prompt:', prompt)
    console.log('接收到的imageData长度:', imageData?.length)
    console.log('imageData前100字符:', imageData?.substring(0, 100))

    if (!prompt || !imageData) {
      return NextResponse.json(
        { error: '图片和提示词都是必需的' },
        { status: 400 }
      )
    }

    // 在 Vercel 环境中，只能从环境变量读取
    const apiKey = process.env.OPENROUTER_API_KEY

    if (!apiKey) {
      console.error('API key 未配置')
      return NextResponse.json(
        { error: 'API key 未配置，请在 Vercel 项目设置中添加 OPENROUTER_API_KEY 环境变量' },
        { status: 500 }
      )
    }

    // 确保图片 URL 格式正确（base64 数据）
    let imageUrl = imageData
    if (!imageData.startsWith("data:") && !imageData.startsWith("http")) {
      // 如果不是完整的 data URL，尝试添加前缀
      if (imageData.startsWith("/9j/") || imageData.startsWith("iVBORw0KGgo")) {
        // 可能是 base64 但没有前缀
        imageUrl = `data:image/jpeg;base64,${imageData}`
      } else {
        imageUrl = imageData
      }
    }

    console.log('调用 Gemini API...')

    // 使用 OpenRouter SDK（与 banana-website-clone 项目一致）
    const openrouter = new OpenRouter({
      apiKey: apiKey,
    })

    // 发送请求（非流式，因为我们不需要流式响应）
    const chat = await openrouter.chat()
    const completion = await chat.send({
      model: "google/gemini-2.5-flash-image-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
            {
              type: "image_url",
              image_url: {
                url: imageUrl,
              },
            },
          ],
        },
      ],
      stream: false, // 非流式响应
      modalities: ["image", "text"],
    })

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
      // 如果没有图像，返回文本内容
      const textContent = message?.content
      if (textContent) {
        return NextResponse.json({ result: textContent })
      }
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
  } catch (error: any) {
    console.error('Error generating:', error)
    return NextResponse.json(
      { error: error.message || '处理请求时出错' },
      { status: 500 }
    )
  }
}
