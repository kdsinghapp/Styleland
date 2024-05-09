import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp  } from 'react-native-responsive-screen'
import Pin from '../assets/svg/Pin.svg'
import Down from '../assets/svg/Down.svg'
import Msg from '../assets/svg/Msg.svg'
import Bell from '../assets/svg/Bell.svg'
import { useNavigation } from '@react-navigation/native'
export default function Header({title='',width='20',showProfile =true}) {
const navigation = useNavigation()
  return (
    <View style={{height:hp(5),flexDirection:'row',
   marginTop:10,
    alignItems:'center',paddingHorizontal:10}}>
<TouchableOpacity 
onPress={()=>{
  navigation.goBack()
}}
style={{width:'15%'}}>
  <Image 
  
  source={require('../assets/Cropping/arrow-left2x.png')}

  style={{height:30,width:30}}
  />
</TouchableOpacity>

<View style={{width:'76%'}}>
  <Text style={{fontSize:18,color:'#000',fontWeight:'700'}}>{title}</Text>
</View>
<View>
  {showProfile &&
<Image 
  
  source={require('../assets/Cropping/google-pay2x.png')}

  style={{height:35,width:35,borderRadius:17.5}}
  />
}
</View>

    </View>
  )
}