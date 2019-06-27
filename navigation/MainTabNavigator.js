import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import TabBarIcon from '../components/TabBarIcon';
import SongScreen from '../screens/SongScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {MaterialIcons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: SongScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
      <MaterialIcons name={'music-note'} color={Colors.accentColor} size={responsiveFontSize(4)} />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
      <MaterialIcons name={'search'} color={Colors.accentColor} size={responsiveFontSize(4)} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
      <MaterialIcons name={'person'} color={Colors.accentColor} size={responsiveFontSize(4)} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
},{
    tabBarOptions:{
        showLabel: false,
        style: {
            backgroundColor: Colors.primaryColor,
            height: responsiveHeight(10)
        },
    }
});

tabNavigator.path = '';

export default tabNavigator;
