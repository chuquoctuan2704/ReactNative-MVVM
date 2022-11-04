import React, { ReactElement, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { navigate } from '../../common/services/navigation-service'
import { PreferencesContext } from '../../providers/preferences-provider'

const Container = styled(SafeAreaView)``
const ViewContainer = styled.View`
  width: 70%;
  height: 30%;
  background-color: blue;
`
const TextContainer = styled.Text``
const ButtonChange = styled.TouchableOpacity``
export function HomeScreen(): ReactElement {
  const { setPreferences } = useContext(PreferencesContext)
  return (
    <Container>
      <ViewContainer>
        <ButtonChange
          onPress={async () => {
            await setPreferences({ selectedId: '' })
          }}>
          <TextContainer>Main</TextContainer>
        </ButtonChange>
        <ButtonChange
          onPress={async () => {
            navigate('Setting')
          }}>
          <TextContainer>setting</TextContainer>
        </ButtonChange>
      </ViewContainer>
    </Container>
  )
}
