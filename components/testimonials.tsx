import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "陈小美",
    role: "手办设计师",
    avatar: "/professional-woman-portrait.png",
    content:
      "Nano Banana 完全改变了我的工作流程。生成的包装盒设计质量非常高，速度也很快。我可以快速为不同的角色创建专业的包装盒设计。",
    rating: 5,
  },
  {
    name: "张明",
    role: "内容创作者",
    avatar: "/professional-man-portrait.png",
    content:
      "一键生成功能太方便了！不需要输入复杂的提示词，上传图片就能得到专业的包装盒设计。这让我可以专注于创作本身。",
    rating: 5,
  },
  {
    name: "王丽",
    role: "产品经理",
    avatar: "/confident-businesswoman.png",
    content:
      "我们使用 Nano Banana 为所有产品创建包装盒设计。质量始终如一，生成速度也很快，大大降低了我们的设计成本。",
    rating: 5,
  },
  {
    name: "李强",
    role: "动漫爱好者",
    avatar: "/photographer-portrait.png",
    content:
      "作为一个动漫爱好者，我经常需要为收藏的角色创建包装盒。Nano Banana 生成的 BANDAI 风格包装盒非常专业，完全满足我的需求。",
    rating: 5,
  },
  {
    name: "刘芳",
    role: "社交媒体运营",
    avatar: "/creative-professional-portrait.png",
    content:
      "创建吸引人的内容从未如此简单。生成的包装盒设计质量很高，让我可以快速为不同的角色创建专业的视觉效果。",
    rating: 5,
  },
  {
    name: "赵伟",
    role: "游戏开发者",
    avatar: "/tech-professional-portrait.jpg",
    content:
      "非常适合快速原型设计。一键生成功能为我们节省了大量时间。强烈推荐给任何需要包装盒设计的创意团队。",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">深受创作者喜爱</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            加入数千名信任 Nano Banana 的专业人士，为您的创意项目提供支持
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
