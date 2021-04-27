import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { memo, useEffect } from 'react'

import './index.less'

import chilun from '@/assets/icon/齿轮.png'

const My = memo(() => {

  useEffect(() => {
    handleGetCode()
  })

  /** 获取用户身份码 */
  const handleGetCode = async () => {
    try {
      // const res = await Taro.login()
      // if (res.code) {
      //   const successRes = await Taro.request({ url: '', data: { code: res.code } })
      //   console.log(successRes)
      // }

      const settingRes = await Taro.getSetting()
      if (settingRes.authSetting['scope.userInfo']) {
        const userRes = await Taro.getUserProfile({ desc: '获取信息提供更好体验' })
        console.log(userRes)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View className="my-page">
      <Image className="chilun" src={chilun} />
    </View>
  )
})

export default My
