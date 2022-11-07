import React, { ReactElement } from 'react'
import styled from 'styled-components/native'

const ViewContainer = styled.View`
  background-color: #444444;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const TitleText = styled.Text`
  margin-top: 23px;
  color: #ffffff;
  font-size: 19px;
  letter-spacing: 3.2px;
`

export function SplashScreen(): ReactElement {
  return (
    <ViewContainer>
      <TitleText>Splash</TitleText>
    </ViewContainer>
  )
}
