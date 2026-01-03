/**
 * OpenRouter SDK 封装
 * 提供与 @openrouter/sdk 相同的接口
 */

interface OpenRouterOptions {
  apiKey: string
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: Array<{
    type: 'text' | 'image_url'
    text?: string
    image_url?: {
      url: string
    }
  }>
}

interface ChatOptions {
  model: string
  messages: ChatMessage[]
  stream?: boolean
  modalities?: string[]
}

export class OpenRouter {
  private apiKey: string
  private baseURL = 'https://openrouter.ai/api/v1'

  constructor(options: OpenRouterOptions) {
    this.apiKey = options.apiKey
  }

  async chat() {
    return {
      send: async (options: ChatOptions) => {
        const response = await fetch(`${this.baseURL}/chat/completions`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001',
            'X-Title': 'Nano Banana AI Editor',
          },
          body: JSON.stringify({
            model: options.model,
            messages: options.messages,
            stream: options.stream || false,
            modalities: options.modalities,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`API请求失败: ${response.status} - ${errorText}`)
        }

        return await response.json()
      },
    }
  }
}

