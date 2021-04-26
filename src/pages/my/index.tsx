import { View } from '@tarojs/components'
import Taro, { FC, useReady } from '@tarojs/taro'
import React, { memo, useEffect } from 'react'

const My: FC = memo(() => {

  useEffect(() => {
    handleLogin()
  })

  const handleLogin = async () => {
    try {
      // const res = await Taro.login()
      // if (res.code) {
      //   const successRes = await Taro.request({ url: '', data: { code: res.code } })
      //   console.log(successRes)
      // }

      const userRes = await Taro.getUserProfile({ desc: '获取信息提供更好体验' })
      console.log(userRes)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View>

    </View>
  )
})

export default My
