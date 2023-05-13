import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, Image, SafeAreaView, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView, TouchableOpacity,Button,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation(); // Lấy đối tượng navigation
  const Stack=createStackNavigator ();
  const handleLogin = () => {
    // Kiểm tra đăng nhập với tên đăng nhập và mật khẩu
    if (username === 'Admin' && password === '123456') {
      setErrorMessage('')
      navigation.navigate('Admin');// goij trang admin ra
    } else {
      setErrorMessage('Username or password is incorrect!');
    }
  };
  const [showPass, setShowPass] = useState(false);
  const toggleShowPass = () => {
    setShowPass(!showPass);
  };
  const ComfirmPassword = () => {
    setShowPass(!showPass);
  };
    return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"height"}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.container}>
            <Image style={styles.imga} source={{ uri: 'https://clipground.com/images/poseidon-logo-6.jpg' }} resizeMode="contain" />
            <Text style={styles.tex}>PSD</Text>
          </View>
          <TextInput style={styles.input} placeholder="User Name" onChangeText={(text) => setUsername(text)} value={username} />
          <View style={styles.passwordContainer}>
            <TextInput style={styles.input} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={!showPass} />
            <TouchableWithoutFeedback onPress={toggleShowPass}>
              <Feather name={showPass ? 'eye' : 'eye-off'} size={19} color="black" style={styles.Icon} />
            </TouchableWithoutFeedback>
            {errorMessage !== '' && <Text style={styles.error}>{errorMessage}</Text>}
          </View>
          <View style={styles.gister}>
              <Button onPress={handleLogin} title='Login' />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
 ScrollView:
  {
    flexGrow: 1, 
  },
  container:
  {
  alignItems: 'center',
 
  flex: 1,
  backgroundColor: '#FFCCCC',
  },
  imga:
  {
  width: 80,
  height: 70,
  borderRadius: 15,
  backgroundColor:'#000044',
  },
  tex:
  {
  marginBottom:20,
  fontWeight:'bold',
  color:'black',
  fontSize:20,
  },
  
  input:
  {
    position:'relative',
    height:40,
    width:300,
    backgroundColor:'white',
    marginTop:10,
    marginBottom:10,
    borderRadius: 10,
  },
 
Icon: {
  position: 'absolute',
  right:5,
  top:15,
},
error: {
    color: 'red',
    marginTop: 5,
  },
  gister:
  {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default LoginScreen;
