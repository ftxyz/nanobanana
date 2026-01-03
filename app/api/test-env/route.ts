import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    hasApiKey: !!process.env.OPENROUTER_API_KEY,
    apiKeyLength: process.env.OPENROUTER_API_KEY?.length || 0,
    apiKeyPrefix: process.env.OPENROUTER_API_KEY?.substring(0, 15) || "未设置",
    fromEnv: !!process.env.OPENROUTER_API_KEY,
    allEnvKeys: Object.keys(process.env).filter(k => 
      k.includes('OPENROUTER') || k.includes('API') || k.includes('KEY')
    ),
    environment: process.env.NODE_ENV,
    vercel: !!process.env.VERCEL,
  })
}

