import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const CustomInput = ({ placeholder, value, setValue, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}  
        style={styles.input}
      />
    </View>
  ); 
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  input: {
    borderColor: '#e8e8e8',
    borderWidth: 3,
    borderRadius: 10,
    width: 350,
    height: 50,  
    textAlign: 'center',
  },
});
