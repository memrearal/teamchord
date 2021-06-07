import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from "../components/Layout/Header";
import Home from '../screens/Home';
import MessageP2P from '../screens/MessageP2P';
import { RootStackParamList } from '../types';

/*
import LinkingConfiguration from './LinkingConfiguration';
in navigationcontainer:
linking={LinkingConfiguration}
*/

export default function Navigation(){
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          header: ({ scene, previous, navigation }) => {
            return ( <Header navigation={navigation} scene={scene} backButton={previous ? true : false} /> );
          }
        }}
      />
      <Stack.Screen
        name="MessageP2P"
        component={MessageP2P}
        options={{
          title: "MessageP2P",
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
