import { StyleSheet, Image, View, Text, TextInput } from 'react-native';
import React from 'react';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../utils/index';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Image source={require('../images/back.png')} style={styles.image}></Image>
        <View style={styles.closeButtonContainer}>
          <Text>X</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {/* <View style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </View> */}
        <View style={styles.formInputContainer}>
          <TextInput placeholder="Email..." placeholderTextColor="black" style={styles.textInput}></TextInput>
          <TextInput placeholder="Name..." placeholderTextColor="black" style={styles.textInput}></TextInput>
          <TextInput placeholder="Password..." placeholderTextColor="black" style={styles.textInput}></TextInput>
          <View style={styles.formButton}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 5,
  },
  image: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT / 2,
  },
  button: {
    backgroundColor: 'rgba(123,104,238,0.8)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 0.7,
  },
  bottomContainer: {
    justifyContent: 'center',
    height: WINDOW_HEIGHT / 3,
  },
  textInput: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
    elevation: 2,
  },
  formButton: {
    backgroundColor: 'rgba(160,135,238,0.7)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.94,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 70,
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 5,
  },
});
