import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {SubmitButton, InputBox, AppLogo} from '../Components/UsableComponents';
import {windowHeight, windowWidth} from '../Components/Global_Constants';
import {userInfo} from '../redux/slice';

const Login = props => {
  const users = useSelector(state => state?.valueData?.signedUpUser);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const disable = email === '' || password === '';

  const handleSubmit = () => {
    let isUser = users?.find(user => user.email === email);
    if (isUser) {
      isUser?.password === password
        ? dispatch(userInfo(isUser)) && props.navigation.navigate('DashBoard')
        : Alert.alert('Wrong Password', 'Please use correct Password');
    } else {
      Alert.alert('Not a User', 'Please Sign up');
    }
  };

  return (
    <View style={styles.container}>
      <AppLogo marginBottom={100} />
      <View style={styles.topContainer}>
        <Text style={styles.detailText}>*Please use your email as user-Id</Text>
      </View>
      <InputBox
        title={'User-Id'}
        value={email}
        setValue={setEmail}
        keyboardType={'email-address'}
        placeholder={'Enter your Email'}
      />
      <InputBox
        title={'Password'}
        secureTextEntry={true}
        value={password}
        setValue={setPassWord}
        keyboardType={'passWord'}
        placeholder={'Set your password'}
      />

      <SubmitButton
        title={'Login'}
        disabled={disable}
        backgroundColor={disable ? 'gray' : 'black'}
        onPress={handleSubmit}
      />
      <View style={styles.detail}>
        <Text style={styles.detailText}>
          Welcome to the Any-Where App Sariq Anwar, please Provide Login
          details.
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
    marginTop: windowHeight * 0.03,
  },
  optionText: {color: 'black', fontSize: 16, fontWeight: 'bold'},
  detail: {
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.1,
    marginTop: windowHeight * 0.2,
    marginBottom: windowHeight * 0.05,
  },
  detailText: {color: 'black', fontSize: 12, fontWeight: 'bold'},
  topContainer: {width: windowWidth, paddingLeft: windowWidth * 0.1},
});
