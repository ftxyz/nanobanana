# Nano Banana AI Editor

一个基于Next.js和Gemini 2.5 Flash Image的AI图像生成工具，可以根据参考图片自动生成BANDAI风格的3D包装盒图像。

## ✨ 功能特性

- 🖼️ **图片上传**：支持拖拽上传参考图片
- 🤖 **AI生成**：使用Gemini 2.5 Flash Image模型自动生成BANDAI风格包装盒
- 📦 **专业包装盒**：自动生成包含角色艺术作品的3D产品包装盒
- 🎨 **BANDAI风格**：专业的BANDAI品牌风格和标志
- 📱 **响应式设计**：支持桌面和移动设备
- ⚡ **快速生成**：基于OpenRouter API的快速图像生成
- 🚀 **一键生成**：无需输入提示词，上传图片即可生成

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
   - 点击"Add Image"按钮或拖拽图片到上传区域
   - 选择包含角色的图片（支持JPG, PNG等格式）
   - 建议使用清晰、高质量的图片

2. **生成包装盒**
   - 点击"Generate Now"按钮
   - 系统会自动使用预设提示词生成BANDAI风格包装盒
   - 等待AI处理（通常需要几秒钟）
   - 查看生成的包装盒图像

### 生成内容

系统会自动生成包含以下元素的BANDAI风格包装盒：
- 📦 3D产品包装盒外观
- 🎨 参考图片中的角色艺术作品
- 🏷️ BANDAI品牌标志和元素
- ✨ 专业的包装盒设计

### 图片建议

- **高质量图片**：使用清晰、高分辨率的图片能获得更好的结果
- **角色清晰**：确保角色在图片中清晰可见
- **背景简洁**：简洁的背景有助于AI更好地识别角色

## 🛠️ 技术栈

- **框架**：Next.js 15.2.4
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **UI组件**：Radix UI
- **AI模型**：Google Gemini 2.5 Flash Image Preview
- **API服务**：OpenRouter
- **SDK封装**：自定义OpenRouter SDK封装

## 📁 项目结构

```
nanobanana/
├── app/
│   ├── api/
│   │   ├── generate/     # 图片生成API路由
│   │   └── test-env/     # 环境变量测试路由
│   ├── globals.css       # 全局样式
│   ├── layout.tsx        # 布局组件
│   └── page.tsx          # 首页
├── components/
│   ├── ui/               # UI组件库
│   └── editor.tsx        # 编辑器组件（包含硬编码提示词）
├── lib/
│   ├── openrouter.ts     # OpenRouter SDK封装
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
A: 检查API密钥是否正确配置在 `.env.local` 文件中，确保服务器已重启以加载环境变量

### Q: 生成的包装盒质量不好？
A: 尝试使用更高质量、更清晰的参考图片，确保角色在图片中清晰可见

### Q: 支持哪些图片格式？
A: 支持JPG、PNG、GIF等常见格式，建议使用PNG或JPG，最大文件大小50MB

### Q: 可以自定义提示词吗？
A: 当前版本使用预设的提示词专门生成BANDAI风格包装盒。如需修改，可以编辑 `components/editor.tsx` 中的 `DEFAULT_PROMPT` 常量

### Q: 生成的图片和原图一样？
A: 确保API密钥正确配置，检查服务器日志查看API响应。如果问题持续，请检查 `.env.local` 文件编码是否为UTF-8

## 📞 联系方式

如有问题，请提交Issue或联系开发者。

---

⭐ 如果这个项目对你有帮助，请给个Star！