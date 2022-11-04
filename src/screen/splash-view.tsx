import React, { ReactElement, useMemo } from 'react'
import styled from 'styled-components/native'
import { useTranslation } from 'react-i18next'

const ViewContainer = styled.View`
  background-color: #0355fe;
`
const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`
const EmptyContainer = styled.View`
  height: 52px;
`
const SymbolContainer = styled.View`
  margin-top: 71px;
`
const TitleText = styled.Text`
  margin-top: 23px;
  color: #ffffff;
  font-size: 19px;
  letter-spacing: 3.2px;
`

export function SplashView(): ReactElement {
  const { t } = useTranslation()
  const title = useMemo(() => t('app.name'), [t])

  return (
    <ViewContainer>
      <LogoContainer>
        <SymbolContainer />
        <TitleText>{title}</TitleText>
        <EmptyContainer />
      </LogoContainer>
    </ViewContainer>
  )
}
