import { View, Image } from '@tarojs/components'
import React, { memo, FC } from 'react'
import classnames from 'classnames'

import { gridProps } from './type'
import './style.less'

import greenGrid from '@/assets/grid/green.png'
import purpleGrid from '@/assets/grid/purple.png'


const Grid: FC<gridProps> = memo(({
  mode,
  greenCount,
  purpleCount,
  totalCount,
  oneByOne,
  className,
  style }) => {
  if (oneByOne && !totalCount && (greenCount || purpleCount)) {
    throw new Error('如果传了oneByOne参数则必须传递totalCount参数并不需要传递greenCount和purpleCount参数')
  }

  if (!oneByOne && !greenCount && !purpleCount) {
    throw new Error('如果没传onByOne则必须传递greenCount或purpleCount中的其中一个参数')
  }

  const classNames = classnames(className, {
    'vertical-mode': mode === 'vertical'
  })

  const greenGridDisplay = () => {
    return (
      <Image className="grid-size" src={greenGrid} />
    )
  }

  const purpleGridDisplay = () => {
    return (
      <Image className="grid-size" src={purpleGrid} />
    )
  }

  const displayGrid = () => {
    const items: JSX.Element[] = []
    if (oneByOne) {
      for (let i = 0; i < totalCount!; i++) {
        if (i % 2 === 0) {
          items.push(purpleGridDisplay())
        } else {
          items.push(greenGridDisplay())
        }
      }
    } else {
      for (let i = 0; i < greenCount!; i++) {
        items.push(greenGridDisplay())
      }
      for (let i = 0; i < purpleCount!; i++) {
        items.push(purpleGridDisplay())
      }
    }

    return items
  }

  return (
    <View className={classNames} style={style}>{displayGrid()}</View>
  )
})

Grid.defaultProps = {
  purpleCount: 0,
  oneByOne: false,
  mode: 'vertical'
}

export default Grid