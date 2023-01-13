import React, { ReactElement } from 'react'
import { Pressable, PressableProps } from 'react-native'

const RIPPLE_CONFIG = {
  color: 'white',
  borderless: false
}

export function SystemPressable(props: PressableProps): ReactElement {
  const { children } = props

  return (
    <Pressable android_ripple={RIPPLE_CONFIG} {...props}>
      {children}
    </Pressable>
  )
}
