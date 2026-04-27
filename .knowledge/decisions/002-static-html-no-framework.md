# ADR-002 · 技术栈：纯静态 HTML，不用框架（Phase 0）

**日期**：2026-04-26  
**状态**：确认

---

## 决定

Phase 0 所有页面用纯 HTML + CSS + 少量原生 JS，不引入 React/Next.js/Astro 等框架。

## 原因

1. `/intro` 和 `/brand` 都是纯展示页，零动态数据需求
2. 框架引入构建步骤，Vercel 部署复杂度提升
3. Josh 单兵，速度优先，框架反而是阻力
4. Vercel 静态托管免费且全球 CDN，纯 HTML 性能已经极好

## 边界条件

- `/tools` 产品列表页如果需要客户端搜索/过滤，可以引入轻量库（Alpine.js / Preact）
- 如果产品详情页需要从 CMS 拉数据，考虑引入 Astro（零 JS 静态生成）
- 如果后端需求出现（用户系统、支付），到时候另开 Next.js 项目

## 当前框架使用情况

| 文件 | 说明 |
|---|---|
| `app.jsx` | 早期遗留，目前页面未用 |
| `scenes-1.jsx`, `scenes-2.jsx` | 早期遗留，目前页面未用 |
| `stars.js` | 原生 JS 粒子效果 |
