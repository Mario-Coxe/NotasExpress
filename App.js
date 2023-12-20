import React from 'react';
import SplashScreen from './src/screens/Autentication/SplashScreen'; // Importe o componente de splash
import LoginScreen from './src/screens/Autentication/LoginScreen';
import ForgotPasswordScreen from './src/screens/Autentication/ForgotPasswordScreen';
import OTPScreen from './src/screens/Autentication/OTPScreen';
import ResetPasswordScreen from './src/screens/Autentication/ResetPasswordScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import CalenderScreen from './src/screens/Home/CalenderScreen';
import ScheduleScreen from './src/screens/Home/parts/ScheduleScreen';
import EventScreen from './src/screens/Home/parts/EventScreen'
import HomeworkScreen from './src/screens/Home/HomeworkScreen';
import ResultScreen from './src/screens/Home/ResultScreen';


const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
    }, 1000);
  }, []);

  return (
    <LoginScreen />
  );
};

export default App;
