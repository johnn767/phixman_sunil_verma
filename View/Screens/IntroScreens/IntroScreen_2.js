import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import intro2 from "../../../assets/intro2.png";
import progress2 from "../../../assets/progress2.png";
const IntroScreen_B = ({onSkip,onNext}) => {
    
  return (
    <View>
        <View style={{alignSelf:'flex-end',flexDirection:'row',paddingTop:15,paddingRight:15,backgroundColor:'#fff'}}>
            <TouchableOpacity onPress={onSkip}>
            <Text style={{color:'#141729',textDecorationLine:'underline', fontSize:12,fontWeight:'400',textAlign:'right',}}>Skip</Text>
            </TouchableOpacity>
        </View>

    <View style={{alignItems:'center',padding:28}}>
            <Text style={styles.heading1}>Efficient </Text>
            <Text style={styles.heading2}>Service</Text>
            <Text style={styles.title}>Providing the most efficient service {"\n"}with utmost precision.</Text>
           
        </View>
        <View style={{marginLeft:-8}}>
  <Image source={intro2} style={styles.intro} />
    </View>
        
        <View style={{position:'absolute',bottom:4,right:20}}>
            <TouchableOpacity onPress={()=>onNext(3)}>
                    <Image source={progress2} style={{width:40,height:40}}/>
            </TouchableOpacity>
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
    textAlign:'center',
    fontWeight:'700'
  },
  heading2:{
    color:'#141729',
    fontSize:64,
    lineHeight:70,
    textAlign:'center',
    fontWeight:'700'
  },
  title:{
    color:'#141729',
    fontSize:16,
    lineHeight:24,
    textAlign:'center',
    fontWeight:'500'
  }

  
 
});

export default IntroScreen_B;
