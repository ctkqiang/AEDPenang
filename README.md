# AED Penang API

A RESTful API service that provides information about Automated External Defibrillator (AED) locations in Penang, Malaysia.

## Overview

This service provides endpoints to access information about AED locations, including addresses, coordinates, and images. It's built with Express.js and TypeScript, offering a robust and type-safe backend service.

## 🚀 Features

- Get all AED locations in Penang
- Location details including:
  - Name of location
  - Complete address
  - Coordinates (latitude & longitude)
  - Images of the AED location
  - Points of interest

## 🛠 Tech Stack

- Node.js
- TypeScript
- Express.js
- cors
- body-parser

## 📁 Project Structure

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

## 🚦 API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Welcome message |
| GET    | /aed/all | Get all AED locations |

## 🏃‍♂️ Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/AEDPenang.git
```

2. Install dependencies
```bash
cd AEDPenang
npm install
```

3. Run the development server
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 💻 Development

To run in development mode with hot-reload:
```bash
npm run dev
```

To build the project:
```bash
npm run build
```

To run tests:
```bash
npm test
```

## 📝 Data Structure

Each AED location follows this structure:
```typescript
interface AED {
  id: number;                    // Id of the location
  name: string;                  // name of the location
  address: string;               // Full Address of the location
  coordinates: [string, string]; // Coordinates (lat, long)
  images_url: string[];         // Images of the AED location
  poi: string[];                // Point of interest
}
```

## 👨‍💻 Contact

For services or inquiries, contact:
- Email: johnmelodymel@qq.com

## 🏢 Company

上饶满星科技有限公司 (Shangrao Manxing Technology Co., Ltd)

## 📄 License

Copyright 2024 上饶满星科技 (Man Xing Enterprise)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
