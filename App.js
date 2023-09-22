import React from 'react';
import SplashScreen from './src/screens/Autentication/SplashScreen'; // Importe o componente de splash
import LoginScreen from './src/screens/Autentication/LoginScreen';
import ForgotPasswordScreen from './src/screens/Autentication/ForgotPasswordScreen';
import OTPScreen from './src/screens/Autentication/OTPScreen';
import ResetPasswordScreen from './src/screens/Autentication/ResetPasswordScreen';
import HomeScreen from './src/screens/Home/HomeScreen';



const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
    }, 1000);
  }, []);

  return (
    <ResetPasswordScreen />
  );
};

export default App;
