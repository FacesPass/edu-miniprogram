import { Image } from '@tarojs/components'
import { Swiper, SwiperItem } from '@tarojs/components'
import { FC } from '@tarojs/taro'
import React, { memo } from 'react'

import { SwiperProps } from './type'
import './style.less'

const IndexSwiper: FC<SwiperProps> = memo(({
  className,
  style,
  circular,
  autoplay,
  indicatorColor,
  indicatorActiveColor,
  indicatorDots,
  items,
  onClick
}) => {

  if (!items.length) {
    throw new Error('不能传入一个空的swiperItem数组')
  }

  const handleClick = (url: string) => {
    onClick && onClick(url)
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
            <SwiperItem key={index} onClick={e => handleClick(item.url as string)}>
              <Image mode="scaleToFill" className="swiper-img" src={item.imgUrl}></Image>
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
  indicatorColor: '#c2c2c2',
  indicatorActiveColor: '#fff'
}

export default IndexSwiper