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
import I from '../../assets/svg/i.svg';
import CheckBox from 'react-native-check-box'
import ScreenNameEnum from '../../routes/screenName.enum';
import { useNavigation } from '@react-navigation/native';
export default function Cart() {

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header title="Cart" />
        </View>
        <View style={styles.fisrtDiv}>
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>Spa, B Block Road,Noida</Text>
          </View>
          <View style={styles.coinContainer}>
            <Image
              resizeMode="contain"
              source={require('../../assets/Cropping/coin.png')}
              style={styles.coinImage}
            />
          </View>
        </View>

        <View style={styles.cartItemContainer}>
          <Text style={styles.selectAddedText}>Select Added</Text>
          <View style={styles.dashedBorder} />
          <FlatList
            data={AddedItem}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.cartItem}>
                <View style={styles.itemNameContainer}>
                  <Text style={styles.itemNameText}>{item.name}</Text>
                  <I />
                </View>
                <View style={styles.durationContainer}>
                  <Text style={styles.durationText}>{item.duration}</Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity>
                    <Text style={styles.quantityButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity>
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <FlatList
          data={FrAdded}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.additionalItemContainer}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={styles.additionalItemImage}
              />
              <View style={styles.additionalItemDetails}>
                <Text style={styles.additionalItemName}>{item.name}</Text>
                <Text style={styles.additionalItemPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonLabel}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        <View style={styles.coupenOfferContainer}>
          <Text style={styles.coupenOffertxt}>Coupons & Offers</Text>
          <View style={styles.dashedBorder2} />
          <View style={styles.offerRow}>
            <Offer />
            <View style={styles.offerDetails}>
              <Text style={styles.offerTitle}>
                Save ₹100 more on this order
              </Text>
              <Text style={styles.offerCode}>Code: EDU100</Text>
            </View>
            <View style={styles.applyButton}>
              <Text style={styles.applyText}>Apply</Text>
            </View>
          </View>
          <View style={styles.dashedBorder} />
          <Text style={[styles.coupenOffertxt, styles.smallText]}>
            3 Offers
          </Text>
        </View>
        <View style={styles.coupenOfferContainer}>
          <Text style={styles.coupenOffertxt}>Your & Wallet</Text>
          <View style={styles.dashedBorder} />
          <View style={styles.walletRow}>
            <Wallet />
            <View style={styles.walletDetails}>
              <Text style={styles.walletTitle}>Wallet</Text>
              <Text style={styles.walletAmount}>5000</Text>
            </View>
            <View style={styles.applyButton}>
              <Text style={styles.applyText}>Apply</Text>
            </View>
          </View>
          <View style={styles.dashedBorder} />
          <Text style={[styles.coupenOffertxt, styles.smallText]}>
            Go to Wallet
          </Text>
        </View>

        <View style={styles.paymentContainer}>
        <Text style={styles.paymentHeaderText}>Payment summary</Text>
        <View style={styles.dashedBorder} />
        <View style={styles.row}>
          <Text style={[styles.label,{fontWeight:'700'}]}>Subtotal</Text>
          <Text style={[styles.value,{fontWeight:'700'}]}>£1372</Text>
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
          <Text style={[styles.label,{fontWeight:'700'}]}>Totol</Text>
          <Text style={[styles.value,{fontWeight:'700'}]}>£1372</Text>
        </View>
      </View>

     
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentHeaderText}>Add Suggestions</Text>
        <View style={styles.dashedBorder} />
  <View style={{height:hp(10),borderWidth:1,borderRadius:10,margin:10,borderColor:'grey'}}>
<TextInput 

placeholder='type here..'
/>
  </View>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentHeaderText}>Tip your service provider</Text>
        <View style={styles.dashedBorder} />
  <View style={{
    flexDirection:'row',
   borderRadius:10,margin:10,}}>
<FlatList 
data={tip}
showsHorizontalScrollIndicator={false}
horizontal
renderItem={({item})=>(
    <View style={{justifyContent:'center',
    marginLeft:10,height:35,borderRadius:15,
    alignItems:'center',borderWidth:1,paddingHorizontal:20}}>
       <Text>{item.amount}</Text>
       
        </View>
)}
/>


  </View>

  <View style={{flexDirection:'row',alignItems:'center'}}>
   
  <CheckBox
    style={{padding: 10}}
    onClick={()=>{
      
    }}
    isChecked={false}

/>
    <Text style={{color:'#000',fontSize:12,fontWeight:'500'}}>Add this tip automatically to future ordrs</Text>
   
</View>
<View>
<Text style={{color:'#777777',fontSize:12,fontWeight:'500'}}>Your kindness means a lot! 100% of your tip will go directly to your service provider.</Text>
</View>
      </View>
      <TouchableOpacity
          style={styles.bookNowButton}
          onPress={() => {
            navigation.navigate(ScreenNameEnum.BOTTOM_TAB)
          }}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      <View style={{height:hp(10),}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    bookNowButton: {
        marginHorizontal: 10,
        height: 50,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#391F5C',
      },
      bookNowText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
      },
    paymentContainer: {
        marginBottom: 20,
        paddingHorizontal:15,
        backgroundColor:'#fff',
        marginTop:10,marginHorizontal:10,borderRadius:10,
        paddingVertical:10
      },
      paymentHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color:'#000',
        marginTop:10,
        alignSelf:'center'
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
    justifyContent: 'space-between',
  },
  offerDetails: {
    paddingHorizontal: 20,
    marginTop: 10,
    width: '85%', // Adjusted to accommodate longer text
  },
  offerTitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: '800',
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
    height: hp(17),
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
const tip =[

    {
        amount:'£20'
    },
    {
        amount:'£40'
    },
    {
        amount:'£0'
    },
    {
        amount:'Custom'
    },
]
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
