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
export default function SpaDetails() {

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
        <ImageBackground
          source={require('../../assets/Cropping/spa.png')}
          style={{height: hp(20), marginTop: 10, marginHorizontal: 10}}>
          <View style={{position: 'absolute', right: 10, top: 10}}>
            <Heart />
          </View>
        </ImageBackground>

        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
                marginVertical: 5,
                paddingVertical: 10,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#777777',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000',
                    fontWeight: '500',
                    marginLeft: 10,
                  }}>
                  {item.title}
                </Text>
              </View>
              <View style={{}}>
                <FlatList
                  data={item.list}
                  renderItem={({item}) => (
                    <View
                      style={{
                        height: hp(10),
                        marginHorizontal: 20,
                        borderBottomWidth: 1,
                        borderStyle: 'dashed',
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          color: '#000',
                        }}>
                        {item.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '500',
                            color: '#777777',
                          }}>
                          {item.duration}
                        </Text>
                        {item.selected ? (
                          <Image
                            style={{height: 30, width: 30}}
                            source={require('../../assets/Cropping/Add_3x.png')}
                          />
                        ) : (
                          <Image
                            style={{height: 30, width: 30}}
                            source={require('../../assets/Cropping/Add3x.png')}
                          />
                        )}
                      </View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          color: '#000',
                        }}>
                        from {item.price}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          )}
        />
        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 10,
            borderRadius: 10,
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#000',
              alignSelf: 'center',
            }}>
            Opening Time
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
            renderItem={({item}) => (
              <View
                style={{
                  marginVertical: 2,

                  marginTop: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      color: '#777777',
                    }}>
                    {item.day}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      color: '#777777',
                    }}>
                    {item.Time}
                  </Text>
                </View>
              </View>
            )}
          />
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
            Opening Time
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
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View
                style={{
                  marginVertical: 2,
                  height: hp(15),
                 
                  marginTop: 5,
                  marginHorizontal:10,
                }}>
               <View style={{
                backgroundColor:'#E7E8FF',alignItems:'center',justifyContent:'center',
                height:70,width:70,borderRadius:35}}>
<Text style={{fontSize:20,fontWeight:'600',color:'#000'}}>S</Text>
              </View>
              <View style={{alignItems:'center',marginTop:5}}>
<Text style={{fontSize:14,fontWeight:'500',color:'#000'}}>Sunil</Text>
<Text style={{fontSize:10,fontWeight:'500',color:'#777777'}}>hair dresser</Text>
              </View>
              </View>
            )}
          />
        </View>

        <TouchableOpacity
        
        onPress={()=>{
            navigation.navigate(ScreenNameEnum.SELECTED_STAFF)
        }}
        
        style={{marginHorizontal:10,
            height:50,
            marginTop:10,
            alignItems:'center',
            borderRadius:10,
            justifyContent:'center',
            backgroundColor:'#391F5C'}}>
            <Text style={{fontSize:18,color:'#fff',fontWeight:'600'}}>Book Now</Text>
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
