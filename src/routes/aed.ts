import { Router } from 'express';
import { GetAED } from '../controllers/get_data';
import { AED } from '../models/aed_model';

/**
 * @description AED 路由处理模块
 * 负责处理所有与 AED 相关的 HTTP 请求
 */
const aed = Router();                   // 创建一个新的路由器实例，用于处理 AED 相关的路由

/**
 * @route GET /aed/all
 * @description 获取所有 AED 位置信息
 * @access 公开
 */
aed.get('/all', (req, res) => {
  const data = GetAED<AED>();

  if (data)
  {
    console.info(`GET::[/aed/all]`);   // 记录请求日志
    res.send(data);                    // 发送响应数据
  }
  else
  {
    res.status(404).json({ error: 'No AED data found' });
  }
});

export default aed;
