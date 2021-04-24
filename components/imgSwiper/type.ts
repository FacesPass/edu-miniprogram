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
}