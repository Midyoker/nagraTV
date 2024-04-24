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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

 const OnSignInPressed = () => {
    console.warn("Sign In");
  }
  const onRegister = () => {
    console.warn("Created Account successfully");
  }
  const handleTermsAndCondPressed = () => {
    console.warn("Terms and Conditions");
  }
  const handlePriAndPol = () => {
    console.warn("Privacy and Policy");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <CustomInput
        placeholder="Enter Username"
        value={username}
        setValue={setUsername}
        style={styles.input}
      />
      <CustomInput
        placeholder="Enter Email"
        value={email}
        setValue={setEmail}
        style={styles.input}
      />
      <CustomInput
        placeholder="Enter Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <CustomInput
        placeholder="Enter Password Again"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
        style={styles.input}
      />
      <CustomButton
        text="Register"
        onPress={onRegister}
      />
      <Text style={styles.policy}>
        By Registering, You accept our {' '}
        <Text style={styles.link} onPress={handleTermsAndCondPressed}>
          terms and conditions
        </Text> for our {' '}
        <Text style={styles.link} onPress={handlePriAndPol}>
          privacy and policy
        </Text>
      </Text>
      {/* <CustomButton
        text="Forgot password?"
        onPress={handleForgotPassword}
        type="TERTIARY" /> */}
      <Text
        style={{ color: "grey", fontWeight: "bold", padding: 10 }}>Or
      </Text>
      <SocialSignInButtons/>
      
      <CustomButton
        text="Already have an account? Sign In!"
        onPress={OnSignInPressed}
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
  policy: {
    color: "grey",
    fontWeight: "bold",
    padding: 20,
    fontSize: 12,
  },
  link: {
    color: "#051C60",
    fontWeight: "bold",
  },
});