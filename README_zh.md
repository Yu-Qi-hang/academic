# 🎓 Academic Showcase（学术成果展示站）
[English](README.md) | [中文](README_zh.md)

一个现代化、响应式且富媒体的学术论文展示网站，基于 **React 19**、**TypeScript** 和 **Tailwind CSS** 构建。支持本地或远程的视频、图片网格、PDF、对比滑块、轮播图等多种内容形式，非常适合用于展示你的研究成果。

---

## ✨ 核心特性

- 📄 **丰富的内容类型**：文本、图片、视频、PDF、前后对比图、轮播图、响应式图片网格等。
- 🖼️ **媒体画廊**：灵活的 IMAGE_GRID 布局，可自定义每行列数。
- 🔁 **交互式轮播**：带标题的可点击/滑动媒体轮播组件。
- ↔️ **前后对比滑块**：内置 ComparisonSlider 组件，直观展示差异。
- 📚 **PDF 内嵌预览**：直接在网页中嵌入论文 PDF。
- 🌐 **响应式设计**：移动优先，同时在桌面端提供更佳体验。
- 🧩 **声明式数据**：通过清晰的 TypeScript 文件（如 paper0.ts）定义内容，无需数据库或 CMS。
- 🎨 **统一视觉风格**：基于 Tailwind CSS，语义化类名，间距一致。

---

## 🛠️ 技术栈

- **框架**：React 19（函数组件 + Hooks）
- **语言**：TypeScript 5
- **构建工具**：Vite 6
- **样式方案**：Tailwind CSS
- **类型安全**：严格的 TypeScript 接口（见 types.ts）
- **零外部依赖**：所有内容静态定义于 `/data` 目录

---

## 📂 项目结构

```
academic/
├── components/          # 可复用 UI 组件
│   ├── Section.tsx      # 主内容渲染器（处理所有内容类型）
│   ├── ComparisonSlider.tsx
│   └── ...
├── data/                # 论文内容定义
│   ├── paper0.ts        # 你的论文数据（标题、作者、章节等）
│   └── example.ts       # 快速上手模板
├── assets/              # 本地资源（图片、视频、PDF、图标）
│   ├── images/
│   ├── videos/
│   └── papers/
├── App.tsx              # 应用主布局（Hero + Sections + Sidebar）
├── index.tsx            # 入口文件
└── vite.config.ts       # Vite 配置
```

---

## 🚀 快速开始

### 1. 克隆仓库
```bash
git clone https://github.com/Yu-Qi-hang/academic.git
cd academic
```

### 2. 安装依赖
```bash
npm install
# 或
yarn install
```

### 3. 添加你的内容
- 在 `/data` 目录下编辑或新建文件（如 `my-paper.ts`）
- 按照 example.ts 的结构导出一个 PaperData 对象
- 修改 App.tsx，导入并使用你的新论文数据

> 💡 提示：将本地资源放入 `assets/` 文件夹，并使用相对路径引用，例如 `"assets/images/diagram.png"`。

### 4. 本地运行
```bash
npm run dev
```
访问 [http://localhost:5173](http://localhost:5173) 即可预览你的展示站。

---

## 📝 支持的内容类型

在 `paperX.ts` 的 sections 数组中，可使用以下类型：

| 类型 | 用途 |
|------|------|
| ContentType.TEXT | 段落文本（保留换行符，通过 `whitespace-pre-line` 实现） |
| ContentType.IMAGE | 单张图片（可选标题） |
| ContentType.VIDEO | MP4 视频或 YouTube 链接 |
| ContentType.PDF | 内嵌 PDF 查看器 |
| ContentType.IMAGE_COMPARISON | 前后对比滑块 |
| ContentType.IMAGE_GRID | 响应式图片/视频网格 |
| ContentType.CAROUSEL | 自动或手动轮播 |

示例：
```ts
{
  type: ContentType.TEXT,
  text: "这是一个段落。\n它会保留换行符。"
}
```

---

## 🌍 部署上线

支持任意静态网站托管服务：
- [Vercel](https://vercel.com)（推荐）
- [Netlify](https://netlify.com)
- GitHub Pages（运行 `npm run build` 后部署 `dist/` 目录）

> ✨ **小技巧**：如需自定义部署路径（如子目录），请修改 `vite.config.ts` 中的 `base` 配置。

---

## 📄 许可证

本项目采用 **MIT 许可证**，可用于学术或个人项目。

> ⚠️ 注意：网站页脚声明内容遵循 [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)，但**源代码本身采用 MIT 许可证**。如需复用，请分别遵守对应条款。

---

## 🙌 致谢

为希望打造美观、独立、无需复杂后端的学术展示页面的研究者而生 ❤️。

> ✨ **进阶提示**：可通过编辑 Hero.tsx、Sidebar.tsx 或 constants.tsx 自定义侧边栏链接、头部信息或图标字体等。

---