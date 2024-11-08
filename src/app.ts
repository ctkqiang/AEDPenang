import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import aed from './routes/aed';
import helmet from 'helmet';
import * as path from 'path';
import { GetAED } from './controllers/get_data';
import { AED } from './models/aed_model';


/**
 * @description 主应用程序实例配置文件
 * 负责:
 * 1. Express 应用程序的初始化
 * 2. 中间件的配置
 * 3. 路由的设置
 */
const app: Application = express();                           // 创建一个 Express 应用程序实例
const APP_NAME: string = process.env.APP_NAME || 'AED PENANG' // 定义应用程序名称，如果环境变量中有设置则使用环境变量，否则默认使用 'AED PENANG'

// 配置中间件
app.use(cors());                                              // 启用跨域资源共享，允许其他域名访问API
app.use(bodyParser.json());                                   // 解析 JSON 格式的请求体数据
app.disable('x-powered-by');                                  // 移除 X-Powered-By 标头，提高安全性
app.use(cors());                                              // 允许跨域请求，支持前后端分离
app.use(helmet());                                            // 添加安全相关的 HTTP 头，增强应用安全性
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "cdn.jsdelivr.net",
          "unpkg.com",
          "*.bootstrap.com",
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "cdn.jsdelivr.net",
          "*.bootstrap.com",
          "cdnjs.cloudflare.com",
          "*.bootstrapcdn.com",
          "unpkg.com"
        ],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        connectSrc: ["'self'", "https:"],
        fontSrc: ["'self'", "https:", "data:", "cdnjs.cloudflare.com"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'self'"],
        tileSrc: ["'self'", "https://*.tile.openstreetmap.org"],
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  })
);

/**
 * 配置应用程序路由
 * -----------------------------
 * 1. 静态文件服务配置
 *    - 将 '../public' 目录设置为静态资源目录
 *    - 用于提供图片、CSS、JavaScript等静态文件服务
 */
app.use(express.static(path.join(__dirname, '../public')));   // 配置应用程序路由
app.set('view engine', 'ejs');                                // EJS用于服务端渲染动态HTML页面
app.set('views', path.join(__dirname, '../public'));          // 设置视图文件存放目录为 '../public'
/**
 * 2. AED专用路由配置
 * -----------------------------
 * - 处理所有以 '/aed' 开头的请求
 * - 包含获取AED位置信息的各种接口
 * - 详细路由定义见 ./routes/aed.ts
 *
 * @example
 * - GET /aed/all：获取所有AED位置
 * - GET /aed/:id：获取特定ID的AED信息
 */
app.use('/api/aed', aed);                                     // AED 相关的路由配置

// 根路由处理
app.get('/api/', (req, res) => {
  res.send({
    message: '欢迎访问上饶满星科技接口服务！',
    message_from_developer: '技术支持联系方式: ctkqiang96@zohomail.cn'
  });
});

app.get('/', (req, res) => {
  res.redirect(301, '/public/main');
});

app.get('/public/main', (req, res) => {
  res.render('index', { title: APP_NAME });
});

app.get('/public/locate-aed', (req, res) => {
  const aedData = GetAED<AED[]>();

  res.render('pages/aed', {
    title: APP_NAME,
    aedData: aedData || []
  });
});

app.get('/public/about', (req, res) => {
  res.render('pages/about', { title: APP_NAME });
});

app.get('/public/how-to-use-aed', (req, res) => {
  res.render('pages/how-to-use-aed', { title: APP_NAME });
});

app.get('/public/pages/contact', (req, res) => {
  res.render('pages/contact', { title: APP_NAME });
});

export default app;
