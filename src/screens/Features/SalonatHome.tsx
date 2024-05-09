import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../configs/Header';
import Offer from '../../assets/svg/offer.svg';
import Wallet from '../../assets/svg/wallet.svg';
import Ad from '../../assets/svg/Ad.svg';
import CheckBox from 'react-native-check-box';

export default function SalonatHome() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 25,
          }}>
          <Header title="Salon at Home" showProfile={false} />
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              height: 30,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 12, fontWeight: '700', color: '#000'}}>
              Help
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cartItemContainer}>
          <Text style={styles.selectAddedText}>Order Id: 1669297452</Text>
          <View style={styles.dashedBorder} />
          <Text style={{fontSize: 14, fontWeight: '600', color: '#000'}}>
            Open
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: hp(10),
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/Cropping/img3.png')}
              style={{height: 60, width: 60}}
            />
            <View style={{marginLeft: 10, width: '65%'}}>
              <Text style={{fontSize: 12, color: '#000', fontWeight: '600'}}>
                Suman
              </Text>
              <Text style={{fontSize: 12, color: '#000', fontWeight: '600'}}>
                5
              </Text>
              <Text style={{fontSize: 12, color: '#000', fontWeight: '600'}}>
                Job Completed : 105
              </Text>
            </View>
            <View style={{marginLeft: 10, alignItems: 'flex-end'}}>
              <Image
                source={require('../../assets/Cropping/img3.png')}
                style={{height: 40, width: 40, borderRadius: 20}}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/Cropping/Pin3x.png')}
              resizeMode="contain"
              style={{height: 10, width: 10}}
            />
            <Text
              style={{
                fontSize: 10,
                color: '#000',
                fontWeight: '600',
                marginLeft: 5,
                borderBottomWidth: 1,
              }}>
              Track Partner location
            </Text>
          </View>
        </View>

        <View style={styles.paymentContainer}>
          <Text style={styles.paymentHeaderText}>Booking Details</Text>
          <View style={styles.dashedBorder} />
          <View style={styles.row}>
            <Text style={styles.label}>Extra saving Deals x 1</Text>
            <Text style={styles.value}>£0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Cheryls Glovite - Cleanup x 1</Text>
            <Text style={styles.value}>£0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Full Arms - Bleach x 1</Text>
            <Text style={styles.value}>£0</Text>
          </View>
          <View style={styles.dashedBorder} />
          <View style={styles.row}>
            <Text style={[styles.label, {fontWeight: '700'}]}>
              Service total
            </Text>
            <Text style={[styles.value, {fontWeight: '700'}]}>£137</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Free service (Bleach)</Text>
            <Text style={styles.value}>£0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Tip For Service Provider</Text>
            <Text style={styles.value}>£0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Coupon Discount (Freekit)</Text>
            <Text style={styles.value}>£0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Wallet Used</Text>
            <Text style={styles.value}>£0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>SURG Charges</Text>
            <Text style={styles.value}>£0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Cancelation Charges</Text>
            <Text style={styles.value}>£0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Safety & Hygiene Kit Charges</Text>
            <Text style={styles.value}>£0</Text>
          </View>

          <View style={styles.dashedBorder} />

          <View style={styles.row}>
            <Text style={[styles.label, {fontWeight: '700'}]}>
              Payble Amount
            </Text>
            <Text style={[styles.value, {fontWeight: '700'}]}>£200</Text>
          </View>
        </View>
        <View style={styles.coupenOfferContainer}>
          <Text style={styles.coupenOffertxt}>Address</Text>
          <View style={styles.dashedBorder2} />
          <View style={styles.offerRow}>
            <Ad />

            <Text style={styles.offerTitle}>ghf,gg,sector 1, Meneser</Text>
          </View>
          <View style={styles.dashedBorder} />
        </View>
        <View style={styles.coupenOfferContainer}>
          <Text style={styles.coupenOffertxt}>Timing</Text>
          <View style={styles.dashedBorder2} />
          <View style={styles.offerRow}>
            <Ad />

            <Text style={styles.offerTitle}>ghf,gg,sector 1, Meneser</Text>
          </View>
          <View style={styles.dashedBorder} />
        </View>

        <View style={styles.paymentContainer}>
          <Text style={styles.paymentHeaderText}>Note</Text>
          <View style={styles.dashedBorder} />
          <Text
            style={{
              fontSize: 12,
              color: '#000',
              fontWeight: '500',
              marginTop: 5,
            }}>
            Slot time (30 min) is arrival time of experts.
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#000',
              fontWeight: '500',
              marginTop: 5,
            }}>
            Slot time (30 min) is arrival time of experts.
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#000',
              fontWeight: '500',
              marginTop: 5,
            }}>
            Slot time (30 min) is arrival time of experts.
          </Text>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentHeaderText}>
            Need help with this order?
          </Text>
          <View style={styles.dashedBorder} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('../../assets/Cropping/Reportus3x.png')}
              style={{height: 50, width: 50}}
            />
            <View style={{width: '65%'}}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: '700',
                  marginTop: 5,
                }}>
                Report us.
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: '500',
                  marginTop: 5,
                }}>
                About any issues related to your order.
              </Text>
            </View>
            <Image
              source={require('../../assets/Cropping/Contact3x.png')}
              style={{height: 40, width: 40}}
            />
          </View>

          <TouchableOpacity
            style={[styles.bookNowButton, {height: 40}]}
            onPress={() => {
              // handle book now action
            }}>
            <Text
              style={[styles.bookNowText, {fontSize: 14, color: '#CA9757'}]}>
              Report Order
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentHeaderText}>
          Share with your friends
          </Text>
          <View style={styles.dashedBorder} />

        <View style={{height:hp(20),justifyContent:'center',alignItems:'center'}}>
<Image 
resizeMode='contain'
style={{height:hp(20),width:wp(60)}}
source={require('../../assets/Cropping/refer.png')}
/>
        </View>
<View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:16,color:'#391F5C',fontWeight:'700'}}>Share and Earn</Text>
    <Text style={{fontSize:12,color:'#000',fontWeight:'500'}}>and unlock your way to E4U’s Lifetime Earning Program.</Text>
    <Text style={{fontSize:12,color:'#000',fontWeight:'500'}}>Program.</Text>
</View>
        </View>
        <View style={[styles.paymentContainer,{paddingHorizontal:0}]}>
    
        

    <View style={{flexDirection:'row',alignItems:'center'}}>
        <View 
        style={{height:20,backgroundColor:'#391F5C',width:4,borderRadius:5}}
        />
    <Text style={{fontSize:14,color:'#000',fontWeight:'700',marginLeft:10}}>How It Works?</Text>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',

    marginTop:20,paddingHorizontal:15}}>
<View 
style={{height:5,width:5,backgroundColor:'#000',}}
/>
<Text style={{marginLeft:10,fontSize:14,fontWeight:'700',color:'#000'}}>Earn £15</Text>
<Text style={{marginLeft:0,fontSize:12,fontWeight:'400',color:'#777777'}}> on the first successful booking of the referee.</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',

    marginTop:20,paddingHorizontal:15}}>
<View 
style={{height:5,width:5,backgroundColor:'#000',}}
/>
<Text style={{marginLeft:10,fontSize:14,fontWeight:'700',color:'#000'}}>Earn £15</Text>
<Text style={{marginLeft:0,fontSize:12,fontWeight:'400',color:'#777777'}}> every time the referee completes a booking.</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',

    marginTop:20,paddingHorizontal:15}}>
<View 
style={{height:5,width:5,backgroundColor:'#000',}}
/>

<Text style={{marginLeft:0,fontSize:12,fontWeight:'400',color:'#777777'}}>The referee also <Text style={{marginLeft:10,fontSize:14,fontWeight:'700',color:'#000'}}>Earn £15</Text> on the App registration.</Text>
    </View>



        </View>
        <View style={{flexDirection:'row',
        alignItems:'center',justifyContent:'center',
        backgroundColor:'#fff',height:hp(10),borderTopRightRadius:30,borderTopLeftRadius:30,padding:20}}>
        <TouchableOpacity
          style={[styles.bookNowButton,{backgroundColor:'#E2E3E9', alignItems: 'center',
          width:wp(45),height:40}]}
          onPress={() => {
            // handle book now action
          }}>
          <Text style={[styles.bookNowText,{color:'#000'}]}>Reschedule</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bookNowButton,{ alignItems: 'center',
          width:wp(45),height:40}]}
          onPress={() => {
            // handle book now action
          }}>
          <Text style={styles.bookNowText}>Cancel Job</Text>
        </TouchableOpacity>
        </View>
      
       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bookNowButton: {
    marginHorizontal: 10,
    height:3,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal:20,
    justifyContent: 'center',
    backgroundColor: '#391F5C',
  },
  bookNowText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  paymentContainer: {
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  paymentHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
    marginTop: 10,
    alignSelf: 'center',
  },
  dashedBorder: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  dashedBorder2: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginTop: 10,
  },
  offerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  offerDetails: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop: 10,
    width: '95%', // Adjusted to accommodate longer text
  },
  offerTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: '800',
    marginLeft: 10,
  },
  offerCode: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '500',
  },
  applyButton: {
    marginTop: 10,
  },
  applyText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '800',
  },
  smallText: {
    fontSize: 12,
  },
  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  walletDetails: {
    paddingHorizontal: 20,

    width: '85%', // Adjusted to accommodate longer text
  },
  walletTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: '800',
  },
  walletAmount: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '500',
  },
  coupenOfferContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    height: hp(12),
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  coupenOffertxt: {
    color: '#000',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#E2E3E9',
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
  addressContainer: {
    width: '80%',
  },
  addressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  coinContainer: {},
  coinImage: {
    height: 30,
    width: 30,
  },
  cartItemContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  selectAddedText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    alignSelf: 'center',
  },
  dashedBorder: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    marginVertical: 10,
    borderColor: '#777',
  },
  cartItem: {
    marginVertical: 2,
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'space-between',
  },
  itemNameContainer: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  itemNameText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginRight: 10,
  },
  durationContainer: {
    marginLeft: 10,
  },
  durationText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#777777',
  },
  quantityContainer: {
    marginLeft: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#391F5C',
    width: '20%',
    height: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: '600',
    color: '#CA9757',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#CA9757',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  additionalItemContainer: {
    marginVertical: 2,
    height: hp(27),
    width: wp(30),
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  additionalItemImage: {
    height: hp(15),
    width: wp(30),
    borderRadius: 10,
  },
  additionalItemDetails: {
    marginTop: 15,
    marginLeft: 10,
  },
  additionalItemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  additionalItemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#391F5C',
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
  },
  addButtonLabel: {
    fontSize: 12,
    color: '#fff',
  },
  bottomSpace: {
    height: hp(5),
  },
});

const AddedItem = [
  {
    name: 'Instant glow facial',
    duration: '15 min',
    price: '£899',
    quantity: '1',
  },
  {
    name: 'Instant glow facial',
    duration: '15 min',
    price: '£899',
    quantity: '1',
  },
  {
    name: 'Instant glow facial',
    duration: '15 min',
    price: '£899',
    quantity: '1',
  },
  {
    name: 'Instant glow facial',
    duration: '15 min',
    price: '£899',
    quantity: '1',
  },
];
const tip = [
  {
    amount: '£20',
  },
  {
    amount: '£40',
  },
  {
    amount: '£0',
  },
  {
    amount: 'Custom',
  },
];
const FrAdded = [
  {
    name: 'Mud Facial',
    price: '£899',
    img: require('../../assets/Cropping/img4.png'),
  },
  {
    name: 'Mud Facial',
    price: '£899',
    img: require('../../assets/Cropping/img3.png'),
  },
  {
    name: 'Mud Facial',
    price: '£899',
    img: require('../../assets/Cropping/img4.png'),
  },
  {
    name: 'Mud Facial',
    price: '£899',
    img: require('../../assets/Cropping/img3.png'),
  },
];
