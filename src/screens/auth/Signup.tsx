import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Line from '../../assets/svg/line.svg';
import {useDispatch} from 'react-redux';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CheckBox  from 'react-native-check-box'
export default function Signup() {
  const [value, setValue] = useState('');
  const [isChecked, setisChecked] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const dispatch = useDispatch();
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={{flex: 1, backgroundColor: '#391F5C'}}>
      <View style={{marginTop: hp(10), paddingHorizontal: 15}}>
        <Text style={{fontSize: 24, color: '#fff', fontWeight: '700'}}>
          Let's
        </Text>
        <Text style={{fontSize: 24, color: '#fff', fontWeight: '700'}}>
          Create Your Profile
        </Text>
      </View>

      <View
        style={{
          height: hp(80),
          marginTop: hp(5),
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: '#FFF',
        }}>
        <View style={styles.input}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={'grey'}
            style={{fontSize: 16, fontWeight: '700'}}
          />
        </View>
        <View style={[styles.input, {marginTop: 20}]}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={'grey'}
            style={{fontSize: 16, fontWeight: '700'}}
          />
        </View>

        <View style={styles.gender}>
          <TouchableOpacity style={styles.btn}>
            <Image
              source={require('../../assets/Cropping/maleActive.png')}
              style={{height: 20, width: 20, marginHorizontal: 10}}
            />
            <Text style={{fontSize: 16, color: '#000', fontWeight: '700'}}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#391F5C'}]}>
            <Image
              source={require('../../assets/Cropping/femaleunActive.png')}
              resizeMode="contain"
              style={{height: 20, width: 25, marginHorizontal: 10}}
            />
            <Text style={{fontSize: 16, color: '#fff', fontWeight: '600'}}>
              FeMale
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.offer}>
          <Image
            source={require('../../assets/Cropping/offer.png')}
            style={{width: 60, height: 50}}
            resizeMode="contain"
          />

          <TextInput  
          placeholder='Enter Referral Code'

          style={{fontSize:16,fontWeight:'500',marginLeft:10}}
          placeholderTextColor={'#979797'}
          
          />
        </View>

        <View style={{marginTop:hp(5),flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <CheckBox
    style={{}}
    onClick={()=>{
     
    }}
    isChecked={isChecked}
    
/>

<Text style={{fontSize: 16, color: '#000', fontWeight: '600',marginLeft:10}}>
I agree to the Terms & Conditions
            </Text>
        </View>


        <TouchableOpacity style={styles.RgBtn}>
        <Text style={{fontSize: 18, color: '#fff', fontWeight: '700',marginLeft:10}}>
Register
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  RgBtn:{backgroundColor:'#391F5C',marginTop:hp(5),marginHorizontal:40,height:45,borderRadius:30,alignItems:"center",justifyContent:'center'},
  offer: {
    backgroundColor: '#FFD15C66',
    height: 50,
    marginTop: hp(10),
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection:'row',
    paddingHorizontal:15
  },
  btn: {
    width: '45%',
    borderWidth: 1,
    alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'center',
    height: 45,
    borderRadius: 10,
  },
  gender: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 15,
  },
  input: {
    backgroundColor: '#FFF',
    height: 60,
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 20,
  },
});

const CELL_COUNT = 4;
