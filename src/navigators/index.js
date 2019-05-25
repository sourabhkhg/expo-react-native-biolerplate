import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import { AuthScreen, HomeScreen } from "../screens";

// const Home = createStackNavigator(
//   {
//     home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         headerVisible: false
//       }
//     }
//   },
//   {
//     headerMode: "none",
//     navigationOptions: {
//       headerVisible: false
//     }
//   }
// );

// const Main = createBottomTabNavigator(
//   {
//     home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarVisible: false
//       }
//     },
//     barcode: {
//       screen: Barcode,
//       navigationOptions: {
//         tabBarVisible: false
//       }
//     },
//     profile: {
//       screen: Profile,
//       navigationOptions: {
//         tabBarVisible: false
//       }
//     },
//     allLocation: {
//       screen: AllLocationScreen,
//       navigationOptions: {
//         tabBarVisible: false
//       }
//     },
//     wishlist: {
//       screen: Wishlist,
//       navigationOptions: {
//         tabBarVisible: false
//       }
//     }
//   },
//   {
//     navigationOptions: {
//       tabBarVisible: false
//     }
//   }
// );
const Navigation = createStackNavigator(
  {
    welcome: {
      screen: HomeScreen,
      navigationOptions: {
        headerVisible: false
      }
    },
    auth: {
      screen: AuthScreen,
      navigationOptions: {
        headerVisible: false
      }
    }
    // register: {
    //   screen: RegisterScreen,
    //   navigationOptions: {
    //     headerVisible: false
    //   }
    // },
    // otp: {
    //   screen: OtpScreen,
    //   navigationOptions: {
    //     headerVisible: false
    //   }
    // },
    // home: {
    //   screen: Main,
    //   navigationOptions: {
    //     headerVisible: false
    //   }
    // }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
  // {
  //     initialRouteName: welcome,
  // }
);
export default createAppContainer(Navigation);
