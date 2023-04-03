import React from 'react';
import {SafeAreaView} from 'react-native';
import ShowPosts from './src/screens/ShowPosts';
import {GLOBALSTYLES} from './src/utils/Theme';

const App = () => {
  return (
    <SafeAreaView style={GLOBALSTYLES.container}>
      <ShowPosts />
    </SafeAreaView>
  );
};

export default App;
