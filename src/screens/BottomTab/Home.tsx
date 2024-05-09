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
import Searchbar from '../../configs/Searchbar';
import Sheald from '../../assets/svg/ss.svg';
import Down from '../../assets/svg/down.svg';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';


export default function Home() {

  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#E2E3E9'}}>
      <ScrollView>
        <View
          style={{
            height: hp(5),
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Image
            source={require('../../assets/Cropping/Menu3x.png')}
            style={{height: 30, width: 30}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              width: '70%',
             
            }}>
            <Image
              source={require('../../assets/Cropping/Pin3x.png')}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
            <View style={{width:'55%',flexDirection:'row',alignItems:'center',marginLeft:10}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#000',
                width: '90%',
              }}>
              318 Lee High Rd
            </Text>
            <Down />
            </View>
          </View>

          <View>
            <Image
              source={require('../../assets/Cropping/Reportus.png')}
              style={{height: 45, width: 45}}
            />
          </View>
        </View>

        <View style={{marginTop: 20, marginHorizontal: 10}}>
          <Searchbar placeholder="search ..." />
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            height: hp(20),
            marginTop: 20,
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <View style={{alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#000', fontWeight: '700'}}>
              2 Visits to go
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              marginTop: 10,
              borderStyle: 'dashed',
              borderColor: '#000 ',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              height: hp(5),

              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('../../assets/Cropping/Booked2x.png')}
              resizeMode="contain"
              style={{height: 25, width: 25}}
            />
            <View
              style={{
                borderWidth: 2,
                width: '15%',
                marginHorizontal: 3,
                borderStyle: 'dashed',
                borderColor: '#000 ',
              }}
            />

            <Image
              resizeMode="contain"
              source={require('../../assets/Cropping/Ontheway3x.png')}
              style={{height: 25, width: 25}}
            />
            <View
              style={{
                borderWidth: 2,
                width: '15%',
                marginHorizontal: 3,
                borderStyle: 'dashed',
                borderColor: '#000 ',
              }}
            />

            <Image
              resizeMode="contain"
              source={require('../../assets/Cropping/Arrived3x.png')}
              style={{height: 25, width: 25}}
            />
            <View
              style={{
                borderWidth: 2,
                width: '15%',
                marginHorizontal: 3,
                borderStyle: 'dashed',
                borderColor: '#000 ',
              }}
            />

            <Image
              resizeMode="contain"
              source={require('../../assets/Cropping/ServiceDone3x.png')}
              resizeMode="contain"
              style={{height: 25, width: 25}}
            />
            <View
              style={{
                borderWidth: 2,
                width: '15%',
                marginHorizontal: 3,
                borderStyle: 'dashed',
                borderColor: '#000 ',
              }}
            />

            <Image
              resizeMode="contain"
              source={require('../../assets/Cropping/Review3x.png')}
              style={{height: 25, width: 25}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',

              paddingHorizontal: 10,
            }}>
            <View>
              <Text style={{fontSize: 10, color: '#000', fontWeight: '600'}}>
                Booked
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 10, color: '#000', fontWeight: '600'}}>
                On the way
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 10, color: '#000', fontWeight: '600'}}>
                Arrived
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 10, color: '#000', fontWeight: '600'}}>
                Service Done
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 10, color: '#000', fontWeight: '600'}}>
                Review
              </Text>
            </View>
          </View>

          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{fontSize: 16, color: '#391F5C', fontWeight: '600'}}>
              5 visits to unlock your service reward
            </Text>
          </View>
        </View>

        <View style={{height: hp(20), width: '100%', marginTop: 20}}>
          <Image
            style={{height: hp(20), width: '100%'}}
            resizeMode="cover"
            source={require('../../assets/Cropping/img.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#391F5C',
            marginTop: 10,
            marginHorizontal: 10,
            borderRadius: 15,
          }}>
          <View style={{alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
              Service Category
            </Text>
          </View>

          <View
            style={{
              borderColor: '#fff',
              borderWidth: 1,
              borderStyle: 'dashed',
              marginTop: 15,
            }}
          />

          <View style={{marginHorizontal: 20, marginTop: 10}}>
            <FlatList
              data={Data}
              numColumns={3}
              renderItem={({item}) => (
                <TouchableOpacity

                onPress={()=>{
                  navigation.navigate(ScreenNameEnum.NEARBY_YOU)
                }}
                  style={{
                    backgroundColor: '#fff',
                    height: hp(16),
                    width: '30%',
                    borderRadius: 15,
                    margin: 5,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      source={item.img}
                      style={{height: 60, width: 60, borderRadius: 30}}
                    />

                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: '800',
                        color: '#000',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{fontSize: 16, fontWeight: '800', color: '#000'}}>
                      {item.subtitle}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            marginTop: 10,
            marginHorizontal: 10,
            borderRadius: 15,
          }}>
          <View style={{alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#000', fontWeight: '700'}}>
              Offers4U
            </Text>
          </View>

          <View
            style={{
              borderColor: '#391F5C',
              borderWidth: 1,
              borderStyle: 'dashed',
              marginTop: 15,
            }}
          />

          <View style={{marginTop: 10}}>
            <FlatList
              data={Data}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#391F5C33',
                    height: hp(16),
                    width: wp(92),
                    borderRadius: 15,
                    margin: 5,
                    flexDirection: 'row',
                    marginHorizontal: 5,
                    padding: 15,
                  }}>
                  <View style={{width: '50%'}}>
                    <Text
                      style={{
                        color: '#391F5C',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      Face upgrade deals
                    </Text>
                    <Text
                      style={{
                        color: '#391F5C',
                        fontWeight: '800',
                        fontSize: 18,
                      }}>
                      Flat 25% off on Face Bleach
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#fff',
                        width: '70%',
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '800',
                          color: '#000',
                        }}>
                        Explore Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: '45%',
                      marginLeft: 10,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../assets/Cropping/img3.png')}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              )}
            />
          </View>

          <View
            style={{
              backgroundColor: '#391F5C',
              height: hp(16),
              width: wp(92),
              borderRadius: 15,
              margin: 5,
              flexDirection: 'row',
              marginHorizontal: 5,
            }}>
            <View style={{width: '65%', padding: 15}}>
              <Text style={{color: '#FFFFFF', fontWeight: '600', fontSize: 18}}>
                Let’s make a package just for you, Manvi!
              </Text>

              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#CA9757', fontSize: 18, fontWeight: '700'}}>
                  Spa
                </Text>

                <Image
                  source={require('../../assets/Cropping/rightArrrow.png')}
                  style={{height: 20, width: 20, marginLeft: 10, marginTop: 4}}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={{width: '35%', alignItems: 'center'}}>
              <Image
                style={{height: 132, width: 140, borderRadius: 20}}
                source={require('../../assets/Cropping/img4.png')}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            borderRadius: 10,
            marginHorizontal: 10,
          }}>
          <View style={{alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#000', fontWeight: '700'}}>
              Beauty Salon
            </Text>
          </View>
          <View
            style={{
              borderColor: '#391F5C',
              borderWidth: 1,
              borderStyle: 'dashed',
              marginTop: 15,
            }}
          />
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              paddingVertical: 10,
            }}>
            <FlatList
              data={Data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={[
                    styles.shdow,
                    {
                      backgroundColor: '#fff',
                      height: hp(15),
                      width: wp(26),
                      borderRadius: 15,
                      marginRight: 5,
                      marginVertical: 5,
                      marginLeft: 5,
                    },
                  ]}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      source={item.img}
                      style={{height: 60, width: 60, borderRadius: 30}}
                    />

                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: '800',
                        color: '#000',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{fontSize: 16, fontWeight: '800', color: '#000'}}>
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>

        <View style={{height: hp(25)}}>
          <Image
            resizeMode="contain"
            style={{height: hp(25), width: wp(100)}}
            source={require('../../assets/Cropping/img5.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            borderRadius: 10,
            marginHorizontal: 10,
          }}>
          <View style={{alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#000', fontWeight: '700'}}>
              Beauty Salon
            </Text>
          </View>
          <View
            style={{
              borderColor: '#391F5C',
              borderWidth: 1,
              borderStyle: 'dashed',
              marginTop: 15,
            }}
          />
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              paddingVertical: 10,
            }}>
            <FlatList
              data={Data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={[
                    styles.shdow,
                    {
                      backgroundColor: '#fff',
                      height: hp(15),
                      width: wp(26),
                      borderRadius: 15,
                      marginRight: 5,
                      marginVertical: 5,
                      marginLeft: 5,
                    },
                  ]}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      source={item.img}
                      style={{height: 60, width: 60, borderRadius: 30}}
                    />

                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: '800',
                        color: '#000',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{fontSize: 16, fontWeight: '800', color: '#000'}}>
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>

        <View style={{height: hp(25)}}>
          <Image
            resizeMode="contain"
            style={{height: hp(25), width: wp(100)}}
            source={require('../../assets/Cropping/img6.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            borderRadius: 10,
            marginHorizontal: 10,
          }}>
          <View style={{alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#000', fontWeight: '700'}}>
              Beauty Salon
            </Text>
          </View>
          <View
            style={{
              borderColor: '#391F5C',
              borderWidth: 1,
              borderStyle: 'dashed',
              marginTop: 15,
            }}
          />
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              paddingVertical: 10,
            }}>
            <FlatList
              data={Data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={[
                    styles.shdow,
                    {
                      backgroundColor: '#fff',
                      height: hp(15),
                      width: wp(26),
                      borderRadius: 15,
                      marginRight: 5,
                      marginVertical: 5,
                      marginLeft: 5,
                    },
                  ]}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      source={item.img}
                      style={{height: 60, width: 60, borderRadius: 30}}
                    />

                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: '800',
                        color: '#000',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{fontSize: 16, fontWeight: '800', color: '#000'}}>
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>

        <View style={{height: hp(25)}}>
          <Image
            resizeMode="contain"
            style={{height: hp(25), width: wp(100)}}
            source={require('../../assets/Cropping/img7.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 10,
            borderRadius: 10,
            marginHorizontal: 10,
          }}>
          <View style={{alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 18, color: '#000', fontWeight: '700'}}>
              Beauty Salon
            </Text>
          </View>
          <View
            style={{
              borderColor: '#391F5C',
              borderWidth: 1,
              borderStyle: 'dashed',
              marginTop: 15,
            }}
          />
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              paddingVertical: 10,
            }}>
            <FlatList
              data={Data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={[
                    styles.shdow,
                    {
                      backgroundColor: '#fff',
                      height: hp(15),
                      width: wp(26),
                      borderRadius: 15,
                      marginRight: 5,
                      marginVertical: 5,
                      marginLeft: 5,
                    },
                  ]}>
                  <View
                    style={{
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      source={item.img}
                      style={{height: 60, width: 60, borderRadius: 30}}
                    />

                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: '800',
                        color: '#000',
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{fontSize: 16, fontWeight: '800', color: '#000'}}>
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            height: hp(20),

            borderRadius: 20,
            margin: 5,
            marginTop: 10,
            flexDirection: 'row',
            marginHorizontal: 10,
          }}>
          <View style={{width: '65%', padding: 15}}>
            <Text style={{color: '#391F5C', fontWeight: '700', fontSize: 18}}>
              100 % Satisfication of Free Rework
            </Text>
            <Text
              style={{
                color: '#000',
                fontWeight: '500',
                fontSize: 16,
                marginTop: 10,
              }}>
              If you're not Satasfied with the quaity of service ,we'll get
              rework done at free of cost.
            </Text>
          </View>

          <View
            style={{
              height: hp(20),
              width: wp(30),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: hp(20), width: wp(20)}}
              resizeMode="contain"
              source={require('../../assets/Cropping/img8.png')}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            height: hp(20),

            borderRadius: 20,
            margin: 5,
            marginTop: 10,
            flexDirection: 'row',
            marginHorizontal: 10,
          }}>
          <View style={{width: '65%', padding: 15}}>
            <Text style={{color: '#391F5C', fontWeight: '700', fontSize: 28}}>
              Refer and get Free services
            </Text>
            <Text style={{color: '#391F5C', fontWeight: '700', fontSize: 18}}>
              Invite and get ₹300*
            </Text>
          </View>

          <View
            style={{
              height: hp(20),
              width: wp(30),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: hp(20), width: wp(20)}}
              resizeMode="contain"
              source={require('../../assets/Cropping/img9.png')}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            height: hp(25),

            borderRadius: 20,
            margin: 5,
            marginTop: 10,

            marginHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',

              paddingRight: 20,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#391F5C',
                marginTop: 10,
                marginLeft: 20,
              }}>
              Our Safety Standards
            </Text>

            <View
              style={{
                borderWidth: 1,
                height: 30,
                width: '30%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRadius: 10,
              }}>
              <Sheald />
              <Text style={{fontSize: 18, fontWeight: '700', color: '#000'}}>
                Be Safe
              </Text>
            </View>
          </View>
          <FlatList
            data={Data2}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View
                style={[
                  {
                    backgroundColor: '#fff',
                    height: hp(15),

                    borderRadius: 15,
                    marginRight: 5,
                    marginVertical: 5,
                    marginLeft: 18,
                  },
                ]}>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Image
                    source={item.img}
                    style={{height: 60, width: 60, borderRadius: 30}}
                  />

                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 12,
                      fontWeight: '800',
                      color: '#000',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{fontSize: 12, fontWeight: '800', color: '#000'}}>
                    {item.subtitle}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            height: hp(25),
flexDirection:'row',
            borderRadius: 20,
            margin: 5,
            marginTop: 10,
    alignItems:'center',
            marginHorizontal: 10,
          }}>
    <View style={{marginLeft:20}}>
      <Text style={{fontSize:20,fontWeight:'800',color:'#000'}}>Certified & Trained</Text>
      <Text style={{fontSize:20,fontWeight:'800',color:'#000'}}> Professionals</Text>
    </View>

    <View style={{width:'50%',marginLeft:10,height:hp(25),
    flexDirection:'row',
    backgroundColor:'#391F5C',borderTopLeftRadius:80,borderBottomLeftRadius:80}}>
<Image  
source={require('../../assets/Cropping/bg.png')}
resizeMode='cover'
style={{height:hp(25),width:wp(20),marginLeft:30}}
/>
<Image  
source={require('../../assets/Cropping/ldy.png')}
resizeMode='cover'
style={{height:hp(25),width:hp(15),marginLeft:-40}}
/>
    </View>
          
        </View>

        <View style={{height: hp(10)}} />
      </ScrollView>
    </View>
  );
}

const Data = [
  {
    name: 'Hair',
    img: require('../../assets/Cropping/img2.png'),
  },
  {
    name: 'Nail',
    img: require('../../assets/Cropping/img2.png'),
  },
  {
    name: 'Waxing',
    img: require('../../assets/Cropping/img2.png'),
  },
  {
    name: 'Beauty ',
    subtitle: 'Salon',
    img: require('../../assets/Cropping/img2.png'),
  },
  {
    name: 'Massage',
    subtitle: 'center',
    img: require('../../assets/Cropping/img2.png'),
  },
  {
    name: 'Spa',
    img: require('../../assets/Cropping/img2.png'),
  },
  {
    name: 'Tattoo',
    img: require('../../assets/Cropping/img2.png'),
  },
  {
    name: 'Nutritionist',
    img: require('../../assets/Cropping/img2.png'),
  },
  {
    name: 'Dermatologist',
    img: require('../../assets/Cropping/img2.png'),
  },
];
const Data2 = [
  {
    name: 'Sanitized Kits ',
    img: require('../../assets/Cropping/Sanitized3x.png'),
    subtitle: 'and Tools',
  },
  {
    name: 'Temperature ',
    img: require('../../assets/Cropping/Temperature3x.png'),
    subtitle: 'Record',
  },
  {
    name: 'Vaccinated ',
    img: require('../../assets/Cropping/Vaccinated3x.png'),
    subtitle: 'Professionals',
  },
  {
    name: 'Monodose',
    subtitle: 'Products',
    img: require('../../assets/Cropping/Monodose3x.png'),
  },
];

const styles = StyleSheet.create({
  shdow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
