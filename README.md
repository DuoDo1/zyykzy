# 情侣控制欲 vs 占有欲测评

这是一个可部署到 Cloudflare Pages 免费 `.pages.dev` 域名的静态测评站。

## 最终方案

- 结论采用“主导倾向 + 综合比例”，不做非黑即白标签。
- 测评共 50 题：40 道单选 + 10 道多选。
- 分数分为三类：控制欲、占有欲、健康边界。
- 结果包含：主导类型、三项比例、关系画像、相处建议。

## 加锁方式

访问页面由 `_worker.js` 保护。未登录用户会进入 `/login`，提交正确口令后获得 7 天有效的 HttpOnly 会话 Cookie。

这里使用 `_worker.js`，是为了兼容 Cloudflare Pages 的后台拖拽上传。拖拽上传不支持 `/functions` 目录。

在 Cloudflare Pages 后台设置环境变量：

```text
ACCESS_CODES=xhs-2026,VIP520
SESSION_SECRET=一串足够长的随机密钥
```

`ACCESS_CODES` 支持多个口令，用英文逗号分隔。卖货时可以给不同批次用户不同口令，后续下架某批口令时直接改环境变量并重新部署。

## 发布

### 方式一：后台拖拽上传

直接上传项目根目录里的文件即可，确保上传内容里包含 `_worker.js`，且不要包含 `/functions` 目录。

### 方式二：Git 连接部署

把整个目录连接到 Cloudflare Pages。构建命令留空，输出目录填项目根目录 `/`。
