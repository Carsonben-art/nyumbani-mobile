
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, OnboardingScreen } from './screens';
import { TailwindProvider } from 'tailwindcss-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [firstLaunch, setFirstLaunch] = useState(false);

  useEffect(() =>{
    AsyncStorage.getItem("alreadyLaunched".then(value =>{
      if(value === null){
        AsyncStorage.setItem("alreadyLaunched", "true");
        setFirstLaunch(true);
      }else{
        setFirstLaunch(false);
      }
    }))
  }, []);
  return (
    <TailwindProvider>
    <NavigationContainer>
      <Stack.Navigator>
      {!firstLaunch && 
      (<Stack.Screen 
        options={{headerShown: false}} 
        name="OnboardingScreen" 
        component={OnboardingScreen} 
        />) 
      
      }
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}

