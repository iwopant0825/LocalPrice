import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Subtext } from "../components/Typography";
import Colors from "../constants/Colors";

// 화면 컴포넌트들
import HomeScreen from "../screens/Home/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.text.disabled,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={17}
                color={focused ? Colors.primary : Colors.text.disabled}
              />
              <Subtext
                color={focused ? Colors.primary : Colors.text.disabled}
                weight="medium"
                style={styles.tabLabel}
              >
                홈
              </Subtext>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={17}
                color={focused ? Colors.primary : Colors.text.disabled}
              />
              <Subtext
                color={focused ? Colors.primary : Colors.text.disabled}
                weight="medium"
                style={styles.tabLabel}
              >
                검색
              </Subtext>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={17}
                color={focused ? Colors.primary : Colors.text.disabled}
              />
              <Subtext
                color={focused ? Colors.primary : Colors.text.disabled}
                weight="medium"
                style={styles.tabLabel}
              >
                마이
              </Subtext>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 1,
    borderTopColor: Colors.border.light,
    paddingHorizontal: 18,
    paddingVertical: 5,
    height: 90,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingHorizontal: 6,
    paddingVertical: 0,
    width: 65,
    height: 64,
  },
  tabLabel: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
});

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
