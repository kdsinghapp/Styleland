import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
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

export default function ValidOtp() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const dispatch = useDispatch();
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={{flex: 1, backgroundColor: '#391F5C', paddingHorizontal: 15}}>
      <View style={{marginTop: hp(20)}}>
        <Text style={{fontSize: 24, color: '#fff', fontWeight: '700'}}>
          Enter the OTP{' '}
        </Text>
        <Text style={{fontSize: 24, color: '#fff', fontWeight: '700'}}>
          Sent To +123456655
        </Text>
      </View>

      <View
        style={{
          height: hp(10),
          width: '50%',
          alignSelf: 'center',
          marginTop: hp(5),
        }}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={4}
          rootStyle={{}}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View style={{backgroundColor: '#E9E9E9', borderRadius: 15}}>
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 16, color: '#fff', fontWeight: '300'}}>
          Enter 4 - digit verification code sent to your number.
        </Text>
      </View>
      <View style={{marginTop: hp(5), alignItems: 'center'}}>
        <Line />
      </View>
      <View
        style={{
          marginTop: hp(4),
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#fff',
            fontWeight: '500',
            fontStyle: 'italic',
          }}>
          30 sec
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontWeight: '500',
            fontStyle: 'italic',
            marginHorizontal: 10,
          }}>
          Resend OTP
        </Text>
      </View>

      <View style={{marginTop: hp(3), alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontWeight: '500',
            borderBottomWidth: 1,
            lineHeight: 20,
            borderColor: '#fff',
            marginTop: 10,
            fontStyle: 'italic',
          }}>
          Edit Phone Number
        </Text>
      </View>
      <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 16,
            color: '#CA9757',
            fontWeight: '500',
            borderBottomWidth: 1,
            lineHeight: 20,
            borderColor: '#CA9757',
            marginTop: 10,
            fontStyle: 'italic',
          }}>
          Terms and conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    height: 60,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#E9E9E9',
    textAlign: 'center',
    borderRadius: 10,
    // backgroundColor:'#E9E9E9',
  },
  focusCell: {
    borderColor: '#6D6EEC',
    borderRadius: 10,
  },
});

const CELL_COUNT = 4;
