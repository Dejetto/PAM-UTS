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
      <Image style={{ width: 300, height: 300 }} source={{ uri:'https://logodix.com/logo/1984436.jpg' }} />
    </view>
  );
}

function TampilanPembuka() {
  return (
    <view>
      <View style={{ marginLeft: 20, flexDirection: 'row' }}>
        <Text>tampilan awal layar</Text>
      </View>
      <Image style={{ width: 300, height: 300 }} 
      source={{ uri:'https://3.bp.blogspot.com/-drycuZLysTI/W3ThArYn9hI/AAAAAAAAJJY/-jebyiG_XLs34o4rtPEJCAp7oI8gaw4ygCLcBGAs/s1600/4.png' }} />
    </view>
  );
}

function TampilanSetelan() {
  return (
    <view>
      <View style={{ marginLeft: 20, flexDirection: 'row' }}>
        <Text>Setelan</Text>
      </View>
      <Image style={{ width: 300, height: 300 }} source={{ uri:'https://logodix.com/logo/1234772.png' }} />
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
