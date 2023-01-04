import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ScooterDetail from '../screens/ScooterDetail';
import Scooter from '../screens/Scooter';
import Home from '../screens/Home';
import Heart from '../screens/DoubleTapToHeart';
import Travler from '../screens/Travler';

const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  cardOverlayEnabled: true,
};

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scooter" component={Scooter} />
      <Stack.Screen name="ScooterDetail" component={ScooterDetail} />
      <Stack.Screen name="Heart" component={Heart} />
      <Stack.Screen name="Travle" component={Travler} />
    </Stack.Navigator>
  );
};

export default MyStack;
