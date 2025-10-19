import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, MessageSquare } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Decorative bananas */}
      <div className="absolute left-10 top-20 text-6xl opacity-20 rotate-12 hidden lg:block">🍌</div>
      <div className="absolute right-10 top-20 text-6xl opacity-20 -rotate-12 hidden lg:block">🍌</div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            The AI model that outperforms competitors
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-primary">Nano Banana</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
            editing and scene preservation that surpasses competitors. Experience the future of AI image editing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              Start Editing
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              View Examples
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">One-shot editing</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Multi-image support</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Natural language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
