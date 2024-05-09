import React from 'react';
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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../configs/Header';
import Down from '../../assets/svg/down.svg';
import Right from '../../assets/svg/RightArrow.svg';
import Heart from '../../assets/svg/Heart.svg';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';

export default function SelectSpatime() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.firstDiv}>
          <View style={styles.arrowContainer}>
            <Image
              source={require('../../assets/Cropping/arrow-left2x.png')}
              style={styles.arrowIcon}
            />
          </View>
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationText}>Spa, B Block Road,Noida</Text>
          </View>
          <View style={styles.timeIconContainer}>
            <Image
              resizeMode='contain'
              source={require('../../assets/Cropping/Stime.png')}
              style={styles.timeIcon}
            />
          </View>
        </View>

        <View style={styles.timeSelectionContainer}>
          <Text style={styles.selectTimeText}>Select time</Text>
          <View style={styles.separator} />
          <FlatList
            data={calander}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.calendarItem}>
                <Text style={styles.calendarDay}>{item.day}</Text>
                <Text style={styles.calendarDate}>{item.date}</Text>
              </View>
            )}
          />
          <FlatList
            data={Time}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={styles.timeSlot}>
                <Text style={styles.timeText}>{item.Time}</Text>
                <View>
                  {index === 0 ? (
                    <Image
                      style={styles.nextButton}
                      source={require('../../assets/Cropping/Next_BT3x.png')}
                    />
                  ) : (
                    <Image
                      style={styles.button}
                      source={require('../../assets/Cropping/button3x.png')}
                    />
                  )}
                </View>
              </View>
            )}
          />
        </View>

        <TouchableOpacity
          style={styles.bookNowButton}
          onPress={() => {
            navigation.navigate(ScreenNameEnum.CART_SCREEN)
          }}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E3E9',
  },
  firstDiv: {
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
  arrowContainer: {},
  arrowIcon: {
    height: 20,
    width: 20,
  },
  locationTextContainer: {
    width: '80%',
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  timeIconContainer: {},
  timeIcon: {
    height: 20,
    width: 20,
  },
  timeSelectionContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  selectTimeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    alignSelf: 'center',
  },
  separator: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
    marginVertical: 10,
    borderColor: '#777',
  },
  calendarItem: {
    borderWidth: 1,
    borderColor: 'grey',
    height: hp(7),
    marginLeft: 10,
    width: wp(15),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarDay: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  calendarDate: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  timeSlot: {
    marginVertical: 2,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginLeft: 10,
  },
  nextButton: {
    height: 30,
    width: 30,
  },
  button: {
    height: 30,
    width: 30,
  },
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
  bottomSpace: {
    height: hp(5),
  },
});

const calander = [
  {
    day: 'Thu',
    date: '04',
  },
  {
    day: 'Fri',
    date: '04',
  },
  {
    day: 'Sat',
    date: '04',
  },
  {
    day: 'Sun',
    date: '04',
  },
  {
    day: 'Mon',
    date: '04',
  },
  {
    day: 'Tue',
    date: '04',
  },
  {
    day: 'Wed',
    date: '04',
  },
];
const Time = [
  {
    Time: '10:00am',
  },
  {
    Time: '10:00am',
  },
  {
    Time: '10:00am',
  },
  {
    Time: '10:00am',
  },
];
