import { View, Text } from '@tarojs/components'
import { FC } from '@tarojs/taro'

import Swiper from '../../../components/swiper'


import './index.less'

const Index: FC = () => {
  return (
    <Swiper items={[
      {
        imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201303%2F16%2F173710lvx470i4348z6i6z.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621863901&t=ca2b28a77c6494e4c18be725ace8e98b'
      },
      {
        imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201312%2F03%2F165526ophx4l6c6ll3cnpl.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621863901&t=05c65111a4bb5af3f88121cee608db7f'
      }
    ]} />
  )
}

export default Index
