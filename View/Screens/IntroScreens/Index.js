import React, { useState } from 'react';
import IntroScreen_A from './IntroScreen_1';
import IntroScreen_B from './IntroScreen_2';
import IntroScreen_C from './IntroScreen_3';
const IntroScreens = ({onSkip,onNext,screenIndex}) => {
    
    switch(screenIndex){
        case 1 :
        return  <IntroScreen_A screenIndex={screenIndex} onSkip={onSkip} onNext={onNext}/>
        case 2 : 
        return  <IntroScreen_B screenIndex={screenIndex} onSkip={onSkip} onNext={onNext} />
        case 3 :
        return <IntroScreen_C screenIndex={screenIndex} onSkip={onSkip} onNext={onNext} />
        default : return <IntroScreen_A screenIndex={screenIndex} onSkip={onSkip} onNext={onNext} />
    }
}

export default IntroScreens;
