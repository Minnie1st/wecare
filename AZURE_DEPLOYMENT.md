# WeCare Azure部署指南

本文档提供了将WeCare React应用部署到Microsoft Azure的详细步骤。

## 先决条件

- Azure账户
- Azure CLI或Azure Portal访问权限
- Node.js和npm已安装
- Git已安装

## 部署选项

### 选项1: 使用Azure Static Web Apps（推荐）

Azure Static Web Apps是部署React应用的最佳选择，它提供了自动的CI/CD流程和全球CDN分发。

#### 步骤：

1. **登录Azure Portal**
   - 访问 [https://portal.azure.com](https://portal.azure.com)

2. **创建Static Web App资源**
   - 点击"创建资源"
   - 搜索并选择"Static Web App"
   - 填写以下信息：
     - 订阅：选择您的Azure订阅
     - 资源组：创建新的或使用现有的
     - 名称：wecare-app（或您喜欢的名称）
     - 托管计划：选择适合的计划（Free或Standard）
     - 区域：选择最接近您用户的区域
     - 源：选择您的代码托管平台（GitHub、Azure DevOps等）
     - 组织：选择您的组织
     - 存储库：选择WeCare项目存储库
     - 分支：main（或您的主分支）
     - 构建预设：React
     - 应用位置：/
     - API位置：api
     - 输出位置：build

3. **审核并创建**
   - 点击"审核+创建