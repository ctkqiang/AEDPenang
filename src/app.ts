import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import aed from './routes/aed';

/**
 * @description 主应用程序实例配置文件
 * 负责:
 * 1. Express 应用程序的初始化
 * 2. 中间件的配置
 * 3. 路由的设置
 */
const app: Application = express();

// 配置中间件
app.use(cors());                // 启用跨域资源共享
app.use(bodyParser.json());     // 解析 JSON 格式的请求体

// 配置路由
app.use('/aed', aed);          // AED 相关的路由配置

// 根路由处理
app.get('/', (req, res) => {
  res.send({
    message: 'Hello World From 上饶满星科技!',
    message_from_developer: 'For services do contact me ctkqiang96@zohomail.cn'
  });
});

export default app;
