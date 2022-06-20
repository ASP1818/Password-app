import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import Screen1Screen from "./screens/Screen1";
import Screen2Screen from "./screens/Screen2";
import Screen3Screen from "./screens/Screen3";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Screen1" component={Screen1Screen} />
        <Stack.Screen name="Sreen2" component={Screen2Screen} />
        <Stack.Screen name="Sreen3" component={Screen3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

          