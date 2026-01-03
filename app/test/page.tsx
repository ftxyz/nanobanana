export default function TestPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>测试页面</h1>
      <p>如果你能看到这个页面，说明 Next.js 应用正常运行。</p>
      <p>当前时间: {new Date().toLocaleString('zh-CN')}</p>
      <p>环境: {process.env.NODE_ENV}</p>
      <p>Vercel: {process.env.VERCEL ? '是' : '否'}</p>
      <a href="/">返回首页</a>
    </div>
  )
}

