import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AuthCodeError() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-2xl font-bold">认证错误</h1>
      <p className="text-muted-foreground text-center max-w-md">
        登录过程中出现错误。请重试或联系支持团队。
      </p>
      <Link href="/">
        <Button>返回首页</Button>
      </Link>
      <Link href="/auth/login">
        <Button variant="outline">重新登录</Button>
      </Link>
    </div>
  )
}

