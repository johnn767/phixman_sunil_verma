import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import intro1 from "../../../assets/intro1.png";
import progress1 from "../../../assets/progress.png";
const IntroScreen_A = ({onSkip,onNext}) => {
    
  return (
    <View>
        <View style={{alignSelf:'flex-end',flexDirection:'row',paddingTop:15,paddingRight:15,backgroundColor:'#fff'}}>
            <TouchableOpacity onPress={onSkip}>
            <Text style={{color:'#141729',textDecorationLine:'underline', fontSize:12,fontWeight:'400',textAlign:'right',}}>Skip</Text>
            </TouchableOpacity>
        </View>
    <View>
  <Image source={intro1} style={styles.intro} />
    </View>

    <View style={{alignItems:'flex-start',padding:28}}>
            <Text style={styles.heading1}>Best</Text>
            <Text style={styles.heading2}>Price</Text>
            <Text style={styles.title}>We promise to provide you with the {"\n"} best price possible.</Text>
           
        </View>
        
        <View style={{position:'absolute',bottom:4,right:20}}>
            <TouchableOpacity onPress={()=>onNext(2)}>
                    <Image source={progress1} style={{width:40,height:40}}/>
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
    fontWeight:'700'
  },
  heading2:{
    color:'#141729',
    fontSize:64,
    lineHeight:70,
    fontWeight:'700'
  },
  title:{
    color:'#141729',
    fontSize:16,
    lineHeight:24,
    fontWeight:'500'
  }

  
 
});

export default IntroScreen_A;
