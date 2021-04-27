import { View, Image } from '@tarojs/components'
import React, { memo, FC } from 'react'
import classnames from 'classnames'

import { GridProps } from './type'
import './style.less'

import greenGrid from '@/assets/grid/green.png'
import purpleGrid from '@/assets/grid/purple.png'
import orangeGrid from '@/assets/grid/orange.png'


const Grid: FC<GridProps> = memo(({
  mode,
  greenCount,
  purpleCount,
  orangeCount,
  totalCount,
  oneByOne,
  className,
  style }) => {
  if (oneByOne && !totalCount && (greenCount || purpleCount || orangeCount)) {
    throw new Error('如果传了oneByOne参数则必须传递totalCount参数，并且不需要传递greenCount、purpleCount、orangeCount参数')
  }

  if (!oneByOne && !greenCount && !purpleCount && !orangeCount) {
    throw new Error('如果没传onByOne则必须传递greenCount或purpleCount或orangeCount中的其中一个参数')
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

  const orangeGridDisplay = () => {
    return (
      <Image className="grid-size" src={orangeGrid} />
    )
  }

  const displayGrid = () => {
    const items: JSX.Element[] = []
    if (oneByOne) {
      for (let i = 0; i < totalCount!; i++) {
        if (i % 3 === 0) {
          items.push(greenGridDisplay())
        } else if (i % 3 === 1) {
          items.push(purpleGridDisplay())
        } else if (i % 3 === 2) {
          items.push(orangeGridDisplay())
        }
      }
    } else {
      for (let i = 0; i < greenCount!; i++) {
        items.push(greenGridDisplay())
      }
      for (let i = 0; i < purpleCount!; i++) {
        items.push(purpleGridDisplay())
      }
      for (let i = 0; i < orangeCount!; i++) {
        items.push(orangeGridDisplay())
      }
    }

    return items
  }

  return (
    <View className={classNames} style={style}>{displayGrid()}</View>
  )
})

Grid.defaultProps = {
  orangeCount: 0,
  purpleCount: 0,
  oneByOne: false,
  mode: 'vertical'
}

export default Grid