import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainScreen from "../main-screen";
import AuthScreens from "../auth-screens";
import styles from "./bottom-tab-navigator-style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {

  return(
    <Tab.Navigator
      initialRouteName='mainScreen'
      activeColor='white'
      inactiveColor='#444'
      barStyle={styles.tabBar}
    >
      <Tab.Screen
        name='mainScreen'
        component={MainScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size = 20}) => (
            <MaterialCommunityIcons name="anchor" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='authScreens'
        component={AuthScreens}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size = 20}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;