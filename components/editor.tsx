"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Upload, Sparkles, Loader2 } from "lucide-react"

// 硬编码的提示词 - 只生成BANDAI风格的包装盒
const DEFAULT_PROMPT = "Create a BANDAI-style toy packaging box with the character from the image printed on it. The box should be a 3D product packaging box, featuring high-quality artwork of the character on the front. Include BANDAI logo and branding elements. The box should look professional and realistic, like an actual collectible figure packaging box."

export function Editor() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [generatedImages, setGeneratedImages] = useState<string[]>([])
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
    if (!selectedImage) {
      setError("请先上传图片")
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
          prompt: DEFAULT_PROMPT,
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
        // 确保设置的是字符串数组
        const imageUrls = data.images.filter((url: any) => typeof url === 'string' && url.length > 0)
        if (imageUrls.length > 0) {
          setGeneratedImages(imageUrls)
        } else {
          console.log('❌ 图像URL格式无效')
          setError('生成的图像URL格式无效')
        }
      } else {
        console.log('❌ 未收到有效的图像生成结果')
        console.log('API返回的数据:', data)
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">体验 AI 包装盒生成器</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            上传角色图片，一键生成专业的 BANDAI 风格 3D 包装盒。无需输入提示词，AI 自动为您创建精美的收藏级包装盒设计
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Prompt Engine */}
          <Card className="p-6 border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">AI 包装盒生成器</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">上传角色图片，一键生成专业的 BANDAI 风格 3D 包装盒</p>

            <div className="space-y-6">
              <div>
                <Label htmlFor="image-upload" className="text-sm font-medium mb-2 block">
                  参考图片
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
                        alt="已上传"
                        className="max-h-40 mx-auto rounded-lg"
                      />
                    ) : (
                      <>
                        <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-1">添加图片</p>
                        <p className="text-xs text-muted-foreground">最大 50MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={isLoading || !selectedImage}
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
                    立即生成
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
              <h3 className="text-lg font-semibold">生成的包装盒</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">AI 生成的 BANDAI 风格包装盒将显示在这里</p>

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
                    <p className="text-sm font-medium mb-1">准备生成包装盒</p>
                    <p className="text-xs text-muted-foreground">上传图片以生成 BANDAI 风格包装盒</p>
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
