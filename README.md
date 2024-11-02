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

服务器将在 `http://localhost:3000` 启动

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
