import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const examples = [
  {
    title: "Portrait Enhancement",
    description: "Transform portraits with natural lighting and professional quality",
    image: "/professional-portrait-with-natural-lighting.jpg",
    category: "Portrait",
  },
  {
    title: "Scene Transformation",
    description: "Change environments while maintaining subject consistency",
    image: "/person-in-futuristic-city-scene.jpg",
    category: "Scene",
  },
  {
    title: "Style Transfer",
    description: "Apply artistic styles while preserving character identity",
    image: "/artistic-style-transfer-portrait.jpg",
    category: "Style",
  },
  {
    title: "Object Editing",
    description: "Add or remove objects with seamless integration",
    image: "/product-photography-clean.png",
    category: "Object",
  },
  {
    title: "Color Grading",
    description: "Professional color correction and mood enhancement",
    image: "/cinematic-color-grading-landscape.jpg",
    category: "Color",
  },
  {
    title: "Background Replacement",
    description: "Replace backgrounds while maintaining natural lighting",
    image: "/portrait-with-tropical-beach-background.jpg",
    category: "Background",
  },
]

export function Examples() {
  return (
    <section id="examples" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Showcase Gallery</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            Explore the possibilities with our AI-powered image editing. Real examples from our community
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
