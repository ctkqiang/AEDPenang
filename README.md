# 槟城AED定位API

为马来西亚槟城的自动体外除颤器(AED)位置提供信息的RESTful API服务。

## 概述

本服务提供访问AED位置信息的端点，包括地址、坐标和图像。它使用Express.js和TypeScript构建，提供强大且类型安全的后端服务。

## 🚀 功能特点

- 获取槟城所有AED位置
- 位置详情包括：
  - 地点名称
  - 完整地址
  - 坐标（纬度和经度）
  - AED位置图片
  - 兴趣点

## 🛠 技术栈

- Node.js
- TypeScript
- Express.js
- cors
- body-parser

## 📁 项目结构

```
AEDPenang/
├── src/
│   ├── controllers/
│   │   └── get_data.ts
│   ├── models/
│   │   └── aed_model.ts
│   ├── routes/
│   │   └── aed.ts
│   ├── app.ts
│   └── index.ts
├── database/
│   └── aed.json
└── package.json
```

## 🚦 API端点

### 基础URL
```
http://localhost:3000
```

### 端点

| 方法 | 端点 | 描述 |
|--------|----------|-------------|
| GET    | /        | 欢迎信息 |
| GET    | /aed/all | 获取所有AED位置 |

## 🏃‍♂️ 快速开始

1. 克隆仓库
```bash
git clone https://github.com/yourusername/AEDPenang.git
```

2. 安装依赖
```bash
cd AEDPenang
npm install
```

3. 运行开发服务器
```bash
npm run dev
```

服务器将在 `https://localhost` 启动

## 💻 开发

运行开发模式（热重载）：
```bash
npm run dev
```

构建项目：
```bash
npm run build
```

运行测试：
```bash
npm test
```

## 📝 数据结构

每个AED位置遵循以下结构：
```typescript
interface AED {
  id: number;                    // 位置ID
  name: string;                  // 位置名称
  address: string;               // 完整地址
  coordinates: [string, string]; // 坐标（纬度，经度）
  images_url: string[];         // AED位置图片
  poi: string[];                // 兴趣点
}
```

## 👨‍💻 联系方式

如需服务或咨询，请联系：
- 电子邮件：ctkqiang96@zohomail.cn

## 🏢 公司

上饶满星科技 (Man Xing Enterprise)

## 📄 许可证

```
版权所有 2025 上饶满星科技 (Man Xing Enterprise)

根据Apache许可证2.0版（以下简称"许可证"）获得许可；
除非遵守许可证，否则您不得使用此文件。
您可以在以下位置获取许可证副本：

    http://www.apache.org/licenses/LICENSE-2.0

除非适用法律要求或书面同意，否则根据许可证分发的软件是基于
"按原样"分发的，没有任何明示或暗示的担保或条件。
有关许可证下的特定语言管理权限和限制，请参阅许可证。
```

## 参与贡献
我们欢迎您为此项目做出贡献或将其用于您的项目。如果您使用了本项目的代码，请务必注明代码来源并提及原作者。您可以通过以下方式参与:

- 提交 Pull Request
- 报告问题或bug
- 提出新功能建议
- 完善文档

在使用本项目代码时，请在您的项目文档中注明:
> "部分代码来源于 AEDPenang 项目 (https://github.com/ctkqiang/AEDPenang)"

感谢您的支持与合作！

### 个人捐赠支持
如果您认为该项目对您有所帮助，并且愿意个人捐赠以支持其持续发展和维护，🥰我非常感激您的慷慨。
您的捐赠将帮助我继续改进和添加新功能到该项目中。 通过财务捐赠，您将有助于确保该项目保持免
费和对所有人开放。即使是一小笔捐款也能产生巨大的影响，也是对我个人的鼓励。

以下是我的支付宝二维码，您可以扫描二维码进行个人捐赠：

<br />

| 微信支付 | 支付宝支付 |
| --- | --- |
| <img src="https://github.com/ctkqiang/ctkqiang/blob/main/assets/IMG_9863.jpg?raw=true" height="500" /> | <img src="https://github.com/ctkqiang/ctkqiang/blob/main/assets/IMG_9859.JPG?raw=true" height="500" /> |

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F5VCZJU)



## 爱心捐款
<a href="https://qr.alipay.com/fkx19369scgxdrkv8mxso92"><img src="https://img.shields.io/badge/alipay-00A1E9?style=for-the-badge&logo=alipay&logoColor=white"></a> <a href="https://ko-fi.com/F1F5VCZJU"><img src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white"></a> <a href="https://www.paypal.com/paypalme/ctkqiang"><img src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white"></a> <a href="https://donate.stripe.com/00gg2nefu6TK1LqeUY"><img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white"></a>

## 关注我
<a href="https://twitch.tv/ctkqiang"><img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white"></a> <a href="https://open.spotify.com/user/22sblyn4dsymya3xinw3umhai"><img src="https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white"></a> <a href="https://www.tiktok.com/@ctkqiang"><img src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white"></a> <a href="https://stackoverflow.com/users/10758321/%e9%92%9f%e6%99%ba%e5%bc%ba"><img src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white"></a> <a href="https://www.facebook.com/JohnMelodyme/"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"></a> <a href="https://github.com/ctkqiang"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a> <a href="https://www.instagram.com/ctkqiang"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a> <a href="https://www.linkedin.com/in/ctkqiang/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> <a href="https://linktr.ee/ctkqiang.official"><img src="https://img.shields.io/badge/linktree-39E09B?style=for-the-badge&logo=linktree&logoColor=white"></a> <a href="https://github.com/ctkqiang/ctkqiang/blob/main/assets/IMG_9245.JPG?raw=true"><img src="https://img.shields.io/badge/WeChat-07C160?style=for-the-badge&logo=wechat&logoColor=white"></a>
