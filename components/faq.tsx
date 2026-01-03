import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Nano Banana 与其他 AI 工具有什么不同？",
    answer:
      "Nano Banana 专注于生成专业的 BANDAI 风格 3D 包装盒设计。我们的 AI 模型经过专门训练，能够自动识别角色特征并创建高质量的包装盒效果图，包含品牌标识和专业的艺术设计。无需输入提示词，一键即可生成。",
  },
  {
    question: "如何使用这个工具生成包装盒？",
    answer:
      "非常简单！只需上传一张角色图片（支持 JPG、PNG、WebP 等格式），点击\"生成\"按钮即可。AI 会自动识别角色特征，生成专业的 BANDAI 风格 3D 包装盒设计。整个过程只需几秒钟。",
  },
  {
    question: "支持哪些图片格式？",
    answer:
      "Nano Banana 支持所有常见的图片格式，包括 JPG、PNG、WebP 和 HEIC。生成的包装盒图片以高质量 PNG 格式输出，确保最佳显示效果。",
  },
  {
    question: "生成的包装盒包含哪些元素？",
    answer:
      "生成的包装盒包含完整的 BANDAI 风格设计元素：角色高质量艺术图、BANDAI 品牌标识、专业排版、3D 包装盒结构，以及收藏级包装盒的所有视觉元素。",
  },
  {
    question: "可以用于商业项目吗？",
    answer:
      "可以！所有生成的包装盒设计都可以用于个人和商业项目。我们提供清晰的授权条款，支持企业用户的具体需求。",
  },
  {
    question: "生成速度有多快？",
    answer:
      "大多数情况下，包装盒生成在 5-15 秒内完成。我们优化的生成流程和分布式基础设施确保即使在高峰时段也能快速处理。",
  },
  {
    question: "需要输入提示词吗？",
    answer:
      "不需要！Nano Banana 采用智能自动生成模式。您只需上传角色图片，AI 会自动理解角色特征并生成专业的包装盒设计。系统内置了优化的提示词，确保每次都能生成高质量的 BANDAI 风格包装盒。",
  },
  {
    question: "我的数据安全吗？",
    answer:
      "绝对安全。所有上传的图片在传输和存储时都经过加密处理。我们不会在未经您明确许可的情况下使用您的图片进行模型训练。图片会在 30 天后自动从服务器删除，您也可以随时从账户设置中请求立即删除。",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">常见问题</h2>
          <p className="text-muted-foreground text-lg text-balance leading-relaxed">
            关于 Nano Banana 的一切，您想知道的都在这里
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
