import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Ongs from './pages/Ongs';
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Location from './pages/Location';
import Adote from './pages/Adote';

import LogoTitle from './components/LogoTitle';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator
        screenOptions={
          { 
            headerStyle: {backgroundColor: '#F2C94C',height: 90} ,
            headerTitle: props => <LogoTitle/>,
            headerTitleAlign: "center"
          }
        } 
      >
        <AppStack.Screen name="Ongs" component={Ongs} />
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Location" component={Location} />
        <AppStack.Screen name="Adote" component={Adote} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}