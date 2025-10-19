# Nano Banana AI Editor

一个基于Next.js和Gemini 2.5 Flash Image的AI图像生成工具，可以根据参考图片和提示词生成全新的图像。

## ✨ 功能特性

- 🖼️ **图片上传**：支持拖拽上传参考图片
- 🤖 **AI生成**：使用Gemini 2.5 Flash Image模型生成新图像
- 🎨 **智能提示**：根据参考图片和文本提示生成创意图像
- 📱 **响应式设计**：支持桌面和移动设备
- ⚡ **快速生成**：基于OpenRouter API的快速图像生成

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- pnpm (推荐) 或 npm

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/ftxyz/nanobanana.git
   cd nanobanana
   ```

2. **安装依赖**
   ```bash
   pnpm install
   # 或者使用 npm install
   ```

3. **配置环境变量**
   
   创建 `.env.local` 文件：
   ```bash
   echo "OPENROUTER_API_KEY=你的API密钥" > .env.local
   ```
   
   > 💡 **获取API密钥**：访问 [OpenRouter](https://openrouter.ai/) 注册账号并获取API密钥

4. **启动开发服务器**
   ```bash
   pnpm dev
   # 或者使用 npm run dev
   ```

5. **打开浏览器**
   
   访问 [http://localhost:3000](http://localhost:3000)

## 🔧 配置说明

### 环境变量

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `OPENROUTER_API_KEY` | OpenRouter API密钥 | ✅ |

### 获取API密钥

1. 访问 [OpenRouter官网](https://openrouter.ai/)
2. 注册账号并登录
3. 在控制台获取API密钥
4. 将密钥添加到 `.env.local` 文件

## 📖 使用指南

### 基本使用

1. **上传参考图片**
   - 点击"Add Image"按钮
   - 选择或拖拽图片到上传区域
   - 支持常见图片格式（JPG, PNG, GIF等）

2. **输入生成提示词**
   - 在"Generation Prompt"文本框中输入描述
   - 例如："创建一个1/7比例的手办，放在电脑桌上..."

3. **生成图像**
   - 点击"Generate Now"按钮
   - 等待AI处理（通常需要几秒钟）
   - 查看生成的图像结果

### 提示词建议

- **详细描述**：提供具体的场景、风格、颜色等细节
- **参考图片**：上传高质量的参考图片能获得更好的结果
- **创意结合**：结合参考图片内容和你的创意想法

## 🛠️ 技术栈

- **框架**：Next.js 15.2.4
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **UI组件**：Radix UI
- **AI模型**：Google Gemini 2.5 Flash Image Preview
- **API服务**：OpenRouter

## 📁 项目结构

```
nanobanana/
├── app/
│   ├── api/generate/     # API路由
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 布局组件
│   └── page.tsx          # 首页
├── components/
│   ├── ui/               # UI组件库
│   └── editor.tsx        # 编辑器组件
├── lib/
│   └── utils.ts          # 工具函数
└── public/               # 静态资源
```

## 🚀 部署

### Vercel部署（推荐）

1. 将代码推送到GitHub
2. 在 [Vercel](https://vercel.com/) 导入项目
3. 在项目设置中添加环境变量：
   - `OPENROUTER_API_KEY`: 你的API密钥
4. 部署完成！

### 其他平台

- **Netlify**：同样需要设置环境变量
- **Railway**：支持自动部署
- **自建服务器**：需要Node.js环境

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License

## 🆘 常见问题

### Q: 生成失败怎么办？
A: 检查API密钥是否正确，网络连接是否正常

### Q: 生成的图片质量不好？
A: 尝试更详细的提示词，或使用更高质量的参考图片

### Q: 支持哪些图片格式？
A: 支持JPG、PNG、GIF等常见格式，建议使用PNG或JPG

## 📞 联系方式

如有问题，请提交Issue或联系开发者。

---

⭐ 如果这个项目对你有帮助，请给个Star！