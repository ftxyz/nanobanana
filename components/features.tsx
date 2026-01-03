import { Card } from "@/components/ui/card"
import { Wand2, ImageIcon, Sparkles, Zap } from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "AI 智能生成",
    description:
      "基于先进的 AI 模型，自动识别角色特征并生成专业的 BANDAI 风格包装盒设计，无需复杂操作。",
  },
  {
    icon: ImageIcon,
    title: "专业级设计",
    description:
      "生成高质量 3D 包装盒效果图，包含品牌标识、角色艺术设计和专业排版，媲美真实产品包装。",
  },
  {
    icon: Sparkles,
    title: "一键生成",
    description:
      "上传图片即可自动生成，无需输入提示词。AI 自动理解角色特征，创建完美的包装盒设计方案。",
  },
  {
    icon: Zap,
    title: "快速高效",
    description:
      "几秒钟内完成生成，快速预览效果。优化的生成流程确保高质量输出，无需等待。",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">强大的功能特性</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            专为包装盒设计打造，让您的创意想法快速变为现实
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
