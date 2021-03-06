import { EventProps } from '@tarojs/components'
import React, { TouchEventHandler } from 'react'

type SwiperItemType = {
  imgUrl: string
  url?: string
}

export interface SwiperProps {
  className?: string
  style?: React.CSSProperties
  circular?: boolean
  autoplay?: boolean
  indicatorDots?: boolean
  indicatorColor?: string
  indicatorActiveColor?: string
  items: SwiperItemType[]
  onClick?: (url: string) => void
}