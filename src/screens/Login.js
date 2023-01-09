import { StyleSheet, Image, View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../utils/index';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring,
} from 'react-native-reanimated';

const Login = () => {
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);

  const [isRegistering, setIsRegistering] = useState(false);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-WINDOW_HEIGHT / 2, 0]);
    return {
      transform: [{ translateY: withTiming(interpolation, { duration: 1000 }) }],
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 300 }),
      transform: [{ translateY: withTiming(interpolation, { duration: 1000 }) }],
    };
  });

  const closebuttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 300 }),
      transform: [{ rotate: withTiming(interpolation + 'deg', { duration: 1000 }) }],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, { duration: 800 })) : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButtonScale.value }],
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      runOnJS(setIsRegistering)(false);
    }
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      runOnJS(setIsRegistering)(true);
    }
  };

  const xButtonHandler = () => {
    imagePosition.value = 1;
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Image source={require('../images/back.png')} style={styles.image}></Image>
        <Animated.View style={[styles.closeButtonContainer, closebuttonAnimatedStyle]}>
          <Text onPress={xButtonHandler}>X</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput placeholder="Email..." placeholderTextColor="black" style={styles.textInput}></TextInput>
          {isRegistering && <TextInput placeholder="Name..." placeholderTextColor="black" style={styles.textInput}></TextInput>}
          <TextInput placeholder="Password..." placeholderTextColor="black" style={styles.textInput}></TextInput>
          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable onPress={() => (formButtonScale.value = withSequence(withSpring(1.5), withSpring(1)))}>
              <Text style={styles.buttonText}>{isRegistering ? 'REGISTER' : 'LOG IN'}</Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
      </View>
    </Animated.View>
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
    height: WINDOW_HEIGHT + 100,
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
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: 'center',
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
    top: -20,
  },
});
