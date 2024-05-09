import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenNameEnum from '../routes/screenName.enum';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function SplashScreen2() {

  const navigation = useNavigation();


  return (
    <View style={{flex: 1, backgroundColor: '#391F5C'}}>
      <View
        style={{
          height: hp(70),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/Cropping/Logo3x.png')}
          style={{width: '100%', height: hp(60)}}
          resizeMode="contain"
        />
      </View>

      <View style={styles.whiteDiv}>
        <View
          style={{
            flexDirection: 'row',
            height: 3,
            alignSelf: 'center',
            width: '50%',
            marginTop: 30,
            backgroundColor: '#777777',

            alignItems: 'center',
          }}>
          <View style={{backgroundColor: '#391F5C', height: 3, width: '50%'}} />
          <View style={{backgroundColor: '#391F5C', height: 3, width: '50%'}} />
        </View>

        <View style={{marginTop:30,paddingHorizontal:20}}>
          <Text style={{fontSize:24,color:'#000',fontWeight:'700'}}>Welcome to</Text>
          <Text style={{fontSize:26,color:'#000',fontWeight:'800'}}>Stylelands</Text>
        
          <TouchableOpacity 
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.LOGIN_SCREEN)
         }}
         
         style={{position:'absolute',right:20,top:20}}>
          <Image  source={require('../assets/Cropping/Next_Arrow2x.png')} 
          style={{height:50,width:50}}
          />
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteDiv: {
    height: hp(30),
    backgroundColor: 'white',

    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
