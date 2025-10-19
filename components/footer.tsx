import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  License
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
          <p className="text-sm text-muted-foreground">© 2025 Nano Banana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
