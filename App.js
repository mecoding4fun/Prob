import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import WelcomeScreen from './Screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import SafeAreaView from 'react-native-safe-area-view'
import SafeAreaProvider from 'react-native-safe-area-context'


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>  
    <AppContainer/>
    </SafeAreaView>
    </SafeAreaProvider>
      );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);