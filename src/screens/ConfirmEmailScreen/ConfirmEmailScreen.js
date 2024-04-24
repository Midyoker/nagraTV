import { View, Text } from 'react-native'
// import unnamed from '../../assets/unnamed.png';
import { StyleSheet } from 'react-native';
import React from 'react'
import CustomInput from '../../components/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignUpScreens = () => {
  const [username, setUsername] = useState('');
  const [ code, setCode]  = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

 const OnSignInPressed = () => {
    console.warn("Sign In");
  }
  const OnResendPressed = () => {
    console.warn("Resend Code");
  }

  const onConfirm = () => {
    console.warn("Confirm");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Your Email</Text>
      <CustomInput
        placeholder="Enter the confirmation code"
        value={code}
        setValue={setCode}
        style={styles.input}
      />
      <CustomButton
        text="Confirm"
        onPress={onConfirm}
      />
      <Text
        style={{ color: "grey", fontWeight: "bold", padding: 10 }}>Or
      </Text>
      {/* <SocialSignInButtons/> */}
      
      <CustomButton
        text="Back to Sign In!"
        onPress={OnSignInPressed}
        type="TERTIARY" />
      
      <CustomButton
        text="Resend Code"
        onPress={OnResendPressed}
        type="TERTIARY" />
    </View>

  )
}

export default SignUpScreens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
  },
  title: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    color: "#051C60",
    margin: 10,
  },
});