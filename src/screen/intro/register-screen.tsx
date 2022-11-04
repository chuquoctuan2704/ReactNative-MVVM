import Debug from 'debug'
import React, { ReactElement, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { PreferencesContext } from '../../providers/preferences-provider'
const debug = Debug('login')

const Container = styled(SafeAreaView)``
const ViewContainer = styled.View`
  width: 70%;
  height: 50%;
  background-color: red;
`
const TextContainer = styled.Text``
const ButtonChange = styled.TouchableOpacity``
export function RegisterScreen(): ReactElement {
  const { setPreferences } = useContext(PreferencesContext)
  return (
    <Container>
      <ViewContainer>
        <ButtonChange
          onPress={async () => {
            await setPreferences({ selectedId: '1111' })
          }}>
          <TextContainer>register</TextContainer>
        </ButtonChange>
      </ViewContainer>
    </Container>
  )
}
