import { View } from '@tarojs/components'
import Taro, { FC, useReady } from '@tarojs/taro'
import React, { memo, useEffect } from 'react'

const My: FC = memo(() => {

  useEffect(() => {
    handleLogin()
  })

  const handleLogin = async () => {
    try {
      const res = await Taro.login()
      console.log(res.code)
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
