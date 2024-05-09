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

export default function Wallet() {
  return (
    <View style={{flex: 1, backgroundColor: '#E2E3E9'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="My Wallet" />
        <View style={styles.walletDiv}>
          <View style={{height: hp(15)}}>
            <Image
              source={require('../../assets/Cropping/WalletBalance3x.png')}
              resizeMode="cover"
              style={{height: 120, width: 120}}
            />
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <View
              style={{
                borderRightWidth: 1,
                paddingHorizontal: 20,
                borderStyle: 'dashed',
              }}>
              <Text style={styles.txt}>Wallet Balance</Text>
              <Text style={styles.txt}>£0/-</Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                paddingHorizontal: 10,
              }}>
              <Text style={styles.txt}>Expire Date</Text>
              <Text style={{fontSize: 14, color: '#000', fontWeight: '500'}}>
                18-04-2023
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: hp(8),
            justifyContent: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Month</Text>
            <Down />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Filters</Text>
            <Down />
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 10,
            borderRadius: 10,
            padding: 10,
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Trasaction}
            renderItem={({item}) => (
              <View style={styles.listContainer}>
                <View style={styles.list}>
                  <View style={{}}>
                    {item.type == 'Received from' ? (
                      <Image
                        source={require('../../assets/Cropping/Received3x.png')}
                        resizeMode="contain"
                        style={{height: 50, width: 50}}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/Cropping/Send3x.png')}
                        resizeMode="contain"
                        style={{height: 50, width: 50}}
                      />
                    )}
                  </View>

                  <View style={{width: '70%'}}>
                    <Text
                      style={{fontSize: 16, color: '#000', fontWeight: '700'}}>
                      {item.type}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#777777',
                        fontWeight: '500',
                      }}>
                      {item.details}
                    </Text>
                  </View>
                  <View style={{}}>
                    <Text
                      style={{
                        fontSize: 14,
                        color:
                          item.type == 'Received from' ? '#1DB663' : '#f75254',
                        fontWeight: '700',
                      }}>
                      {item.amount}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: '#777777',
                    marginTop: 5,
                  }}>
                  {item.time}
                </Text>
              </View>
            )}
          />
        </View>

        <View style={styles.refer}>
          <View style={{height: hp(15)}}>
            <Image
              source={require('../../assets/Cropping/refer.png')}
              resizeMode="contain"
              style={{height: hp(15), width: wp(50)}}
            />
          </View>

          <View style={{marginTop: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#391F5C'}}>
              Refer your friend
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#000'}}>
              and unlock your way to Stylelands’s{' '}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: '#000'}}>
              Lifetime Earning Program.
            </Text>
          </View>

          <TouchableOpacity style={{marginTop:10,paddingHorizontal:10}}>
          <Text style={{fontSize: 16, fontWeight: '700', color: '#391F5C'}}>Click Here</Text>
          <Right />
          </TouchableOpacity>
        </View>

        <View style={{height: hp(10)}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  refer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(32),
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  list: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'grey',
    paddingVertical: 10,
  },
  btnTxt: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    marginRight: 5,
  },
  btn: {
    borderWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    width: '20%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {fontSize: 16, color: '#391F5C', fontWeight: '700'},
  walletDiv: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(30),
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 20,
  },
});

const Trasaction = [
  {
    details: 'Demo Name ',
    amount: '+£1,49',
    time: '1 days ago',
    type: 'Received from',
  },
  {
    details: 'Demo Name ',
    amount: '-£1,49',
    time: '4 days ago',
    type: 'Send to',
  },
  {
    details: 'Demo Name ',
    amount: '+£1,49',
    time: '3 days ago',
    type: 'Received from',
  },
  {
    details: 'Demo Name ',
    amount: '-£1,49',
    time: '5 days ago',
    type: 'Send to',
  },
];
