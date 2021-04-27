import Taro from '@tarojs/taro'
import { config } from './config'
import { LoginOptions } from './type'

/** Login 请求登录接口 */
export function Login(loginOptions: LoginOptions) {
  const { code, rawData, signature, iv, encrypteData } = loginOptions
  return Taro.request({
    url: `${config.url}/user/login`, method: 'POST', data: {
      code,
      rawData,
      signature,
      iv,
      encrypteData
    }
  })
}