import * as fs from 'fs';
import * as path from 'path';
import { AED } from '../models/aed_model';

// 定义 AED JSON 数据文件的路径常量
const AED_FILE = path.join(__dirname, '../../database/aed.json');

/**
 * 获取 AED 数据的泛型函数
 * @template T 返回数据的类型参数
 * @returns {T | null} 返回解析后的数据或空值
 *
 * 此函数用于:
 * 1. 检查 AED 数据文件是否存在
 * 2. 读取 JSON 文件内容
 * 3. 解析 JSON 数据并返回指定类型的结果
 */
export function GetAED<T>(): T | null
{
  // 在尝试读取之前检查文件是否存在
  // 如果文件不存在，记录错误并返回 null
  if (!fs.existsSync(AED_FILE))
  {
    console.error(`文件不存在: ${AED_FILE}`);
    return null;
  }

  try
  {
    // 同步读取文件内容，使用 UTF-8 编码
    const data = fs.readFileSync(AED_FILE, 'utf-8');
    // 将 JSON 字符串解析为指定类型的对象
    return JSON.parse(data) as T;
  }
  catch (error)
  {
    // 捕获并记录文件读取或 JSON 解析过程中的错误
    console.error('读取或解析 JSON 文件时发生错误:', error);
  }

  // 如果发生任何错误，返回 null
  return null;
}
