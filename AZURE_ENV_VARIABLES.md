# WeCare Azure环境变量配置指南

本文档提供了在Azure Static Web Apps中配置环境变量的详细步骤，确保您的WeCare应用在生产环境中正常运行。

## 环境变量的重要性

环境变量允许您在不修改代码的情况下，为不同的部署环境（开发、测试、生产）配置不同的设置。在WeCare应用中，环境变量可用于：

- API端点URL
- 第三方服务集成密钥
- 功能标志
- 分析和监控配置

## 在Azure Static Web Apps中配置环境变量

### 步骤1：准备环境变量列表

首先，确定您需要在Azure中配置的环境变量。查看您的`.env.production`文件，列出所有需要在生产环境中使用的变量。

目前，WeCare应用的`.env.production`文件包含以下变量：

```
REACT_APP_ENV=production
REACT_APP_ENABLE_ANALYTICS=true
```

如果您有其他需要在生产环境中使用的变量，请将它们添加到列表中。

### 步骤2：在Azure门户中配置环境变量

1. 登录[Azure门户](https://portal.azure.com)
2. 导航到您的Static Web App资源
3. 在左侧菜单中，选择**配置**
4. 在**应用程序设置**选项卡中，点击**添加**
5. 添加您的环境变量：
   - 名称：`REACT_APP_ENV`
   - 值：`production`
6. 点击**确定**
7. 重复步骤4-6，添加其他环境变量：
   - 名称：`REACT_APP_ENABLE_ANALYTICS`
   - 值：`true`
8. 添加完所有环境变量后，点击**保存**应用更改

![配置环境变量](https://docs.microsoft.com/zh-cn/azure/static-web-apps/media/getting-started/portal-screenshot-11.png)

### 步骤3：验证环境变量配置

环境变量配置完成后，Azure会自动重新部署您的应用以应用新的设置。要验证环境变量是否正确配置：

1. 等待重新部署完成
2. 访问您的应用URL
3. 如果您的应用有调试或管理页面，可以在那里查看环境变量值
4. 或者，您可以在应用中添加临时代码来显示环境变量值（仅用于测试，之后记得删除）

## 环境变量命名规则

在React应用中，要访问的环境变量必须以`REACT_APP_`开头。例如：

- `REACT_APP_API_URL`
- `REACT_APP_FEATURE_FLAG`

不以`REACT_APP_`开头的环境变量将不会被注入到React应用中。

## 在代码中访问环境变量

在React组件中，您可以使用`process.env`对象访问环境变量：

```javascript
// 示例：访问API URL环境变量
const apiUrl = process.env.REACT_APP_API_URL;

// 示例：根据环境变量启用/禁用功能
const enableAnalytics = process.env.REACT_APP_ENABLE_ANALYTICS === 'true';
```

## 环境变量安全性

请注意以下安全最佳实践：

1. **不要存储敏感信息**：所有在前端React应用中使用的环境变量都会被编译到JavaScript包中，因此可以被用户查看。不要在环境变量中存储API密钥、密码或其他敏感信息。

2. **使用后端API**：对于需要保密的API密钥或凭据，应该在后端API中使用，而不是在前端应用中。

3. **定期轮换密钥**：如果您必须在环境变量中使用API密钥，请定期轮换这些密钥。

## 故障排除

如果环境变量未正常工作，请检查以下几点：

1. 确保变量名称以`REACT_APP_`开头
2. 确保在Azure门户中正确配置了变量
3. 确保应用已重新部署以应用新的环境变量
4. 检查GitHub Actions工作流日志，确认部署过程中没有错误

## 结论

正确配置环境变量是确保WeCare应用在Azure生产环境中正常运行的重要步骤。通过遵循本指南，您可以轻松管理不同环境的配置，而无需修改代码。