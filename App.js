import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigations/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
