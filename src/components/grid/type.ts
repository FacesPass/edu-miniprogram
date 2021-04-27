import React from 'react'

export interface gridProps {
  mode?: 'vertical' | 'horizontal'
  totalCount?: number
  greenCount?: number
  purpleCount?: number
  oneByOne?: boolean
  className?: string
  style?: React.CSSProperties
}