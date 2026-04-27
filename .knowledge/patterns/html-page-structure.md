# 页面结构规范

适用于云图所有静态 HTML 页面。

---

## 目录结构

每个新页面建独立子目录：
```
/brand/
  index.html
  uploads/       ← 该页面的图片资源
```

## 资源路径

**必须用绝对路径**，不用相对路径：
```html
<!-- 正确 -->
<link rel="stylesheet" href="/styles.css">
<img src="/brand/uploads/logo.png">

<!-- 错误（Vercel cleanUrls 下会 404）-->
<link rel="stylesheet" href="../styles.css">
<img src="uploads/logo.png">
```

## 字体加载

JetBrains Mono 字体文件在 `/fonts/` 目录（gitignore 排除，不上 GitHub，但 Vercel 可以本地读取）。

```css
@font-face {
  font-family: 'JetBrains Mono';
  src: url('/fonts/JetBrainsMono-Regular.woff2') format('woff2');
}
```

## 全局 CSS

公共样式在 `/styles.css`，各页面 `<head>` 中引入。页面特有样式内联在 `<style>` 块里。

## Meta 标准头

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#0a0a0a">
<link rel="stylesheet" href="/styles.css">
```
