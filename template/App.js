import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/Presentation/Components/Home/Home';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#52F3CC',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Welcome to RN-Boiler-Plate</Text>
      <Home />
    </View>
  );
};

export default App;
