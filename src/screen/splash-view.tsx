import React, { ReactElement, useMemo } from 'react'
import styled from 'styled-components/native'
import { useTranslation } from 'react-i18next'

const ViewContainer = styled.View`
  background-color: #0355fe;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const LogoContainer = styled.Text`
  color: black;
`

export function SplashView(): ReactElement {
  const { t } = useTranslation()
  const title = useMemo(() => t('app.name'), [t])

  return (
    <ViewContainer>
      <LogoContainer>{title}</LogoContainer>
    </ViewContainer>
  )
}
