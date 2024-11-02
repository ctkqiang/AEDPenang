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

}

app.listen(PORT, () => {
  console.log(`AED Server is running on http://localhost:${PORT}`);
});
