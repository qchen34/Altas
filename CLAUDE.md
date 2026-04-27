# 云图 · 项目上下文

> 父级 `/Harness/CLAUDE.md` 已自动加载，本文件只补充项目特有信息。
> 冷启动顺序、Agent 协议、mempalace 规则见父级。

---

## 项目速览

| 字段 | 值 |
|---|---|
| 项目名 | 云图 · YunTu (Atlas) |
| 域名 | atlas.pandawanderer.com（临时），正式域名待定 |
| 部署 | Vercel（手动 `vercel --prod`，未接 GitHub 自动部署） |
| 阶段 | Phase 0 · MVP 验证期（2026.04 起） |
| 创始人 | Josh，单兵 |

---

## 当前已上线页面

| 路径 | 内容 | 状态 |
|---|---|---|
| `/intro` | 产品介绍 / BP 页 | ✅ 上线 |
| `/brand` | 品牌手册 | ✅ 上线 |
| `/` | 正式首页 | 🔲 未开始 |
| `/tools` | 产品列表页 | 🔲 未开始 |
| `/tools/[slug]` | 产品详情页 | 🔲 未开始 |

---

## 技术栈

- **托管**：Vercel，项目名 `atlas-yuntu`
- **部署命令**：`vercel --prod`（在项目根目录执行）
- **无构建步骤**：纯静态 HTML/CSS/JS，Vercel 直接托管
- **字体**：JetBrains Mono（本地），PingFang SC（系统字体）
- **图片**：放 `{page}/uploads/` 目录，src 必须用**绝对路径** `/page/uploads/xxx.png`

---

## 快速通道（Fast Lane）

以下情况跳过 Clarifier → Architect 完整流程，直接执行：

- **Bug 修复**：明确问题 + 明确解法，直接改 → commit → `vercel --prod`
- **内容更新**：文字/图片调整，直接改 → commit → `vercel --prod`
- **样式微调**：视觉细节，直接改 → commit → `vercel --prod`

执行后如发现**新坑**，记入 `.knowledge/gotchas/`。

## 全量通道（Full Lane）

以下情况走完整 Harness 流程：

- **新页面 / 新功能**：需要 Clarifier 确认需求
- **架构决策**：技术栈选择、第三方集成、商业模式调整
- **不确定做法是否正确的任何改动**

---

## 关键文件

```
.tasks/backlog.md              ← 当前任务状态（每次修改后更新）
.knowledge/decisions/          ← 架构/产品决策记录
.knowledge/gotchas/            ← 踩过的坑
.knowledge/patterns/           ← 统一写法/规范
decisions.md                   ← 原始决策日志（迁移至 .knowledge/ 后可废弃）
memory.md                      ← 项目记忆全文（冷启动时喂给 AI）
roadmap.md                     ← 里程碑和本周 TODO
design.md                      ← 产品设计说明
```

---

## mempalace 存储约定

本项目在 mempalace 中的 wing/room 规范：

| 内容类型 | wing | room |
|---|---|---|
| 产品决策 | `technical` | `yuntu-decisions` |
| 踩坑记录 | `technical` | `yuntu-gotchas` |
| 项目进度快照 | `technical` | `yuntu-progress` |
| Josh 对项目的想法 | `creative` | `yuntu-ideas` |
