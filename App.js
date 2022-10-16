import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Pembuka") {
              iconName = "home";
            } else if (route.name === "Setelan") {
              iconName = "cog";
            } else if (route.name === "Profil") {
              iconName = "user-circle";
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          labelPosition: "below-icon",
        }}
      >
        <Tab.Screen name="Profil" component={TampilanProfil} />
        <Tab.Screen name="Pembuka" component={TampilanPembuka} />
        <Tab.Screen name="Setelan" component={TampilanSetelan} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function TampilanProfil() {
  return (
    <view>
      <View style={{ marginLeft: 20, flexDirection: 'row' }}>
        <Text>Profil</Text>
      </View>
    </view>
  );
}

function TampilanPembuka() {
  return (
    <view>
      <View style={{ marginLeft: 20, flexDirection: 'row' }}>
        <Text>tampilan awal layar</Text>
      </View>
    </view>
  );
}

function TampilanSetelan() {
  return (
    <view>
      <View style={{ marginLeft: 20, flexDirection: 'row' }}>
        <Text>Setelan</Text>
      </View>
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Tab = createBottomTabNavigator();
