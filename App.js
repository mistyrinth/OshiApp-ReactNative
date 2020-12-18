// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import AppNavigator from './navigation/AppNavigator';
import Home from './screens/Home';
import Detail from './screens/Detail';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Stack = createStackNavigator(
  {
    Home: {screen: Home},
    Detail: {screen: Detail},
  },
  {
    initialRouteName: 'Home'
  }
);
const AppContainer = createAppContainer(Stack);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <AppContainer/>
  );
}


/* <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/> */

// export default class App extends React.Component {
//   render() {
//     return (
//       <Home />
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
