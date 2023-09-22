import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins-Regular': require('./Poppins-Regular.ttf'),
    'Poppins-Bold': require('./Poppins-Bold.ttf'),
    'Poppins-Light': require('./Poppins-Light.ttf'),
  });
};
