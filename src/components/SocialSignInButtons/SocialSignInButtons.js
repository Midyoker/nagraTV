import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton';
const SocialSignInButtons = () => {
    const handleSignIWithGoogle = () => {
        console.warn("Sign In with Google");
      }
      const handleSignIWithFacebook = () => {
        console.warn("Sign In with Facebook");
      }
      const handleSignIWithApple = () => {
        console.warn("Sign In with Apple");
      }
  return (
    <>
     <CustomButton
        text="Sign In with Facebook"
        onPress={handleSignIWithFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9" />
      <CustomButton
        text="Sign In with Google "
        onPress={handleSignIWithGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44" />
      <CustomButton
        text="Sign In with Apple"
        onPress={handleSignIWithApple}
        bgColor="#e3e3e3"
        fgColor="#363636" />
    </>
  )
}

export default SocialSignInButtons