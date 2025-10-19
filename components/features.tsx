import { Card } from "@/components/ui/card"
import { Wand2, ImageIcon, Sparkles, Zap } from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "AI-Powered Editing",
    description:
      "Transform your images with natural language commands. Our advanced AI understands context and delivers precise results.",
  },
  {
    icon: ImageIcon,
    title: "Character Consistency",
    description:
      "Maintain character identity across edits. Perfect for creating consistent visual narratives and storytelling.",
  },
  {
    icon: Sparkles,
    title: "Scene Preservation",
    description:
      "Edit specific elements while keeping the background and atmosphere intact. Surgical precision meets creative freedom.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Get results in seconds, not minutes. Our optimized pipeline ensures rapid generation without compromising quality.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Powerful Features for Creative Control</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            Everything you need to bring your creative vision to life with AI-powered precision
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
