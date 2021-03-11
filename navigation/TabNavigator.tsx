import { Fontisto, Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { TabParamList, AparatParamList, ChatyParamList, StatusParamList, HistoryParamList } from '../types';
import { Entypo } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import AparatScreen from '../screens/AparatScreen';
import ChatyScreen from '../screens/ChatyScreen';
import StatusScreen from '../screens/StatusScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Tab = createMaterialTopTabNavigator<TabParamList>();

export default function TabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#fff",
      style: {
        backgroundColor: "red",
      },
      indicatorStyle: {
        backgroundColor: "#fff",
        height: 4,
      },
      labelStyle: {
        fontWeight: 'bold'
      },
      showIcon: true,
    }}>
    <Tab.Screen
      name="Aparat"
      component={AparatNavigator}
      options={{  
      tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18                       } />,
    }}
  />
   <Tab.Screen
        name="Chaty"
        component={ChatyNavigator}
        options={{
          tabBarIcon: ({color}) => <Entypo name="chat" size={20} color={color} />
        }}
      />
      <Tab.Screen
        name="Status"
        component={StatusNavigator}
        options={{
          tabBarIcon: ({color}) => <Zocial name="statusnet" size={20} color={color} />
        }}
      />
      <Tab.Screen
        name="Historia"
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({color}) => <FontAwesome5 name="history" size={20} color={color} />
        }}
        />
        </Tab.Navigator>
  );
}


const AparatStack = createStackNavigator<AparatParamList>();

function AparatNavigator() {
  return (
    <AparatStack.Navigator>
      <AparatStack.Screen
        name="AparatScreen"
        component={AparatScreen}
        options={{  headerShown: false }}
      />
    </AparatStack.Navigator>
  );
}

const ChatyStack = createStackNavigator<ChatyParamList>();

function ChatyNavigator() {
  return (
    <ChatyStack.Navigator>
      <ChatyStack.Screen
        name="ChatyScreen"
        component={ChatyScreen}
        options={{ headerShown: false }}
      />
    </ChatyStack.Navigator>
  );
}

const StatusStack = createStackNavigator<StatusParamList>();

function StatusNavigator() {
  return (
    <StatusStack.Navigator>
      <StatusStack.Screen
        name="StatusScreen"
        component={StatusScreen}
        options={{ headerShown: false }}
      />
    </StatusStack.Navigator>
  );
}

const HistoryStack = createStackNavigator<HistoryParamList>();

function HistoryNavigator() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerShown: false }}
      />
    </HistoryStack.Navigator>
  );
}
