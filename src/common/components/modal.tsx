import React, { ReactElement } from 'react'
import styled from 'styled-components/native'
import ReactNativeModal from 'react-native-modal'
import { SystemTextRegular } from '../components/system-text-regular'
import { SystemPressable } from '../components/system-pressable'

const Dialog = styled.View`
  flex-direction: column;
  width: 80%;
  height: 30%;
  max-width: 400px;
  max-height: 170px;
  background-color: #eceff1;
  border-radius: 20px;
  align-self: center;
`

const MessageContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 20px;
`

const MessageText = styled(SystemTextRegular)`
  color: black;
  font-size: 14px;
  text-align: center;
`

const ButtonGroup = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: stretch;
  max-height: 50px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

type ButtonProperties = {
  wide?: boolean
  submit: boolean
}

const Button = styled(SystemPressable)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-top-color: #dddedf;
  border-top-width: 1px;
  border-left-color: #dddedf;
  border-left-width: ${(props: ButtonProperties) => (!props.wide && props.submit ? '1px' : '0')};
  border-bottom-left-radius: ${(props: ButtonProperties) => (props.wide || !props.submit ? '10px' : '0')};
  border-bottom-right-radius: ${(props: ButtonProperties) => (props.wide || !props.submit ? '0' : '10px')};
`
const ButtonText = styled(SystemTextRegular)`
  color: #007aff;
  font-size: 17px;
`

type ModalProperties = {
  message: string
  show: boolean
  cancellable?: boolean
  labelCancel?: string
  onCancel?: () => void
  labelOk?: string
  onOk?: () => void
}

export function Modal(props: ModalProperties): ReactElement {
  const {
    show,
    labelCancel: labelCancelProperty,
    labelOk: labelOkProperty,
    onCancel: onCancelProperty,
    onOk: onOkProperty,
    cancellable,
    message
  } = props

  if (!show) {
    return <></>
  }

  const labelCancel = labelCancelProperty || 'Cancel'
  const labelOk = labelOkProperty || 'Ok'
  const onCancel = onCancelProperty || (() => {})
  const onOk = onOkProperty || (() => {})
  const buttons = []
  if (cancellable) {
    buttons.push(
      <Button key="cancel" onPress={onCancel} submit={false} wide={false}>
        <ButtonText>{labelCancel}</ButtonText>
      </Button>
    )
  }
  buttons.push(
    <Button key="ok" onPress={onOk} submit wide={!cancellable}>
      <ButtonText>{labelOk}</ButtonText>
    </Button>
  )

  return (
    <ReactNativeModal isVisible={show}>
      <Dialog>
        <MessageContainer>
          <MessageText>{message}</MessageText>
        </MessageContainer>
        <ButtonGroup>{buttons}</ButtonGroup>
      </Dialog>
    </ReactNativeModal>
  )
}

Modal.defaultProps = {
  cancellable: false,
  labelCancel: 'Cancel',
  onCancel: () => {},
  labelOk: 'Ok',
  onOk: () => {}
}
