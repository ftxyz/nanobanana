import { NextResponse } from 'next/server'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export async function GET() {
  const cwd = process.cwd()
  const envPath = join(cwd, '.env.local')
  const envExists = existsSync(envPath)
  
  let fileContent = null
  let fileError = null
  let apiKeyFromFile = null
  
  if (envExists) {
    try {
      fileContent = readFileSync(envPath, 'utf-8')
      // 处理 UTF-16 编码（移除 \u0000）
      const cleanContent = fileContent.replace(/\u0000/g, '')
      const match = cleanContent.match(/OPENROUTER_API_KEY=(.+?)(?:\r?\n|$)/)
      if (match && match[1]) {
        apiKeyFromFile = match[1].trim()
      }
    } catch (error: any) {
      fileError = error.message
    }
  }
  
  return NextResponse.json({
    hasApiKey: !!process.env.OPENROUTER_API_KEY,
    apiKeyLength: process.env.OPENROUTER_API_KEY?.length || 0,
    apiKeyPrefix: process.env.OPENROUTER_API_KEY?.substring(0, 15) || "未设置",
    fromEnv: !!process.env.OPENROUTER_API_KEY,
    fromFile: !!apiKeyFromFile,
    apiKeyFromFileLength: apiKeyFromFile?.length || 0,
    cwd,
    envPath,
    envExists,
    fileContent: fileContent ? fileContent.substring(0, 100) : null,
    fileError,
    allEnvKeys: Object.keys(process.env).filter(k => 
      k.includes('OPENROUTER') || k.includes('API') || k.includes('KEY')
    ),
  })
}

