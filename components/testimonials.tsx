import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    avatar: "/professional-woman-portrait.png",
    content:
      "Nano Banana has completely transformed my workflow. The character consistency is unmatched, and the speed is incredible. I can iterate on ideas faster than ever before.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    avatar: "/professional-man-portrait.png",
    content:
      "The natural language interface makes it so easy to get exactly what I want. No more fighting with complex tools - just describe it and watch the magic happen.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    avatar: "/confident-businesswoman.png",
    content:
      "We use Nano Banana for all our campaign visuals. The quality is consistently high, and the turnaround time has cut our production costs by 60%.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Photographer",
    avatar: "/photographer-portrait.png",
    content:
      "As a professional photographer, I was skeptical at first. But the scene preservation and lighting control are genuinely impressive. It's become an essential part of my toolkit.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Social Media Manager",
    avatar: "/creative-professional-portrait.png",
    content:
      "Creating engaging content has never been easier. The multi-image support means I can maintain brand consistency across all our social channels effortlessly.",
    rating: 5,
  },
  {
    name: "James Taylor",
    role: "Game Developer",
    avatar: "/tech-professional-portrait.jpg",
    content:
      "Perfect for rapid prototyping game assets. The one-shot editing feature saves us countless hours in the concept phase. Highly recommend for any creative team.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Loved by Creators Worldwide</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            Join thousands of professionals who trust Nano Banana for their creative projects
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
