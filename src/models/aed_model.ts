/**
 * @description AED 数据模型接口定义
 * 定义了 AED 位置信息的数据结构
 */
export interface AED
{
  id: number;                         // 位置的唯一标识符
  name: string;                       // 位置名称
  address: string;                    // 位置的完整地址
  coordinates: [string, string];      // 位置的经纬度坐标
  images_url: string[];               // AED 位置的图片URL数组
  poi: string[];                      // 相关兴趣点列表
}
