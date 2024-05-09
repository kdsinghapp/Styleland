import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../configs/Header';
import Down from '../../assets/svg/down.svg';
import Right from '../../assets/svg/RightArrow.svg';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';

export default function Wallet() {
  const navigation = useNavigation()
  const [Hisory,setHisory] = useState(false)
  return (
    <View style={{flex: 1, backgroundColor: '#E2E3E9'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="My Booking" />
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 10,
            height: hp(8),
          }}>
          <TouchableOpacity

          onPress={()=>{
            setHisory(false)
          }}
            style={{
              backgroundColor:Hisory?'#fff':'#391F5C',
              width: '48%',
              borderRadius: 18,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color:Hisory?'#000':'#fff', fontWeight: '600'}}>
              Ongoing
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{
              setHisory(true)
            }}
            style={{
              backgroundColor:Hisory?'#391F5C':'#fff',
              width: '48%',
              borderRadius: 18,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: Hisory?'#fff':'#000', fontWeight: '600'}}>
              History
            </Text>
          </TouchableOpacity>
        </View>
    {!Hisory &&  <FlatList  
      data={data}

      renderItem={({item})=>(
        <TouchableOpacity

        onPress={()=>{
          navigation.navigate(ScreenNameEnum.SALONAT_HOME)
        }}
        style={{
          marginHorizontal: 10,
          backgroundColor: '#fff',
          borderRadius: 10,
          height: hp(26),
          marginVertical:5
        }}>
        <View
          style={{
            alignItems: 'center',
            borderBottomWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#000',
            height: 40,
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14, color: '#000', fontWeight: '600'}}>
            Order Id :166928545
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <View>
            <Text style={{fontSize: 16, color: '#000', fontWeight: '500'}}>
              Salon at Home
            </Text>
            <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
              08-May,2023 Mon,
            </Text>
            <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
              16:30-17:30
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 16, color: '#391F5C', fontWeight: '600'}}>
              Progress
            </Text>
            <Text style={{fontSize: 11, color: '#000', fontWeight: '400'}}>
              SP Assigned
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/Cropping/Pin3x.png')}
            resizeMode="contain"
            style={{height: 15, width: 15}}
          />

          <Text
            style={{
              marginLeft: 5,
              fontWeight: '400',
              color: '#777777',
              fontSize: 14,
            }}>
            Track Partner location
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
            borderTopWidth: 1,
            borderStyle: 'dashed',
            height: hp(5),
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, color: '#000', fontWeight: '600'}}>
            View details
          </Text>
        </View>
      </TouchableOpacity>
      )}
      />
      }
  {Hisory  &&    <FlatList  
      data={data}

      renderItem={({item})=>(
        <View
        style={{
          marginHorizontal: 10,
          backgroundColor: '#fff',
          borderRadius: 10,
          height: hp(24),
          marginVertical:5
        }}>
        <View
          style={{
            alignItems: 'center',
            borderBottomWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#000',
            height: 40,
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 14, color: '#000', fontWeight: '600'}}>
            Order Id :166928545
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <View>
            <Text style={{fontSize: 16, color: '#000', fontWeight: '500'}}>
              Salon at Home
            </Text>
            <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
              08-May,2023 Mon,
            </Text>
            <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
              16:30-17:30
            </Text>
          </View>
          <View style={{alignItems:'center',marginTop:20,}}>
            <Text style={{fontSize: 16, color: '#391F5C', fontWeight: '600'}}>
           Canceled
            </Text>
           
          </View>
        </View>

       
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 10,
            height: hp(8),
          }}>
          <TouchableOpacity

          onPress={()=>{
            setHisory(false)
          }}
            style={{
              backgroundColor:Hisory?'#E2E3E9':'#391F5C',
              width: '48%',
              borderRadius: 18,
              height:40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, color:Hisory?'#000':'#fff', fontWeight: '600'}}>
            Write Review
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{
              setHisory(true)
            }}
            style={{
              backgroundColor:Hisory?'#391F5C':'#fff',
              width: '48%',
              borderRadius: 18,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 14, color: Hisory?'#CA9757':'#000', fontWeight: '600'}}>
            Repeat Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      )}
      />
        }
      </ScrollView>
    </View>
  );
}


const data = [

  {
    name:'1'
  },

  {
    name:'1'
  },
]