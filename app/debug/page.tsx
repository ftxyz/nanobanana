"use client"

import { useEffect, useState } from "react"

export default function DebugPage() {
  const [info, setInfo] = useState<any>({})

  useEffect(() => {
    // 测试 API
    fetch('/api/test-env')
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => setInfo({ error: err.message }))
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>调试信息</h1>
      
      <h2>环境信息</h2>
      <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
        {JSON.stringify(info, null, 2)}
      </pre>

      <h2>测试链接</h2>
      <ul>
        <li><a href="/">首页</a></li>
        <li><a href="/test">测试页面</a></li>
        <li><a href="/api/test-env">API 测试</a></li>
      </ul>

      <h2>浏览器信息</h2>
      <pre style={{ background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
        {JSON.stringify({
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          cookieEnabled: navigator.cookieEnabled,
        }, null, 2)}
      </pre>
    </div>
  )
}

