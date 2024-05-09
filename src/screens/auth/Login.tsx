import { View, Text, StyleSheet,TextInput, Image } from 'react-native'
import React, { useEffect } from 'react'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Line from '../../assets/svg/line.svg'
import ScreenNameEnum from '../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
export default function Login() {

  const navigation = useNavigation()
  useEffect(() => {
    const timer = setTimeout(() => {
  navigation.navigate(ScreenNameEnum.BOTTOM_TAB);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#391F5C',paddingHorizontal:15,}}>

      <View style={{marginTop:hp(20)}}>
        <Text style={{fontSize:24,color:'#fff',fontWeight:'700'}}>Enter Your </Text>
        <Text style={{fontSize:24,color:'#fff',fontWeight:'700'}}>Mobile Number</Text>
      </View>

      <View style={styles.input}>
<View style={{height:30,width:50,alignItems:'center',justifyContent:'center',borderRightWidth:2,borderColor:'grey'}}>
<Text style={{fontSize:18,color:'#000',fontWeight:'700'}}>+91</Text>
</View>

<TextInput  
placeholder='Enter Mobile Number'
style={{marginLeft:10,fontSize:16,fontWeight:'600',width:'80%'}}

/>

      </View>

      <View style={{marginTop:hp(4),alignItems:'center'}}>
        <Text style={{fontSize:16,color:'#fff',fontWeight:'500'}}>You'll receive -4digit code to verify the number</Text>
        </View>
      <View style={{marginTop:hp(5),alignItems:'center'}}>
        <Line  />
      </View>
      <View style={{marginTop:hp(4),alignItems:'center'}}>
        <Text style={{fontSize:16,color:'#fff',fontWeight:'500'}}>Login with Social Media</Text>
        </View>
      <View style={{marginTop:hp(4),alignItems:'center',flexDirection:'row',width:'30%',alignSelf:'center',justifyContent:'space-between'}}>
        <Image  source={require('../../assets/Cropping/Facebook2x.png')} 
        
        style={{height:40,width:40}}/>
        <Image  source={require('../../assets/Cropping/Google2x.png')} 
        
        style={{height:40,width:40}}/>
        </View>
        <View style={{marginTop:hp(8),alignItems:'center'}}>
        <Text style={{fontSize:16,color:'#fff',fontWeight:'500'}}>By Clicking I accept the </Text>
        <Text style={{fontSize:16,color:'#fff',fontWeight:'500',borderBottomWidth:1,lineHeight:20,borderColor:'#fff',marginTop:10}}>Terms of Services </Text>
        </View>
    </View>
  )
}

const styles =  StyleSheet.create({
input:{
  backgroundColor:'#FFF',
  height:60,
  borderRadius:15,
  marginTop:20,
  flexDirection:'row',
alignItems:'center',

}
})