import React from 'react';
import { Image, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

const DotComponent = ((selected) => {
    return(
        <View className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full bg-green-800
            ${selected ? "border border-green-500" : ""} p-2
        `}>
            <View className={`w-2 h-2 ${selected ? "bg-green-600" : "bg-green-200"}`}>

            </View>
        </View>
    )
})

  return (
    <Onboarding
    onSkip={() =>{navigation.replace("Home")}}
    onDone={() =>{navigation.replace("Home")}}
    DotComponent={DotComponent}
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/real4.png')} className="w-72 h-72 object-contain"  />,
        title: 'Renting A Home?',
        subtitle: 'Are you looking for a house to rent?',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/real5.jpg')}className="w-72 h-72 object-contain" />,
        title: 'House at a Click',
        subtitle: 'At a click you select and book your favorite room!',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/rent1.jpg')}className="w-72 h-72 object-contain" />,
        title: 'Explore',
        subtitle: 'Find the best rooms for you from a single page.',
      },
      
    ]}
  />
  )
}

export default OnboardingScreen