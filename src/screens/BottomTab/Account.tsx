import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../configs/Header';
import Down from '../../assets/svg/down.svg';
import Right from '../../assets/svg/RightArrow.svg';

export default function Account() {
  return (
    <View style={{flex: 1, backgroundColor: '#E2E3E9'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="My Account" showProfile={false} />

        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
            height: hp(15),
            marginVertical: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              marginTop: 20,
            }}>
            <View>
              <Text style={{fontSize: 14, color: '#000', fontWeight: '700'}}>
                Same sunder
              </Text>
              <Text style={{fontSize: 12, color: '#777777', fontWeight: '500'}}>
                demo@gmail.com
              </Text>
              <Text style={{fontSize: 12, color: '#777777', fontWeight: '500'}}>
                +91111545645
              </Text>
            </View>
            <View style={{}}>
              <Image source={require('../../assets/Cropping/Reportus.png')} 
              
              style={{height:50,width:50,borderRadius:25}}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: '#391F5C', fontWeight: '600'}}>
              Edit Profile
            </Text>

            <Image
              resizeMode="contain"
              style={{height: 15, width: 15, marginLeft: 10}}
              source={require('../../assets/Cropping/RightVector.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
            height: hp(10),
            marginVertical: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              marginTop: 20,
            }}>
            <View>
              <Text style={{fontSize: 14, color: '#000', fontWeight: '700'}}>
                App Update avaliable
              </Text>
              <Text style={{fontSize: 12, color: '#777777', fontWeight: '500'}}>
                app version 1.48.5
              </Text>
            </View>

            <View style={{width: '20%'}}>
              <Image
                source={require('../../assets/Cropping/Cloud.png')}
                style={{position: 'absolute', bottom: 0, left: 0}}
              />
              <Image
                source={require('../../assets/Cropping/Cloud.png')}
                style={{position: 'absolute', bottom: 25, right: 0}}
              />
            </View>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingVertical: 20,
                marginVertical: 5,
              }}>
              <View
                style={{
                  height: 40,
                  alignItems: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    backgroundColor: '#CA9757',
                    height: 20,
                    width: 3,
                    borderRadius: 20,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    color: '#000',
                    fontWeight: '700',
                    marginLeft: 10,
                  }}>
                  {item.title}
                </Text>
              </View>
              <View>
                <FlatList
                  data={item.list}
                  renderItem={({item}) => (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginHorizontal: 20,
                        height: 35,
                        marginVertical: 2,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          color: '#000',
                        }}>
                        {item.name}
                      </Text>
                      <Image
                        resizeMode="contain"
                        style={{height: 10, width: 10}}
                        source={require('../../assets/Cropping/Next3x.png')}
                      />
                    </View>
                  )}
                />
              </View>
            </View>
          )}
        />
         <View
          style={{
            marginHorizontal: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
            height: hp(8),
            marginVertical: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              marginTop: 20,
            }}>
            <View>
              <Text style={{fontSize: 14, color: '#000', fontWeight: '700'}}>
                Join as a Partner
              </Text>
              <Text style={{fontSize: 12, color: '#777777', fontWeight: '500'}}>
                app version 1.48.5
              </Text>
            </View>

            
          </View>
        </View>
         <TouchableOpacity
          style={{
            marginHorizontal: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
            height: hp(8),
            marginVertical: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
            alignItems:'center',
              paddingHorizontal: 15,
              marginTop: 20,
            }}>
              <Image  
              style={{height:30,width:30}}
              resizeMode='contain'
              source={require('../../assets/Cropping/logout.png')}
              />
            <View style={{marginLeft:15}}>
              <Text style={{fontSize: 14, color: '#000', fontWeight: '700'}}>
               LogOut
              </Text>
            
            </View>

            
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const data = [
  {
    title: 'Bookings',
    list: [
      {
        icon: '',
        name: 'My Booking',
      },
      {
        icon: '',
        name: 'My Address',
      },
      {
        icon: '',
        name: 'Booking help',
      },
    ],
  },
  {
    title: 'Payments',
    list: [
      {
        icon: '',
        name: 'My Wallet',
      },
      {
        icon: '',
        name: 'Refer and Earn',
      },
      {
        icon: '',
        name: 'My Payment Methods',
      },
    ],
  },
  {
    title: 'More',
    list: [
      {
        icon: '',
        name: 'About Us',
      },
      {
        icon: '',
        name: 'Privacy Policy',
      },
      {
        icon: '',
        name: 'Term & Condition',
      },
      {
        icon: '',
        name: 'Support',
      },
      {
        icon: '',
        name: 'Give us a Feadback',
      },
      {
        icon: '',
        name: 'Share Stylelands',
      },
    ],
  },
];
