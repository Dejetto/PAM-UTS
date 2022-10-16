import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          TabBarIcon: ({ focused, color, size }) => {
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
        TabBarOptions={{
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
    <View>
      <View style={{ marginLeft: 20, flexDirection: 'row' }}>
        <Text>Profil</Text>
      </View>
      <Image style={{ width: 100, height: 100 }} source={{ uri:'https://logodix.com/logo/1984436.jpg' }} />
    </View>
  );
}

function TampilanPembuka() {
  return (
    <View>
      <View style={{ marginLeft: 20,marginRight:20, flexDirection: 'row' }}>
        <Text>jika tidak bisa memakai npx maka pakailah yarn.</Text>
        
      </View>
      <View style={{ marginLeft: 20,marginRight:20, flexDirection: 'row' }}>
        <Text>tukar keyword "npm install" menjadi "yarn add" jikalau anda tidak bisa memakai npx.</Text>
      </View>
      <View style={{ marginLeft: 20,marginRight:20, flexDirection: 'row' }}>
        <Text>Tekan tulisan berwarna biru untuk melihat berbagai macam contoh dari React-Native Program</Text>
      </View>
      <View>
        <Text style={{ marginLeft: 20,marginRight:20, flexDirection: 'row', color: 'blue' }}
          onPress={() => Linking.openURL('https://github.com/robinhuy/react-native-expo-examples')}>
            Sample of React Native
        </Text>
      </View>
      <Image style={{ width: 100, height: 100 }} 
      source={{ uri:'https://3.bp.blogspot.com/-drycuZLysTI/W3ThArYn9hI/AAAAAAAAJJY/-jebyiG_XLs34o4rtPEJCAp7oI8gaw4ygCLcBGAs/s1600/4.png' }} />
    </View>
  );
}

function TampilanSetelan() {
  return (
    <View>
      <View style={{ marginLeft: 20, flexDirection: 'row' }}>
        <Text>Setelan</Text>
      </View>
      <Image style={{ width: 100, height: 100 }} source={{ uri:'https://logodix.com/logo/1234772.png' }} />
    </View>
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
