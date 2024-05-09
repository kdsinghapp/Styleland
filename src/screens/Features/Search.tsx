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
import Searchbar from '../../configs/Searchbar';
  
  export default function Search() {
    return (
      <View style={{flex: 1, backgroundColor: '#E2E3E9'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title="Search" showProfile={false} />
  
       <View style={{marginVertical:10}}>
        <Searchbar  placeholder='search' />
       </View>
        
  
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  marginHorizontal: 10,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  marginVertical: 5,
                }}>
                <View
                  style={{
                    
                    alignItems: 'center',
                    justifyContent:'center',
                 paddingVertical:10,
                    flexDirection: 'row',
                    borderBottomWidth:1,
                    borderStyle:'dashed',
                    borderColor:'#777777'
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
                           {item.title == 'Search History' ?<Image
                          resizeMode="contain"
                          style={{height:20, width:20}}
                          source={require('../../assets/Cropping/Clocka3x.png')}
                        />
                           : <Image
                          resizeMode="contain"
                          style={{height:20, width:20}}
                          source={require('../../assets/Cropping/Up3x.png')}
                        />

                           }
                        <View style={{width:'90%'}}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#000',
                          }}>
                          {item.name}
                        </Text>
                       
                      </View>
                       
                      </View>
                    )}
                  />
                </View>
              </View>
            )}
          />
         
        </ScrollView>
      </View>
    );
  }
  
  const data = [
    {
      title: 'Search History',
     
      list: [
        {
            
          name: 'Lorem ipsum dolor',
        },
        {
         
          name: 'Lorem ipsum dolor',
        },
        {
         
          name: 'Lorem ipsum dolor',
        },
      ],
    },
    {
      title: 'Trending Search',
      logo:require('../../assets/Cropping/Next3x.png'),
      list: [
        {
         
          name: 'Lorem ipsum dolor',
        },
        {
         
          name: 'Lorem ipsum dolor',
        },
        {
          
          name: 'Lorem ipsum dolor',
        },
      ],
    },
  
  ];
  