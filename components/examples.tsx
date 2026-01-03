import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const examples = [
  {
    title: "动漫角色包装盒",
    description: "将动漫角色转换为专业的 BANDAI 风格收藏级包装盒",
    image: "/professional-portrait-with-natural-lighting.jpg",
    category: "动漫",
  },
  {
    title: "游戏角色包装盒",
    description: "为游戏角色创建精美的 3D 包装盒设计",
    image: "/person-in-futuristic-city-scene.jpg",
    category: "游戏",
  },
  {
    title: "原创角色包装盒",
    description: "为原创角色设计专业的收藏级包装盒",
    image: "/artistic-style-transfer-portrait.jpg",
    category: "原创",
  },
  {
    title: "手办包装盒",
    description: "生成真实的手办产品包装盒效果图",
    image: "/product-photography-clean.png",
    category: "手办",
  },
  {
    title: "限定版包装盒",
    description: "创建具有品牌标识的限定版包装盒设计",
    image: "/cinematic-color-grading-landscape.jpg",
    category: "限定",
  },
  {
    title: "收藏级包装盒",
    description: "专业级收藏品包装盒，包含完整品牌元素",
    image: "/portrait-with-tropical-beach-background.jpg",
    category: "收藏",
  },
]

export function Examples() {
  return (
    <section id="examples" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">作品展示</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            探索 AI 生成的 BANDAI 风格包装盒设计，查看来自社区的精彩作品
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={example.image || "/placeholder.svg"}
                  alt={example.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">{example.category}</Badge>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-2">{example.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{example.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
