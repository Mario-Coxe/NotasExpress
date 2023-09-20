import React from 'react';
import SplashScreen from './src/screens/Autentication/SplashScreen'; // Importe o componente de splash
import LoginScreen from './src/screens/Autentication/LoginScreen';

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
