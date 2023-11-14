import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import intro3 from "../../../assets/intro3.png";
import arrowRight from "../../../assets/arrow-right.png";
const IntroScreen_C = ({onSkip,onNext}) => {
    
  return (
    <View>
       
    <View style={{alignSelf:'flex-end'}}>
  <Image source={intro3} style={styles.intro} />
    </View>
    <View style={{justifyContent:'center'}}>
    <View style={{alignItems:'flex-end',padding:28}}>
            <Text style={styles.heading1}>You Break</Text>
            <Text style={styles.heading2}>We Phix</Text>
            <Text style={styles.title}>With our team of experts, we can {"\n"} handle any issues.</Text>
           
        </View>
        
        <View style={{alignSelf:'center'}}>
            <TouchableOpacity style={styles.startBtn}  onPress={()=>onNext('end')}>
              <Text style={{color:'#fff',fontSize:18,fontWeight:'500',marginRight:15}}>Let's Start</Text>
              <View style={{padding:5,backgroundColor:'#fff',borderRadius:50}}>
                  <Image source={arrowRight} style={{width:14,height:14,tintColor:'#F23036'}}/> 
              </View>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width:'100%',
    
  },
  intro: {
    width: 255,
    height: 355,
    resizeMode:'contain',
  },
  heading1:{
    color:'#F23036',
    fontSize:64,
    lineHeight:70,
    textAlign:'right',
    fontWeight:'700'
  },
  heading2:{
    color:'#141729',
    fontSize:64,
    textAlign:'right',
    lineHeight:70,
    fontWeight:'700'
  },
  title:{
    color:'#141729',
    fontSize:16,
    lineHeight:24,
    textAlign:'right',
    fontWeight:'500'
  },
  startBtn:{
    paddingHorizontal:20,paddingVertical:10,borderRadius:8,backgroundColor:'#F23036',flexDirection:'row',alignItems:'center'
  }

  
 
});

export default IntroScreen_C;
