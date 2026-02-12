# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

CFBlog-Plus 是一个运行在 Cloudflare Workers 上的博客系统，使用 Cloudflare KV 作为数据库。这是基于 gdtool/cloudflare-workers-blog 的二次开发版本。

**核心文件**: `index_plus.js` - 包含完整的 Workers 代码，包括配置、路由处理、渲染逻辑等所有功能。

## 架构说明

### 单文件架构
整个博客系统的后端逻辑都在 `index_plus.js` 中实现，采用以下结构：

1. **配置区** (顶部)
   - `ACCOUNT`: 账号、密码、API token、KV 变量绑定
   - `OPT`: 网站配置（域名、主题、缓存、SEO、自定义代码等）

2. **请求处理** (addEventListener)
   - 路由分发：`/admin`、`/article`、`/page`、`/category`、`/tags`、`/sitemap.xml`、`/search.xml`
   - Cloudflare 缓存策略：前台页面缓存，后台不缓存

3. **核心功能模块**
   - 文章渲染：使用 Mustache.js 模板引擎
   - KV 数据操作：文章、分类、标签、导航、链接等
   - 权限验证：Basic Auth
   - 特色功能：文章置顶、隐藏、静态搜索

### 主题系统
- 主题位于 `themes/` 目录
- 主要主题：`JustNews`、`default`、`default2.0`、`yinwang`
- 主题结构：`index.html`（首页）、`article.html`（文章页）、`admin/`（后台页面）
- 通过 `OPT.themeURL` 和 `OPT.theme_github_path` 配置主题路径

### 数据存储
- 使用 Cloudflare KV 存储所有数据（文章、配置、分类、标签等）
- KV 变量通过 `ACCOUNT.kv_var` 绑定到 Workers 环境

## 部署相关

### GitHub Actions 自动化
- 文件：`.github/workflows/actions-cfblog.yml`
- 功能：定时生成 `search.xml` 和 `sitemap.xml`
- 需要配置的 Secrets：
  - `CFBLOG_TOKEN`: 第三方访问 token
  - `CFBLOG_HOST`: 博客域名
  - `CFBLOG_BRANCH`: 目标分支

### Cloudflare Workers 部署
1. 修改 `index_plus.js` 中的 `ACCOUNT` 和 `OPT` 配置
2. 在 Cloudflare Workers 中创建 KV 命名空间
3. 绑定 KV 到 Workers（变量名与 `ACCOUNT.kv_var` 一致）
4. 部署 `index_plus.js` 到 Workers

## 关键配置说明

### 文章置顶功能
- 通过 `top_timestamp` 字段控制
- 前台显示：`OPT.top_flag` 和 `OPT.top_flag_style`
- 后台设置：`OPT.editor_page_scripts` 中的置顶设置逻辑

### 文章隐藏功能
- 通过 `hidden` 字段控制（值为 1 时隐藏）
- 后台标识：`OPT.hidden_flag` 和 `OPT.hidden_flag_style`

### 近期文章排序
- `OPT.recentlyType`:
  - `1` - 按创建时间倒序（按 id 倒序）
  - `2` - 按修改时间排序

### 编辑器配置
- 使用 Editor.md (Markdown 编辑器)
- 配置位于 `OPT.editor_page_scripts`
- 支持 emoji、任务列表、LaTeX、流程图、时序图
- 可选开启 HTML 标签解析（默认关闭）

## 修改注意事项

- 修改配置时只需编辑 `index_plus.js` 顶部的 `ACCOUNT` 和 `OPT` 对象
- 修改主题时编辑 `themes/` 目录下对应主题的 HTML 文件
- 路由逻辑在 `handlerRequest` 函数的 switch 语句中
- 所有 HTML 页面使用 Mustache.js 语法进行变量替换
