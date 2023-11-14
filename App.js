/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from './View/Screens/Auth_Screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IntroScreens from './View/Screens/IntroScreens/Index';



function App(){
  const [isIntroComplete,setIsIntroComplete]=useState(false);
  const [screenIndex,setScreenIndex] = useState(1);
  const onSkip = ()=>{
    setIsIntroComplete(true);
  }
  
   
  const onNext =(screenIndex)=>{
    console.log({screenIndex})
      if(screenIndex === 'end'){
        //redirect to login
        AsyncStorage.setItem("isIntroComplete","1")
        setIsIntroComplete(true);
      }else{
        setScreenIndex(screenIndex);
      }
     
  }

  const checkIntroStatus = async ()=>{
      const isIntroComplete = await AsyncStorage.getItem("isIntroComplete");
        setIsIntroComplete(isIntroComplete === '1' ? true:false);
  }

  useEffect(()=>{
    checkIntroStatus()
  },[])


  return <SafeAreaView>
    {/* //currently just using if else condtion to show intro/login without navigation */}
        {!isIntroComplete ?
         <IntroScreens onSkip={onSkip} onNext={onNext} screenIndex={screenIndex}/>
         : <LoginScreen/>
        }
        </SafeAreaView>
}

export default App;
