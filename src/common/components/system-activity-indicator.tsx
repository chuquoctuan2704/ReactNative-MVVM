import { ActivityIndicator } from 'react-native'
import React, { ReactElement } from 'react'
import ReactNativeModal from 'react-native-modal'
import styled from 'styled-components/native'
import { SystemTextRegular } from '../components/system-text-regular'

const MessageContainer = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`

const MessageText = styled(SystemTextRegular)`
  color: white;
`

export function SystemActivityIndicator(props: { show: boolean; message: string }): ReactElement {
  const { show, message } = props
  return (
    <ReactNativeModal isVisible={show}>
      <ActivityIndicator size="large" color="dodgerblue" />
      <MessageContainer>
        <MessageText>{message}</MessageText>
      </MessageContainer>
    </ReactNativeModal>
  )
}
