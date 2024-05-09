import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../configs/Header';
import Down from '../../assets/svg/down.svg';
import Right from '../../assets/svg/RightArrow.svg';
import Heart from '../../assets/svg/Heart.svg';
import ScreenNameEnum from '../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';

export default function SelectStaff() {

  const navigation = useNavigation()
  return (
    <View style={{flex: 1, backgroundColor: '#E2E3E9'}}>
      <ScrollView>
        <View style={styles.fisrtDiv}>
          <View style={{}}>
            <Image
              source={require('../../assets/Cropping/arrow-left2x.png')}
              style={{height: 20, width: 20}}
            />
          </View>
          <View style={{width: '80%'}}>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#000'}}>
              Spa, B Block Road,Noida
            </Text>
          </View>
          <View style={{}}>
            <Image
              source={require('../../assets/Cropping/Reportus.png')}
              style={{height: 30, width: 30, borderRadius: 15}}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 10,
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#000',
              alignSelf: 'center',
            }}>
            Select Staff
          </Text>
          <View
            style={{
              borderTopWidth: 1,
              borderStyle: 'dashed',
              marginVertical: 10,
              borderColor: '#777',
            }}
          />
          <FlatList
            data={Time}
            showsVerticalScrollIndicator={false}
            renderItem={({item,index}) => (
              <View
                style={{
                  marginVertical: 2,
                  height: hp(10),
                  flexDirection: 'row',
                  alignItems: 'center',

                  marginHorizontal: 10,
                  borderBottomWidth: 1,
                  borderStyle: 'dashed',
                  justifyContent:'space-between'
                }}>
                <View
                  style={{
                    backgroundColor: '#E7E8FF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                  }}>
                  <Text
                    style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
                    S
                  </Text>
                </View>
                <View style={{marginLeft: 10,width:'70%'}}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
                    Sunil
                  </Text>
                  <Text
                    style={{fontSize: 10, fontWeight: '500', color: '#777777'}}>
                    hair dresser
                  </Text>
                </View>

                <View>
                   {index == 0 ? <Image 
                    style={{height:30,width:30}}
                    source={require('../../assets/Cropping/Next_BT3x.png')}
                    />:<Image 
                    style={{height:30,width:30}}
                    source={require('../../assets/Cropping/button3x.png')}
                    />
                   }
                    </View>
              </View>
            )}
          />
        </View>

        <TouchableOpacity
         
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.SELECTED_SPATIME)
      }}
          style={{
            marginHorizontal: 10,
            height: 50,
            marginTop: 10,
            alignItems: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: '#391F5C',
          }}>
          <Text style={{fontSize: 18, color: '#fff', fontWeight: '600'}}>
            Book Now
          </Text>
        </TouchableOpacity>
        <View style={{height: hp(5)}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  secDiv: {
    marginTop: 20,
    backgroundColor: '#391F5C',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(7),
    borderWidth: 1,
  },
  fisrtDiv: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    height: hp(6),
    borderRadius: 15,
  },
});

const data = [
  {
    title: 'Services',

    list: [
      {
        name: 'Threading',
        duration: '5min-1h + Female only',
        price: '£20',
        selected: true,
      },
      {
        name: 'Threading',
        duration: '5min-1h + Female only',
        price: '£20',
        selected: false,
      },
      {
        name: 'Threading',
        duration: '5min-1h + Female only',
        price: '£20',
        selected: false,
      },
      {
        name: 'Threading',
        duration: '5min-1h + Female only',
        price: '£20',
        selected: false,
      },
      {
        name: 'Threading',
        duration: '5min-1h + Female only',
        price: '£20',
        selected: false,
      },
    ],
  },
];
const Time = [
  {
    title: 'Opening Time',
    day: 'Monday',
    Time: '10:00am - 7:00Pm',
  },
  {
    title: 'Opening Time',
    day: 'Tuesday',
    Time: '10:00am - 7:00Pm',
  },
  {
    title: 'Opening Time',
    day: 'Wednesday',
    Time: '10:00am - 7:00Pm',
  },
  {
    title: 'Opening Time',
    day: 'Thursday',
    Time: '10:00am - 7:00Pm',
  },
  {
    title: 'Opening Time',
    day: 'Friday',
    Time: '10:00am - 7:00Pm',
  },
  {
    title: 'Opening Time',
    day: 'Saturday',
    Time: '10:00am - 7:00Pm',
  },
  {
    title: 'Opening Time',
    day: 'Sunday',
    Time: '10:00am - 7:00Pm',
  },
];
