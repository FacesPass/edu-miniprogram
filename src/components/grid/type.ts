import React from 'react'

export interface GridProps {
  mode?: 'vertical' | 'horizontal'
  totalCount?: number
  greenCount?: number
  purpleCount?: number
  orangeCount?: number
  oneByOne?: boolean
  className?: string
  style?: React.CSSProperties
}