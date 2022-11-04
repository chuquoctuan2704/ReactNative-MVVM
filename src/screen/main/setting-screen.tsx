import React, { ReactElement, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { PreferencesContext } from '../../providers/preferences-provider'

const Container = styled(SafeAreaView)``
const ViewContainer = styled.View`
  width: 70%;
  height: 30%;
  background-color: green;
`
const TextContainer = styled.Text``
const ButtonChange = styled.TouchableOpacity``
export function SettingScreen(): ReactElement {
  const { setPreferences } = useContext(PreferencesContext)
  return (
    <Container>
      <ViewContainer>
        <ButtonChange
          onPress={async () => {
            await setPreferences({ selectedId: '' })
          }}>
          <TextContainer>Setting</TextContainer>
        </ButtonChange>
      </ViewContainer>
    </Container>
  )
}
