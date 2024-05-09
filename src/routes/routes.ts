import TabNavigator from "../navigators/TabNavigator";
import Account from "../screens/BottomTab/Account";
import Home from "../screens/BottomTab/Home";
import MyBooking from "../screens/BottomTab/MyBooking";
import Wallet from "../screens/BottomTab/Wallet";
import NearByYou from "../screens/Features/NearByYou";
import SalonatHome from "../screens/Features/SalonatHome";
import Search from "../screens/Features/Search";
import SelectSpatime from "../screens/Features/SelectSpatime";
import SelectStaff from "../screens/Features/SelectStaff";
import SpaDetails from "../screens/Features/SpaDetails";
import cart from "../screens/Features/cart";
import SplashScreen from "../screens/SplashScreen";
import SplashScreen2 from "../screens/SplashScreen2";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import ValidOtp from "../screens/auth/ValidOtp";
import ScreenNameEnum from "./screenName.enum";

const _routes = {
  REGISTRATION_ROUTE: [
    {
      name: ScreenNameEnum.SPLASH_SCREEN,
      Component:SplashScreen,
    },
    {
      name: ScreenNameEnum.SPLASH_SCREEN2,
      Component:SplashScreen2,
    },
    
    {
      name: ScreenNameEnum.LOGIN_SCREEN,
      Component:Login,
    },
    {
      name: ScreenNameEnum.OTP_SCREEN,
      Component:ValidOtp,
    },
    {
      name: ScreenNameEnum.SIGNUP_SCREEN,
      Component:Signup,
    },
    {
      name: ScreenNameEnum.BOTTOM_TAB,
      Component:TabNavigator,
    },
    {
      name: ScreenNameEnum.NEARBY_YOU,
      Component:NearByYou,
    },
    {
      name: ScreenNameEnum.SEARCH_SCREEN,
      Component:Search,
    },
    {
      name: ScreenNameEnum.SPA_DETAILS,
      Component:SpaDetails,
    },
    {
      name: ScreenNameEnum.SELECTED_STAFF,
      Component:SelectStaff,
    },
    {
      name: ScreenNameEnum.SELECTED_SPATIME,
      Component:SelectSpatime,
    },
    {
      name: ScreenNameEnum.CART_SCREEN,
      Component:cart,
    },
    {
      name: ScreenNameEnum.SALONAT_HOME,
      Component:SalonatHome,
    },
    
  ],
  HOME_ROUTE: [
   
 

    
    
   ],
  // PROFILE_ROUTE: [
 
   
   
    
//  ],


  BOTTOMTAB_ROUTE:[
    {
      name: ScreenNameEnum.HOME_SCREEN,
      Component:Home,
      logo:require('../assets/Cropping/homeInactive.png'),
      lable:'Home',
      logo2:require('../assets/Cropping/Home_active3x.png'),
    },
   
    
    {
      name: ScreenNameEnum.MY_BOOKING,
      Component:MyBooking,
      logo:require('../assets/Cropping/MyBookings3x.png'),
      logo2:require('../assets/Cropping/MyBooking3x.png'),
      lable:'Booking'
    },
    {
      name: ScreenNameEnum.WALLET_SCREEN,
      Component:Wallet,
      logo:require('../assets/Cropping/Wallet3x.png'),
      logo2:require('../assets/Cropping/Wallet_Active3x.png'),
      lable:'Wallet'
    },
    {
      name: ScreenNameEnum.ACCOUNT_SCREEN,
      Component:Account,
      logo:require('../assets/Cropping/accountIn.png'),
      logo2:require('../assets/Cropping/Account3x.png'),
      lable:'Account'
    },

 
  ]

};

export default _routes;
