import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Nano Banana different from other AI image editors?",
    answer:
      "Nano Banana uses advanced AI models that excel at character consistency and scene preservation. Unlike competitors, our technology maintains the identity of subjects across edits while allowing precise control over specific elements. The natural language interface makes complex edits as simple as describing what you want.",
  },
  {
    question: "How does the image upload and editing process work?",
    answer:
      "Simply upload your reference image (up to 50MB), describe your desired changes in natural language, and click generate. Our AI processes your request in seconds, maintaining the original quality while applying your edits. You can iterate quickly with multiple variations until you achieve the perfect result.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "Nano Banana supports all common image formats including JPG, PNG, WebP, and HEIC. Output files are provided in high-quality PNG format by default, with options for other formats available in the advanced settings.",
  },
  {
    question: "Is there a limit to how many images I can edit?",
    answer:
      "Free accounts include 10 edits per month to get started. Pro plans offer unlimited edits with priority processing, batch editing capabilities, and access to advanced features like multi-image consistency and custom model training.",
  },
  {
    question: "Can I use Nano Banana for commercial projects?",
    answer:
      "Yes! All Pro plan subscribers have full commercial rights to their generated images. Free tier users can upgrade individual images for commercial use. We provide clear licensing terms and support for enterprise customers with specific requirements.",
  },
  {
    question: "How fast is the image generation process?",
    answer:
      "Most edits complete in 5-15 seconds depending on complexity. Our optimized pipeline and distributed infrastructure ensure fast processing even during peak times. Pro users get priority queue access for even faster results.",
  },
  {
    question: "What kind of edits can I make with text prompts?",
    answer:
      "You can change backgrounds, modify lighting and colors, add or remove objects, apply artistic styles, enhance details, change clothing or accessories, adjust poses, and much more. The AI understands context and can handle complex multi-step edits from a single prompt.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. All uploads are encrypted in transit and at rest. We never use your images for model training without explicit permission. Images are automatically deleted from our servers after 30 days, and you can request immediate deletion at any time from your account settings.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            Everything you need to know about Nano Banana
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-base pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
