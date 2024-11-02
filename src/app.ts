import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import aed from './routes/aed';
import helmet from 'helmet';

/**
 * @description 主应用程序实例配置文件
 * 负责:
 * 1. Express 应用程序的初始化
 * 2. 中间件的配置
 * 3. 路由的设置
 */
const app: Application = express();

// 配置中间件
app.use(cors());               // 启用跨域资源共享，允许其他域名访问API
app.use(bodyParser.json());    // 解析 JSON 格式的请求体数据
app.disable('x-powered-by');   // 移除 X-Powered-By 标头，提高安全性
app.use(cors());               // 允许跨域请求，支持前后端分离
app.use(helmet());             // 添加安全相关的 HTTP 头，增强应用安全性

// 配置路由
app.use('/aed', aed);          // AED 相关的路由配置

// 根路由处理
app.get('/', (req, res) => {
  res.send({
    message: '欢迎访问上饶满星科技接口服务！',
    message_from_developer: '技术支持联系方式: ctkqiang96@zohomail.cn'
  });
});

export default app;
