import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Logo from "../../../assets/logo.png"
import arrowRight from "../../../assets/arrow-right.png";
import facebook from "../../../assets/facebook.png";
import google from "../../../assets/google.png";
import truecaller from "../../../assets/truecaller.png";
import apple from "../../../assets/apple.png";
import person from "../../../assets/person.png";
const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [input, setInput] = useState({});
  const [errorMsg, setErrMsg] = useState('');
  const [isValid, setIsValid] = useState(false)




  const onLogin = () => {
      //continue validation...
    
    console.log({ input })
    //write futher code
  }

  const onInputChange = (key, val) => {
    let inputField = { key: val };
    const regex = /^\d{10}$/;
    const isValidInput = regex.test(val);
    setErrMsg('');
    if (!isValidInput) {
      setErrMsg('Invalid Number')
      setIsValid(false);
    } else {
      setErrMsg('')
      setIsValid(true)
    }
    setInput(inputField);

  };


  const onTabChange = (index) => {
    setErrMsg('')
    setActiveTab(index)
  }
  return (<ScrollView>
    <View style={styles.container}>
      {/* Logo */}
      <View style={{ paddingTop: 80, paddingBottom: 50 }}>
        <Image source={Logo} style={styles.logo} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => onTabChange(0)} style={[styles.tab, { borderBottomColor: activeTab === 0 ? '#6869B1' : '#fff' }]}>
          <Text style={[styles.tabText, { color: activeTab == 0 ? '#141729' : '#93949D' }]}>Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onTabChange(1)} style={[styles.tab, { borderBottomColor: activeTab === 1 ? '#6869B1' : '#fff' }]}>
          <Text style={[styles.tabText, { color: activeTab == 1 ? '#141729' : '#93949D' }]}>Email</Text>
        </TouchableOpacity>
      </View>


      {/* Phone Number Tab Content */}
      {activeTab === 0 &&
        <View style={styles.tabContent}>
          <View style={{ paddingBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#141729' }}>Please enter your phone number</Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput onChangeText={(val) => onInputChange('code', val)} style={[styles.input, { borderColor: isValid && errorMsg == '' ? '#9A9BCB' : '#F23036' }]} placeholder="+91" />
            <TextInput maxLength={10} keyboardType='number-pad' onChangeText={(val) => onInputChange('phone', val)} style={[styles.input2, { borderColor: isValid && errorMsg == '' ? '#9A9BCB' : '#F23036' }]} placeholder="Enter mobile Number" />

          </View>
          <View style={{ alignSelf: 'flex-end', paddingRight: 15 }}>
            {errorMsg && <Text style={{ color: '#F23036', fontSize: 12, textAlign: 'right' }}>{errorMsg}</Text>}</View>
          <TouchableOpacity style={[styles.continueButton, { backgroundColor: errorMsg == '' && isValid ? '#F23036' : '#E8E8EA' }]}>
            <Text style={[styles.continueButtonText, { marginRight: 15, color: errorMsg == '' && isValid ? '#fff' : '#B6B7BD' }]}>Continue</Text>
            <Image source={arrowRight} style={{ width: 20, height: 20, tintColor: errorMsg == '' && isValid ? '#fff' : '#B6B7BD' }} />
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.orBorder} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.orBorder} />
          </View>
          {/* Social Login Buttons */}

        </View>
      }

      {/* //email tab */}
      {activeTab === 1 &&
        <View style={styles.tabContent}>
          <View style={{ paddingBottom: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#141729' }}>Please enter your email address</Text>
          </View>
          <View style={styles.inputRow}>
            <TextInput onChangeText={(val) => onInputChange('email', val)} style={styles.input3} placeholder="Email address" />
          </View>
          <TouchableOpacity onPress={onLogin} style={styles.continueButton}>
            <Text style={[styles.continueButtonText, { marginRight: 15 }]}>Continue</Text>
            <Image source={arrowRight} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.orBorder} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.orBorder} />
          </View>
          {/* Social Login Buttons */}

        </View>
      }

      <View style={styles.socialButtonsContainer}>
        {/* Render your social login buttons here */}
        {/* Example: */}
        <TouchableOpacity style={styles.socialButton}>
          <Image source={google} style={{ width: 44, height: 44 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={facebook} style={{ width: 44, height: 44 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={apple} style={{ width: 44, height: 44 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={truecaller} style={{ width: 44, height: 44 }} />
        </TouchableOpacity>
      </View>



      {/* Continue as Guest Button */}
      <View style={styles.orContainer}>
        <View style={styles.orBorder} />
        <View style={styles.orBorder} />
      </View>

      <TouchableOpacity style={styles.continueAsGuestButton}>
        <Image source={person} style={{ width: 20, height: 20, marginRight: 15 }} />
        <Text style={styles.continueAsGuestButtonText}>Continue as Guest</Text>
      </TouchableOpacity>

    </View>

  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 230,
    height: 72,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignSelf: 'flex-start'
  },
  tab: {
    borderBottomWidth: 3,
    marginRight: 20,
  },
  tabText: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'left'
  },
  tabContent: {
    width: '100%',

    alignItems: 'flex-start',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#9A9BCB',
    borderRadius: 12,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  input2: {
    flex: 9,
    height: 45,
    borderWidth: 1,
    borderColor: '#9A9BCB',
    borderRadius: 12,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  input3: {
    flex: 9,
    height: 45,
    borderWidth: 1,
    borderColor: '#9A9BCB',
    borderRadius: 12,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  continueButton: {
    width: '100%',
    borderRadius: 12,
    backgroundColor:'#E8E8EA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginTop: 20,
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#B6B7BD',
    fontWeight: '500',
    fontSize: 16
  },
  orContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  orBorder: {
    flex: 1,
    height: 1,
    backgroundColor: '#F0F0F7',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    width: 44,
    height: 44,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueAsGuestButton: {
    borderRadius: 12,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1,
    borderColor: '#626470',
    padding: 10,
    marginBottom: 20,
  },
  continueAsGuestButtonText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#434554'
  },
});

export default Login;
