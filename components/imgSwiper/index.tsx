import React from 'react'
import { Image, View } from '@tarojs/components'
import { Swiper, SwiperItem } from '@tarojs/components'
import { FC } from '@tarojs/taro'
import { memo } from 'react'

import { SwiperProps } from './type'
import './index.less'

const IndexSwiper: FC<SwiperProps> = memo(({
  className,
  style,
  circular,
  autoplay,
  indicatorColor,
  indicatorActiveColor,
  indicatorDots,
  items }) => {

  if (!items.length) {
    throw new Error('不能传入一个空的swiperItem数组')
  }

  return (
    <Swiper
      className={className}
      style={style}
      indicatorColor={indicatorColor}
      indicatorActiveColor={indicatorActiveColor}
      circular={circular}
      indicatorDots={indicatorDots}
      autoplay={autoplay}>
      {
        items.map((item, index) => {
          return (
            <SwiperItem key={index}>
              <Image className="swiper-img" src={item.imgUrl}></Image>
            </SwiperItem>
          )
        })
      }

    </Swiper>
  )
})

IndexSwiper.defaultProps = {
  circular: true,
  indicatorDots: true,
  autoplay: true,
  indicatorColor: '#fff',
  indicatorActiveColor: '#c2c2c2'
}

export default IndexSwiper