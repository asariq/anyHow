import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import {  useDispatch,useSelector } from 'react-redux'
import { saveData } from '../redux/slice';
import {
  SubmitButton,
  InputBox,
  AppLogo,
  RadioButton,
} from '../Components/UsableComponents';
import {windowHeight, windowWidth,regx} from '../Components/Global_Constants';

const OnBoarding = props => {
  const users = useSelector(state => state?.valueData?.signedUpUser);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [option, setOption] = useState(1);
  const [password, setPassWord] = useState('');
  const [passwordTwo, setPassWordTwo] = useState('');

  const dispatch = useDispatch()

  const disable =
    name === '' ||
    email === '' ||
    password === '' ||
    passwordTwo === '' ||
    password !== passwordTwo;

  const passwordCompare = text => {
    setPassWordTwo(text);
    if (password.length == text.length) {
      if (password !== text) {
        Alert.alert('Any-Where', 'Password Did not matched');
      }
    }
  };

  const submitFunction = () => {

    if(!regx.test(email)){
      Alert.alert('Any-Where', 'Invalid Email Format');
    }else{

      let isUser = users?.find(user => user.email === email);
      if (isUser) {
        Alert.alert('User already exists', 'Please login with new user');
      } else {
        Alert.alert('Any-Where', 'You have registered sucessfully');
        props.navigation.navigate('Login');
        dispatch(saveData({name,email,password,option}))
      }
    
    } 
   
  };
  return (
    <View style={styles.container}>
      <AppLogo marginBottom={20} />
      <InputBox
        title={'Name'}
        value={name}
        setValue={setName}
        keyboardType={'default'}
        placeholder={'Enter your Name'}
      />
      <InputBox
        title={'Email'}
        value={email}
        setValue={setEmail}
        keyboardType={'email-address'}
        placeholder={'Enter your Email'}
      />
      <View style={styles.optionSelectBox}>
        <Text style={styles.optionText}>Select What Are you :</Text>

        <RadioButton
          option={option}
          setOption={setOption}
          value={1}
          text={'Department Manager'}
        />

        <RadioButton
          option={option}
          setOption={setOption}
          value={2}
          text={'Store Manager'}
        />
      </View>
      <InputBox
        title={'Password'}
        secureTextEntry={true}
        value={password}
        setValue={setPassWord}
        keyboardType={'passWord'}
        placeholder={'Set your password'}
      />
      <InputBox
        title={'Re-enter Password'}
        secureTextEntry={true}
        value={passwordTwo}
        setValue={passwordCompare}
        keyboardType={'password'}
        placeholder={'Set your password'}
      />

      <SubmitButton
        title={'Submit'}
        disabled={disable}
        backgroundColor={disable ? 'gray' : 'black'}
        onPress={
          submitFunction
        } 
      />
      <SubmitButton
        title={'Login'}
        backgroundColor={ 'black'}
      
        onPress={()=>  props.navigation.navigate('Login')}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  optionSelectBox: {
    height: windowHeight * 0.13,
    width: windowWidth * 0.8,
    //backgroundColor: 'blue',
    marginTop: windowHeight * 0.03,
  },
  optionText: {color: 'black', fontSize: 16, fontWeight: 'bold'},
});
