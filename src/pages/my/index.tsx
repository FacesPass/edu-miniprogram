import { View, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { memo, useEffect, useState } from 'react'
import Grid from '@/components/grid'

import { Login } from '@/service/api'

import './style.less'

import chilun from '@/assets/icon/齿轮.png'


const My = memo(() => {

  const [code, setCode] = useState('');

  useEffect(() => {
    handleGetCode()
  }, [])

  /** 获取用户身份码 */
  const handleGetCode = async () => {
    try {
      const res = await Taro.login()
      res.code && setCode(res.code)
      console.log(res)
      // if (res.code) {
      //   const successRes = await Login(res.code)
      //   console.log(successRes)
      // }


    } catch (e) {
      console.log(e)
    }
  }

  const handleGetUserInfo = async () => {
    try {
      const settingRes = await Taro.getSetting()
      if (settingRes.authSetting['scope.userInfo']) {
        const userRes = await Taro.getUserProfile({ desc: '获取信息提供更好体验' })
        console.log(userRes)
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <View className="my-page">

      <View className="user-info">
        <View className="avatar">
          <Image src={chilun} />
        </View>
        <Button className="login-btn">点击登录</Button>
      </View>

      <Image className="chilun" src={chilun} />


      <View className="grid-position">
        <Grid purpleCount={1} className="purple-1" />
        <Grid purpleCount={3} className="purple-3" />
        <Grid greenCount={2} className="green-2" />
        <Grid greenCount={1} className="green-1" />
        <Grid oneByOne totalCount={2} className="total-2" />
      </View>
    </View>
  )
})

export default My
