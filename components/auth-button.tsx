"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"

export function AuthButton() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    // 获取当前用户
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    // 监听认证状态变化
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogin = () => {
    window.location.href = "/auth/login"
  }

  const handleLogout = async () => {
    await fetch("/auth/logout", { method: "POST" })
    setUser(null)
    window.location.href = "/"
  }

  if (loading) {
    return (
      <Button variant="outline" size="sm" disabled>
        加载中...
      </Button>
    )
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground">
          {user.email || user.user_metadata?.user_name || "用户"}
        </span>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          登出
        </Button>
      </div>
    )
  }

  return (
    <Button variant="outline" size="sm" onClick={handleLogin}>
      使用 GitHub 登录
    </Button>
  )
}

