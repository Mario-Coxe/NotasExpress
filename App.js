import React from 'react';
import SplashScreen from './src/screens/Autentication/SplashScreen'; // Importe o componente de splash
import LoginScreen from './src/screens/Autentication/LoginScreen';
import ForgotPasswordScreen from './src/screens/Autentication/ForgotPasswordScreen';
import OTPScreen from './src/screens/Autentication/OTPScreen';
import ResetPasswordScreen from './src/screens/Autentication/ResetPasswordScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import NewsContainer from './src/screens/Home/parts/NewsContainer';



const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
    }, 1000);
  }, []);

  return (
    <HomeScreen />
  );
};

export default App;
