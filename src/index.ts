import app from './app';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import https from 'https';

/**
 * @description 服务器启动配置文件
 * 负责:
 * 1. 设置服务器端口
 * 2. 启动服务器监听
 */
const PORT = process.env.PORT || 3000;

if (PORT === "443")
{
  // 待在预发布环境实现
}

app.listen(PORT, () => {
  console.log(`AED 服务器正在运行，访问地址: http://localhost:${PORT}`);
});
