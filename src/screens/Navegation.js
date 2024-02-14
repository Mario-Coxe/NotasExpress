/** @format */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./Autentication/SplashScreen";
import LoginScreen from "./Autentication/LoginScreen";
import ForgotPasswordScreen from "./Autentication/ForgotPasswordScreen";
import OTPScreen from "./Autentication/OTPScreen";
import ResetPasswordScreen from "./Autentication/ResetPasswordScreen";
import EventScreen from "./Home/parts/EventScreen";
import HomeScreen from "./Home/HomeScreen";
import CalendarScreen from "./Home/CalenderScreen";
import ResultScreen from './Home/ResultScreen';
import HomeworkScreen from "./Home/HomeworkScreen";
import LibraryScreen from "./Home/LibraryScreen";
import { Provider } from "react-redux";
import { Store } from "../features/store/index";

const Stack = createStackNavigator();

function Navegation() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen
            name='Splash'
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Forgot'
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='OTP'
            component={OTPScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Reset'
            component={ResetPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='HomeWork'
            component={HomeworkScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Calendar'
            component={CalendarScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Result'
            component={ResultScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Library'
            component={LibraryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Events'
            component={EventScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navegation;
