# Vercel cleanUrls + 相对路径冲突

**日期**：2026-04-27  
**发现场景**：`/brand` 页面的 logo 图片无法显示

---

## 根本原因

`vercel.json` 配置了：
```json
{ "cleanUrls": true, "trailingSlash": false }
```

`cleanUrls: true` 把 `/brand.html` → `/brand`（无尾斜杠）。  
浏览器在解析 `/brand` 里的相对路径 `uploads/brand-logo.png` 时，把 `brand` 当成**文件名**而不是目录，所以相对路径解析到 `/uploads/brand-logo.png`（404），而不是 `/brand/uploads/brand-logo.png`（200）。

## 修复方法

所有 `<img>`, `<link>`, `<script>` 的 src/href 都改为**绝对路径**：

```html
<!-- 错误 -->
<img src="uploads/brand-logo.png">

<!-- 正确 -->
<img src="/brand/uploads/brand-logo.png">
```

## 预防规则

- 在 Vercel 静态项目里，**永远不用相对路径引用资源**，统一用从根开始的绝对路径
- 部署后检查：`curl -sI https://域名/页面 | grep x-vercel-cache` 确认是否命中 CDN

## 额外发现

该项目**未接 GitHub 自动部署**。push 到 GitHub 不会触发 Vercel 重新部署，必须在项目目录手动执行：
```
vercel --prod
```
