# 🎓 Academic Showcase
[English](README.md) | [中文](README_zh.md)

A modern, responsive, and media-rich academic paper showcase built with **React 19**, **TypeScript**, and **Tailwind CSS**. Perfect for presenting research papers with support for videos, image grids, PDFs, comparisons, carousels, and more — all from local or remote assets.

---

## ✨ Features

- 📄 **Rich Content Types**: Text, images, videos (local & YouTube), PDFs, image comparisons, carousels, and responsive image grids.
- 🖼️ **Media Gallery**: Flexible grid layouts (IMAGE_GRID) with configurable columns per row.
- 🔁 **Interactive Carousel**: Swipeable or clickable media carousel with captions.
- ↔️ **Before/After Slider**: Built-in image comparison using ComparisonSlider.
- 📚 **PDF Embedding**: Inline PDF viewer for paper previews.
- 🌐 **Responsive Design**: Mobile-first layout with desktop enhancements.
- 🧩 **Declarative Data**: Define your paper content in clean TypeScript data files (e.g., paper0.ts).
- 🎨 **Custom Styling**: Tailwind CSS with semantic class names and consistent spacing.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (with hooks and FC)
- **Language**: TypeScript 5
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Type Safety**: Strict TypeScript interfaces (types.ts)
- **No external CMS** – content is defined statically in `/data`

---

## 📂 Project Structure

```
academic/
├── components/          # Reusable UI components
│   ├── Section.tsx      # Main content renderer (handles all content types)
│   ├── ComparisonSlider.tsx
│   └── ...
├── data/                # Paper content definitions
│   ├── paper0.ts        # Your paper data (title, authors, sections, etc.)
│   └── example.ts       # Template to get started
├── assets/              # Local media (images, videos, PDFs, icons)
│   ├── images/
│   ├── videos/
│   └── papers/
├── App.tsx              # Main app layout (Hero + Sections + Sidebar)
├── index.tsx            # Entry point
└── vite.config.ts       # Vite configuration
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Yu-Qi-hang/academic.git
cd academic
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Add your content
- Edit or create a new file in `/data` (e.g., `my-paper.ts`)
- Export a PaperData object following the structure in example.ts
- Update App.tsx to import and use your paper data

> 💡 Tip: Place local assets in `assets/` and reference them with relative paths like `"assets/images/diagram.png"`.

### 4. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view your showcase.

---

## 📝 Content Types Supported

In your sections array (inside `paperX.ts`), you can use:

| Type                 | Use Case |
|----------------------|--------|
| ContentType.TEXT   | Paragraphs (supports line breaks via `whitespace-pre-line`) |
| ContentType.IMAGE  | Single image with optional caption |
| ContentType.VIDEO  | MP4 or YouTube video |
| ContentType.PDF    | Embedded PDF viewer |
| ContentType.IMAGE_COMPARISON | Before/after slider |
| ContentType.IMAGE_GRID | Responsive grid of images/videos |
| ContentType.CAROUSEL | Auto/manual slideshow |

Example:
```ts
{
  type: ContentType.TEXT,
  text: "This is a paragraph.\nIt preserves line breaks."
}
```

---

## 🌍 Deploy

Deploy anywhere that supports static sites:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- GitHub Pages (`npm run build` → deploy `dist/`)
> ✨ **Pro Tip**: Customize the repository base by editing vite.config.ts.
---

## 📄 License

This project is licensed under the **MIT License** and may be used for academic or personal projects.

> ⚠️ Note: The website footer attribution follows the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license, but **the source code itself is licensed under the MIT License**. When reusing either, please comply with the respective terms.

---

## 🙌 Acknowledgements

Built with ❤️ for researchers who want beautiful, self-contained paper websites without complex backends.


> ✨ **Pro Tip**: Customize the sidebar links, hero section, or fonts by editing Hero.tsx, Sidebar.tsx, or constants.tsx.
