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
import Heart from '../../assets/svg/Heart.svg';
import Star from '../../assets/svg/star.svg';

import Searchbar from '../../configs/Searchbar';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';

export default function NearByYou() {
    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<Star key={i} style={i !== 0 ? { marginLeft: 2 } : null} />);
        }
        return stars;
      };

      const navigation = useNavigation()
  return (
    <View style={{flex: 1, backgroundColor: '#E2E3E9'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
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

      <View style={styles.secDiv}>
<Text style={{fontSize:17,color:'#fff',fontWeight:'500'}}>7 results for Spa near you</Text>
      </View>
<View style={{height:hp(7)}}>
      <FlatList 
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({item})=>(
        <View style={{width:wp(30),height:35,backgroundColor:'#391F5C',alignItems:'center',justifyContent:'center',
        borderRadius:10,flexDirection:'row',
        marginLeft:10,marginTop:10}}>
           {renderStars(item.count)}
         
            </View>
      )}
      data={data}
      />
      </View>
      <View style={{flex:1}}>
      <FlatList 

      showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate(ScreenNameEnum.SPA_DETAILS)
        }}
        style={{height:hp(28),padding:10,
            width:wp(95),marginVertical:5,
          backgroundColor:'#fff',
        borderRadius:10,
        marginLeft:10,}}>
            <ImageBackground 
            source={require('../../assets/Cropping/video.png')}
            
            style={{height:hp(20),borderRadius:20}}>
<View style={{marginLeft:10,marginTop:10}}>
      <Heart />
      </View>
            </ImageBackground>
            <View style={{marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'600',color:'#000'}}>{item.name}</Text>
                <Text style={{fontSize:12,fontWeight:'500',color:'#777777'}}>{item.details}</Text>
            </View>
            </TouchableOpacity>
      )}
      data={SalonList}
      />
</View>
</ScrollView>
    </View>
  );
}


const data =[
{
    count: 5
},
{
    count: 4
},
{
    count: 3
},
{
    count: 2
}
]

const SalonList =[
    {
        name:'Salaon 1',
        details:'A Block, H8M6+WPC, Noida (Sector 2), Uttar Pardesh.....',
        img:require('../../assets/Cropping/video.png')
    },
    {
        name:'Salaon 1',
        details:'A Block, H8M6+WPC, Noida (Sector 2), Uttar Pardesh.....',
        img:require('../../assets/Cropping/video.png')
    },
    {
        name:'Salaon 1',
        details:'A Block, H8M6+WPC, Noida (Sector 2), Uttar Pardesh.....',
        img:require('../../assets/Cropping/video.png')
    },
]
const styles = StyleSheet.create({
    secDiv:{marginTop:20,
        backgroundColor:'#391F5C',marginHorizontal:10,borderRadius:10,alignItems:'center',justifyContent:'center',
        height:hp(7),borderWidth:1},
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
