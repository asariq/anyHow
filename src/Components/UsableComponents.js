import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import {windowHeight, windowWidth} from './Global_Constants';

export const SubmitButton = ({title, onPress, disabled, backgroundColor}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export const AppLogo = ({marginBottom}) => {
  return <Text style={[styles.logo,{marginBottom:marginBottom}]}>Any-Where</Text>;
};
export const RadioButton = ({option, setOption, value, text}) => {
  return (
    <TouchableOpacity
      onPress={() => setOption(value)}
      style={{flexDirection: 'row', marginTop: 9}}>
      <View style={styles.radioButtonOuter}>
        {option == value && <View style={styles.radioButtonInner} />}
      </View>
      <Text style={styles.radioText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const InputBox = ({
  title,
  value,
  setValue,
  keyboardType,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.inputBox}
        value={value}
        onChangeText={setValue}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioText: {color: 'black', fontSize: 14},
  radioButtonInner: {
    height: 14,
    width: 14,
    borderRadius: 16,
    backgroundColor: 'black',
  },
  radioButtonOuter: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: windowHeight * 0.08,
    width: windowWidth * 0.8,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: windowHeight * 0.02,
    elevation: 12,
  },
  buttonText: {fontSize: 18, fontWeight: 'bold', color: 'white'},
  inputContainer: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.8,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: windowHeight * 0.015,
    marginTop: windowHeight * 0.01,
  },
  inputTitle: {
    marginBottom: 4,
    marginLeft: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  inputBox: {
    height: windowHeight * 0.07,
    width: windowWidth * 0.8,
    borderRadius: 12,
    elevation: 12,
    backgroundColor: 'white',
    color: 'black',
  },
  logo: {
    color: 'black',
    fontSize: 45,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 40,
  },
});
