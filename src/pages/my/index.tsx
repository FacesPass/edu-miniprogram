import { View, Image, Button, Text } from '@tarojs/components'
import Taro, { useDidHide, useDidShow } from '@tarojs/taro'
import React, { memo, useEffect, useState } from 'react'
import Grid from '@/components/grid'

import { Login } from '@/service/api'

import { UsefInfo } from './type'
import './style.less'

import chilun from '@/assets/icon/chilun.png'
import robot from '@/assets/icon/robot.png'
import classNames from 'classnames'


const My = memo(() => {

  const [code, setCode] = useState('')
  const [userInfo, setUserInfo] = useState<UsefInfo>()

  useEffect(() => {
    Taro.getStorage({
      key: 'userInfo',
      success: res => {
        setUserInfo(res.data)
      },
      fail: err => {
        console.log(err)
      }
    })
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
        setUserInfo(userRes.userInfo)
        Taro.setStorage({ key: 'userInfo', data: userRes.userInfo })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View className="my-page">

      <View className="user-info">
        <View className="avatar">
          {
            userInfo?.avatarUrl ? <Image src={userInfo.avatarUrl} /> : <Image src={robot} />
          }
        </View>
        {userInfo?.nickName ? <View className="nickname">{userInfo.nickName}</View> : <Button className="login-btn" onClick={handleGetUserInfo}>点击登录</Button>}
      </View>

      <View className="func">
        <View className="favorite favorite-item-move">收藏</View>
        <View className="rank rank-item-move">排行</View>
        <View className="feetback feetback-item-move">反馈</View>
      </View>

      <Image className="chilun" src={chilun} />


      <View className="grid-position">
        <Grid purpleCount={1} className="purple-1" />
        <Grid purpleCount={2} className="purple-2" />
        <Grid greenCount={2} className="green-2" />
        <Grid greenCount={1} className="green-1" />
        <Grid orangeCount={1} className="orange-1" />
      </View>
    </View >
  )
})

export default My
