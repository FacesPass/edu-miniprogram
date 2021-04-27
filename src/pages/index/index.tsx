import React from 'react'
import { View, Text } from '@tarojs/components'

import ImgSwiper from '../../components/imgSwiper'

import './index.less'

const Index = () => {

  return (
    <View className="home-page">
      <ImgSwiper
        className="swiper-img"
        items={[
          { imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F035%2F063%2F726%2F3ea4031f045945e1843ae5156749d64c.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622031439&t=e2eb33f72175ffaf5e598cab271e7549', url: '1234' },
          { imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F035%2F063%2F726%2F3ea4031f045945e1843ae5156749d64c.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622031439&t=e2eb33f72175ffaf5e598cab271e7549', url: '22222' }]}
        onClick={url => console.log(url)} />
    </View>
  )
}

export default Index
