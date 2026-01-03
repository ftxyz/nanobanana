import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">产品</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#editor" className="text-muted-foreground hover:text-foreground transition-colors">
                  包装盒生成
                </Link>
              </li>
              <li>
                <Link href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
                  作品展示
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  功能特性
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">资源</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  用户评价
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  使用指南
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">公司</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  加入我们
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">法律</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  使用条款
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  授权许可
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍌</span>
            <span className="font-semibold text-primary">Nano Banana</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Nano Banana. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}
