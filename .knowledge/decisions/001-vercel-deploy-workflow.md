# ADR-001 · Vercel 部署流程：手动 `vercel --prod`

**日期**：2026-04-27  
**状态**：确认

---

## 决定

不接 GitHub 自动部署，保持手动 `vercel --prod` 模式。

## 原因

1. 项目是纯静态 HTML，没有 CI/CD 需求
2. 手动部署意味着每次 push 不会立刻影响生产，可以先 review
3. GitHub repo 是 `qchen34/Altas`（协作账号），Vercel 项目是 `zhppluns-projects/atlas-yuntu`，两者之间没有自动绑定

## 边界条件

如果未来有多人协作、需要 PR preview，再考虑接 Vercel GitHub 集成。

## 操作规范

```bash
# 每次改完文件后：
git add <文件>
git commit -m "xxx"
git push                 # 同步 GitHub（代码备份）
vercel --prod            # 真正部署到生产
```

## 注意

`vercel --prod` 必须在 `/Users/joshighigga/Documents/Harness/projects/Cloud/` 目录下执行，不然会找不到 `.vercel/project.json`。
