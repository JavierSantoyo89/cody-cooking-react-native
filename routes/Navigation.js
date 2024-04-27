import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "../screen/HomeScreen";
import Detailscreen from "../screen/DetailScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import HomeScreen from "../screen/HomeScreen";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const tab = createBottomTabNavigator();
const tab = createStackNavigator();

function MyTabs() {
  return (
    <tab.Navigator initialRouteName="Cody cooking">
      <tab.Screen
        name="Cody cooking"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen name="Details" component={Detailscreen} />
    </tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
