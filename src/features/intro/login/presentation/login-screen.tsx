import Debug from 'debug'
import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { navigate } from '../../../../common/services/navigation-service'
import LoginViewModel from './login-view-model'
const debug = Debug('login')

const ScreenContainer = styled(SafeAreaView)`
  background-color: white;
  width: 100%;
  height: 100%;
`
const LogoContainer = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`
const LogoIcon = styled.View`
  width: 50px;
  height: 50px;
  background-color: red;
`
const FormContainer = styled.View`
  height: 40%;
  margin-horizontal: 20px;
  justify-content: center;
  align-items: center;
`
const FormComponent = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`
const InputContainer = styled.View`
  border: 1px solid #aaa;
  border-radius: 10px;
  padding-horizontal: 10px;
  flex-direction: row;
  align-items: center;
  height: 40px;
`
const InputComponent = styled.TextInput`
  flex: 1;
`
const IconPass = styled.TouchableOpacity`
  width: 15px;
  height: 15px;
  background-color: ${(props: { isShowPass: boolean }) => (props.isShowPass ? 'red' : 'blue')};
`
const TitleInput = styled.Text``
const ButtonContainer = styled.View`
  background-color: white;
  width: 100%
  margin-top: 30px;
`
const ButtonComponent = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  elevation: 10;
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-radius: 10px;
`
const ButtonTextContainer = styled.View`
  background-color: #005088;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
const ButtonText = styled.Text`
  padding: 10px;
  color: white;
`
export function LoginScreen(): ReactElement {
  const { isShowPass, setIsShowPass, getLogin, checkEmail, checkPassword } = LoginViewModel()
  return (
    <ScreenContainer>
      <LogoContainer>
        <LogoIcon />
      </LogoContainer>
      {/* Form input */}
      <FormContainer>
        <FormComponent>
          <TitleInput>Tài khoản</TitleInput>
          <InputContainer>
            <InputComponent placeholder={'Nhap id hoac email'} onChangeText={checkEmail} />
          </InputContainer>
        </FormComponent>
        <FormComponent>
          <TitleInput>Mật khẩu</TitleInput>
          <InputContainer>
            <InputComponent secureTextEntry={isShowPass} placeholder={'Nhap mat khau'} onChangeText={checkPassword} />
            <IconPass isShowPass={isShowPass} onPress={() => setIsShowPass(!isShowPass)} />
          </InputContainer>
        </FormComponent>
        {/* button */}
        <ButtonContainer>
          <ButtonComponent
            onPress={() => {
              debug('Login button pressed')
              getLogin()
            }}>
            <ButtonTextContainer>
              <ButtonText>Login</ButtonText>
            </ButtonTextContainer>
          </ButtonComponent>
          <ButtonComponent
            onPress={async () => {
              debug('Register button pressed')
              navigate('Register')
            }}>
            <ButtonTextContainer>
              <ButtonText>Register</ButtonText>
            </ButtonTextContainer>
          </ButtonComponent>
        </ButtonContainer>
      </FormContainer>
    </ScreenContainer>
  )
}
