import Taro from '@tarojs/taro'
import { config } from './config'

/** Login 请求登录接口 */
export function Login(code: string) {
  console.log(code)
  return Taro.request({ url: `${config.url}/user/login`, method: 'POST', data: { code } })
}