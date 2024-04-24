import { View, Text, Image } from 'react-native'
import unnamed from '../../assets/unnamed.png';
import { StyleSheet } from 'react-native';
import React from 'react'
import CustomInput from '../../components/CustomInput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreens = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.warn("Sign In");
  }

  const handleForgotPassword = () => {
    console.warn("Forgot Password");
  }

  const handleSignIWithGoogle = () => {
    console.warn("Sign In with Google");
  }
  const handleSignIWithFacebook = () => {
    console.warn("Sign In with Facebook");
  }
  const handleSignIWithApple = () => {
    console.warn("Sign In with Apple");
  }
  const OnSignUP = () => {
    console.warn("Sign Up");
  }
  return (
    <View style={styles.container}>
      <Image
        source={unnamed}
        style={styles.logo}
      />
      <CustomInput
        placeholder="Enter Username"
        value={username}
        setValue={setUsername}
        style={styles.input}
      />
      <CustomInput
        placeholder="Enter Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <CustomButton
        text="Sign In"
        onPress={handleSignIn}
      />
      <CustomButton
        text="Forgot password?"
        onPress={handleForgotPassword}
        type="TERTIARY" />
      <Text
        style={{ color: "grey", fontWeight: "bold", padding: 10 }}>Or
      </Text>
    <SocialSignInButtons/>
        <CustomButton
        text="Dont Have an Account? Sign Up!"
        onPress={OnSignUP}
        type="TERTIARY" />
    </View>
    
  )
}

export default SignInScreens

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
  // text: {
  //   marginTop: 20,  
  // },
});