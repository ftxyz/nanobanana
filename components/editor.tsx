"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, Sparkles, Loader2 } from "lucide-react"

export function Editor() {
  const [prompt, setPrompt] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [generatedImages, setGeneratedImages] = useState<Array<{image: string, analysis: string}>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
        setError(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGenerate = async () => {
    if (!selectedImage || !prompt.trim()) {
      setError("请上传图片并输入提示词")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          imageData: selectedImage
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || '生成失败')
      }

      const data = await response.json()
      
      console.log('=== 前端调试信息 ===')
      console.log('API返回的完整数据:', data)
      console.log('API返回的images:', data.images)
      
      // 检查是否收到生成的图像数组
      if (data.images && Array.isArray(data.images) && data.images.length > 0) {
        console.log('✅ 收到生成的图像:', data.images.length, '张')
        console.log('第一张图像URL:', data.images[0])
        setGeneratedImages(data.images)
      } else {
        console.log('❌ 未收到有效的图像生成结果')
        setError('未能生成图像，请重试')
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : '生成失败，请重试')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="editor" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Try The AI Editor</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            Experience the power of nano-banana's natural language image editing. Transform any photo with simple text
            commands
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Prompt Engine */}
          <Card className="p-6 border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">AI Image Generator</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">使用AI根据你的图片和提示词生成新图像</p>

            <div className="space-y-6">
              <div>
                <Label htmlFor="image-upload" className="text-sm font-medium mb-2 block">
                  Reference Image
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {selectedImage ? (
                      <img
                        src={selectedImage || "/placeholder.svg"}
                        alt="Uploaded"
                        className="max-h-40 mx-auto rounded-lg"
                      />
                    ) : (
                      <>
                        <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-1">Add Image</p>
                        <p className="text-xs text-muted-foreground">Max 50MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <Label htmlFor="prompt" className="text-sm font-medium mb-2 block">
                  Generation Prompt
                </Label>
                <Textarea
                  id="prompt"
                  placeholder="请描述你希望AI如何生成新图像，例如：'创建一个1/7比例的手办，放在电脑桌上，电脑屏幕显示ZBrush建模过程，旁边放一个BANDAI风格的包装盒'..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-32 resize-none"
                />
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={isLoading || !selectedImage || !prompt.trim()}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    生成中...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Now
                  </>
                )}
              </Button>
              
              {error && (
                <div className="text-sm text-red-500 mt-2 p-2 bg-red-50 rounded">
                  {error}
                </div>
              )}
            </div>
          </Card>

          {/* Output Gallery */}
          <Card className="p-6 border-2 border-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-5 w-5 rounded bg-primary/10 flex items-center justify-center">
                <span className="text-xs text-primary">✨</span>
              </div>
              <h3 className="text-lg font-semibold">Generated Images</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">AI生成的图像将显示在这里</p>

            <div className="min-h-96">
              {generatedImages.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {generatedImages.map((imageUrl, index) => (
                    <div key={index} className="space-y-4">
                      <div className="relative group">
                        <img
                          src={imageUrl}
                          alt={`生成的图像 ${index + 1}`}
                          className="w-full h-auto rounded-lg border"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => {
                              const link = document.createElement('a')
                              link.href = imageUrl
                              link.download = `generated-image-${index + 1}.png`
                              link.click()
                            }}
                          >
                            下载
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : isLoading ? (
                <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg bg-muted/30">
                  <div className="text-center">
                    <Loader2 className="h-16 w-16 mx-auto mb-4 animate-spin text-primary" />
                    <p className="text-sm font-medium mb-1">AI正在生成中...</p>
                    <p className="text-xs text-muted-foreground">请稍候，这可能需要几秒钟</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 border-2 border-dashed border-border rounded-lg bg-muted/30">
                  <div className="text-center">
                    <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-medium mb-1">Ready for Image Generation</p>
                    <p className="text-xs text-muted-foreground">Upload an image and enter your prompt to generate new images</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
