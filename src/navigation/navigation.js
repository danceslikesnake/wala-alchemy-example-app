import React from "react";
import {Dimensions} from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import {AUI_COLORS, AUI_FUNCTIONS, AUI_TYPOGRAPHY, Bubble} from "alchemyUI";

const {width, height} = Dimensions.get('window');

// HOME
import Home from "../components/Home/Home";
import HomeNav from "../components/Home/HomeNav";

// LISTVIEW TEMPLATE
import ListView from "../components/ListView/ListView";

// ACCOUNTS
import AccountSelectorExample from "../components/Compounds/Accounts/AccountSelectorExample/AccountSelectorExample";
import AccountsHomeCardExample from '../components/Compounds/Accounts/AccountsHomeCardExample/AccountsHomeCardExample';

// CONNECTIONS
import ConnectionUserItemExample
  from '../components/Compounds/Connections/ConnectionUserItemExample/ConnectionUserItemExample';

// EARN
import EarnOpportunityCardExample
  from '../components/Compounds/Earn/EarnOpportunityCardExample/EarnOpportunityCardExample';
import EarnPayoutMessageExample from '../components/Compounds/Earn/EarnPayoutMessageExample/EarnPayoutMessageExample';

// MARKET
import MarketTransactionItemExample
  from '../components/Compounds/Market/MarketTransactionItemExample/MarketTransactionItemExample'

// TIMELINE
import TimelineFeedCardExample from "../components/Compounds/Timeline/TimelineFeedCardExample/TimelineFeedCardExample";
import TimelineFeedLikeActionExample
  from "../components/Compounds/Timeline/TimelineFeedLikeActionExample/TimelineFeedLikeActionExample";

// ACTIONS
import ActionCardExample from "../components/Compounds/Universal/Actions/ActionCardExample/ActionCardExample";
import BottomSheetExample from "../components/Compounds/Universal/Actions/BottomSheetExample/BottomSheetExample";
import PopoverMenuExample from "../components/Compounds/Universal/Actions/PopoverMenuExample/PopoverMenuExample";
import TileActionsExample from "../components/Compounds/Universal/Actions/TileActionsExample/TileActionsExample";

// CHOICES
import FeedbackExample from "../components/Compounds/Universal/Choices/FeedbackExample/FeedbackExample";
import RadioButtonGroupExample
  from "../components/Compounds/Universal/Choices/RadioButtonGroupExample/RadioButtonGroupExample";

// HEADERS
import CategoryHeaderExample
  from "../components/Compounds/Universal/Headers/CategoryHeaderExample/CategoryHeaderExample";

// INPUTS
import CountryInputExample from "../components/Compounds/Universal/Inputs/CountryInputExample/CountryInputExample";
import CurrencyInputExample from "../components/Compounds/Universal/Inputs/CurrencyInputExample/CurrencyInputExample";
import DateTextFieldExample from "../components/Compounds/Universal/Inputs/DateTextFieldExample/DateTextFieldExample";
import DrawerInputExample from "../components/Compounds/Universal/Inputs/DrawerInputExample/DrawerInputExample";
import DropdownMenuExample from "../components/Compounds/Universal/Inputs/DropdownMenuExample/DropdownMenuExample";
import PhoneInputExample from "../components/Compounds/Universal/Inputs/PhoneInputExample/PhoneInputExample";
import TextFieldExample from "../components/Compounds/Universal/Inputs/TextFieldExample/TextFieldExample";

// MESSAGING
import BannerExample from "../components/Compounds/Universal/Messaging/BannerExample/BannerExample";
import BubbleExample from "../components/Compounds/Universal/Messaging/BubbleExample/BubbleExample";
import BusyOverlayExample from "../components/Compounds/Universal/Messaging/BusyOverlayExample/BusyOverlayExample";
import DialogExample from "../components/Compounds/Universal/Messaging/DialogExample/DialogExample";

// PROGRESS
import LinearProgressExample
  from "../components/Compounds/Universal/Progress/LinearProgressExample/LinearProgressExample";
import StepProgressExample from "../components/Compounds/Universal/Progress/StepProgressExample/StepProgressExample";

// ELEMENTS
import Colors from "../components/Elements/Colors/Colors";
import TextColors from "../components/Elements/Colors/TextColors";
import Content from "../components/Elements/Content/Content";
import IconsExample from "../components/Elements/Icons/IconsExample";
import Layout from "../components/Elements/Layout/Layout";
import Logos from "../components/Elements/Logos/Logos";

// TYPOGRAPHY
import Typography from "../components/Elements/Typography/Typography";
import TypographyDense from "../components/Elements/Typography/TypographyDense";

// EXAMPLE APP
import Feed from "../components/ExampleApp/Feed/Feed";
import Earn from "../components/ExampleApp/Earn/Earn";
import Connect from "../components/ExampleApp/Connect/Connect";
import Market from "../components/ExampleApp/Market/Market";
import MeButton from '../components/ExampleApp/MainNav/MeButton';
import RightButtons from "../components/ExampleApp/MainNav/RightButtons";
import QuickActionTabs from "../components/ExampleApp/QuickActionTabs/QuickActionTabs";
import Profile from "../components/ExampleApp/Connect/Profile";
import SendMoney from "../components/ExampleApp/Connect/SendMoney";
import MarketRecent from "../components/ExampleApp/Market/MarketRecent";
import MarketBrowse from "../components/ExampleApp/Market/MarketBrowse";
import Me from "../components/ExampleApp/Me/Me";
import BuyDala from "../components/ExampleApp/BuyDala/BuyDala";

const tabHeader = {
  headerTitleStyle: {
    fontFamily: AUI_TYPOGRAPHY.Poppins.medium,
    fontStyle: 'normal',
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
  },
  headerStyle: {
    elevation: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.28)',
    height: AUI_FUNCTIONS.gridBaseMultiplier(4)
  },
  headerLeft: (props) => (<MeButton {...props.scene.descriptor} />),
  headerRight: <RightButtons />,
  headerTransparent: true
};

const FeedStack = createStackNavigator(
  {
    FeedScreen: {
      screen: Feed
    }
  },
  {
    defaultNavigationOptions: {...tabHeader, title: 'Feed'}
  }
);

const EarnStack = createStackNavigator(
  {
    EarnScreen: {
      screen: Earn
    }
  },
  {
    defaultNavigationOptions: {...tabHeader, title: 'Earn'}
  }
);

const ConnectStack = createStackNavigator(
  {
    ConnectScreen: {
      screen: Connect
    }
  },
  {
    defaultNavigationOptions: {...tabHeader, title: 'Connect'}
  }
);

const MarketTabs = createMaterialTopTabNavigator(
  {
    MarketScreen: {
      screen: Market,
      navigationOptions: () => ({
        title: 'Saved'
      })
    },
    MarketRecentScreen: {
      screen: MarketRecent,
      navigationOptions: () => ({
        title: 'Recent'
      })
    }
  },
  {
    initialRouteName: 'MarketScreen',
    tabBarPosition: 'top',
    lazy: true,
    swipeEnabled: false,
    animationEnabled: true,
    optimizationsEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
      tabStyle: {
        height: AUI_FUNCTIONS.gridBaseMultiplier(3),
      },
      indicatorStyle: {
        backgroundColor: 'white'
      },
      labelStyle: {
        fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
        fontSize: AUI_TYPOGRAPHY.typeScale.size12
      },
      style: {
        height: AUI_FUNCTIONS.gridBaseMultiplier(3),
        backgroundColor: 'transparent',
        position: 'absolute',
        top: AUI_FUNCTIONS.gridBaseMultiplier(4),
        left: 0,
        right: 0,
        zIndex: 100
      }
    }
  }
);

const MarketStack = createStackNavigator(
  {
    MarketScreenTabs: {
      screen: MarketTabs
    }
  },
  {
    defaultNavigationOptions: {...tabHeader, title: 'Market'}
  }
);

const ExampleAppRoutes = createBottomTabNavigator(
  {
    AppFeed: {
      screen: FeedStack
    },
    AppEarn: {
      screen: EarnStack
    },
    AppConnect: {
      screen: ConnectStack
    },
    AppMarket: {
      screen: MarketStack
    }
  },
  {
    tabBarComponent: props => <QuickActionTabs {...props} />,
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    initialRouteName: 'AppFeed',
    initialLayout: {height, width}
  }
);

const ColorTabs = createMaterialTopTabNavigator(
  {
    BrandColors: {
      screen: Colors,
      navigationOptions: () => ({
        title: 'Brand Colors'
      })
    },
    TextColors: {
      screen: TextColors,
      navigationOptions: () => ({
        title: 'Text Colors'
      })
    }
  },
  {
    initialRouteName: 'BrandColors',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: AUI_COLORS.WalaTeal.tint3,
      tabStyle: {
        height: AUI_FUNCTIONS.gridBaseMultiplier(3),
      },
      indicatorStyle: {
        backgroundColor: AUI_COLORS.WalaTeal.tint4
      },
      labelStyle: {
        fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
        fontSize: AUI_TYPOGRAPHY.typeScale.size12
      },
      style: {
        backgroundColor: AUI_COLORS.WalaTeal.hex
      }
    }
  }
);

const TypographyTabs = createMaterialTopTabNavigator(
  {
    TypographyDefault: {
      screen: Typography,
      navigationOptions: () => ({
        title: 'Default'
      })
    },
    TypographyDense: {
      screen: TypographyDense,
      navigationOptions: () => ({
        title: 'Dense'
      })
    }
  },
  {
    initialRouteName: 'TypographyDefault',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: AUI_COLORS.WalaTeal.tint3,
      tabStyle: {
        height: AUI_FUNCTIONS.gridBaseMultiplier(3),
      },
      indicatorStyle: {
        backgroundColor: AUI_COLORS.WalaTeal.tint4
      },
      labelStyle: {
        fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
        fontSize: AUI_TYPOGRAPHY.typeScale.size12
      },
      style: {
        backgroundColor: AUI_COLORS.WalaTeal.hex
      }
    }
  }
);

export const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: props => <HomeNav {...navigation} />
      })
    },
    Colors: {
      screen: ColorTabs,
      navigationOptions: () => ({
        title: 'Colors',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: AUI_COLORS.WalaTeal.hex
        },
      })
    },
    Content: {
      screen: Content,
      navigationOptions: () => ({
        title: 'Content'
      })
    },
    Icons: {
      screen: IconsExample,
      navigationOptions: () => ({
        title: 'Icons'
      })
    },
    Layout: {
      screen: Layout,
      navigationOptions: () => ({
        title: 'Layout'
      })
    },
    Logos: {
      screen: Logos,
      navigationOptions: () => ({
        title: 'Logos'
      })
    },
    Typography: {
      screen: TypographyTabs,
      navigationOptions: () => ({
        title: 'Typography',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: AUI_COLORS.WalaTeal.hex
        },
      })
    },
    Accounts: {
      screen: ListView,
      params: {listKey: 'accounts'},
      navigationOptions: () => ({
        title: 'Accounts'
      })
    },
    AccountSelector: {
      screen: AccountSelectorExample,
      navigationOptions: () => ({
        title: 'Account Selector'
      })
    },
    AccountsHomeCard: {
      screen: AccountsHomeCardExample,
      navigationOptions: () => ({
        title: 'Accounts Home Card'
      })
    },
    Connections: {
      screen: ListView,
      params: {listKey: 'connections'},
      navigationOptions: () => ({
        title: 'Connections'
      })
    },
    ConnectionUserItem: {
      screen: ConnectionUserItemExample,
      navigationOptions: () => ({
        title: 'Connection User Item'
      })
    },
    Earn: {
      screen: ListView,
      params: {listKey: 'earn'},
      navigationOptions: () => ({
        title: 'Earn'
      })
    },
    EarnOpportunityCard: {
      screen: EarnOpportunityCardExample,
      navigationOptions: () => ({
        title: 'Earn Opportunity Card'
      })
    },
    EarnPayoutMessage: {
      screen: EarnPayoutMessageExample,
      navigationOptions: () => ({
        title: 'Earn Payout Message'
      })
    },
    Market: {
      screen: ListView,
      params: {listKey: 'market'},
      navigationOptions: () => ({
        title: 'Market'
      })
    },
    MarketTransactionItem: {
      screen: MarketTransactionItemExample,
      navigationOptions: () => ({
        title: 'Market Transaction Item'
      })
    },
    Timeline: {
      screen: ListView,
      params: {listKey: 'timeline'},
      navigationOptions: () => ({
        title: 'Timeline'
      })
    },
    TimelineFeedCard: {
      screen: TimelineFeedCardExample,
      navigationOptions: () => ({
        title: 'Timeline Feed Card'
      })
    },
    TimelineFeedLikeAction: {
      screen: TimelineFeedLikeActionExample,
      navigationOptions: () => ({
        title: 'Timeline Feed Like Action'
      })
    },
    Universal: {
      screen: ListView,
      params: {listKey: 'universal'},
      navigationOptions: () => ({
        title: 'Universal'
      })
    },
    ActionCard: {
      screen: ActionCardExample,
      navigationOptions: () => ({
        title: 'Action Card'
      })
    },
    BottomSheet: {
      screen: BottomSheetExample,
      navigationOptions: () => ({
        title: 'Bottom Sheet'
      })
    },
    PopoverMenu: {
      screen: PopoverMenuExample,
      navigationOptions: () => ({
        title: 'Popover Menu'
      })
    },
    TileActions: {
      screen: TileActionsExample,
      navigationOptions: () => ({
        title: 'Tile Actions'
      })
    },
    Feedback: {
      screen: FeedbackExample,
      navigationOptions: () => ({
        title: 'Feedback'
      })
    },
    RadioButtonGroup: {
      screen: RadioButtonGroupExample,
      navigationOptions: () => ({
        title: 'Radio Button Group'
      })
    },
    CategoryHeader: {
      screen: CategoryHeaderExample,
      navigationOptions: () => ({
        title: 'Category Header'
      })
    },
    CountryInput: {
      screen: CountryInputExample,
      navigationOptions: () => ({
        title: 'Country Input'
      })
    },
    CurrencyInput: {
      screen: CurrencyInputExample,
      navigationOptions: () => ({
        title: 'Currency Input'
      })
    },
    DateTextField: {
      screen: DateTextFieldExample,
      navigationOptions: () => ({
        title: 'Date Text Field'
      })
    },
    DropdownMenu: {
      screen: DropdownMenuExample,
      navigationOptions: () => ({
        title: 'Dropdown Menu'
      })
    },
    DrawerInput: {
      screen: DrawerInputExample,
      navigationOptions: () => ({
        title: 'Drawer Input'
      })
    },
    PhoneInput: {
      screen: PhoneInputExample,
      navigationOptions: () => ({
        title: 'Phone Input'
      })
    },
    TextField: {
      screen: TextFieldExample,
      navigationOptions: () => ({
        title: 'Text Field'
      })
    },
    Banner: {
      screen: BannerExample,
      navigationOptions: () => ({
        title: 'Banner'
      })
    },
    Bubble: {
      screen: BubbleExample,
      navigationOptions: () => ({
        title: 'Bubble'
      })
    },
    BusyOverlay: {
      screen: BusyOverlayExample,
      navigationOptions: () => ({
        title: 'Busy Overlay'
      })
    },
    Dialog: {
      screen: DialogExample,
      navigationOptions: () => ({
        title: 'Dialog'
      })
    },
    LinearProgress: {
      screen: LinearProgressExample,
      navigationOptions: () => ({
        title: 'Linear Progress'
      })
    },
    StepProgress: {
      screen: StepProgressExample,
      navigationOptions: () => ({
        title: 'Step Progress'
      })
    },
    ExampleApp: {
      screen: ExampleAppRoutes,
      navigationOptions: {header: null}
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        title: 'Profile',
      })
    },
    SendMoney: {
      screen: SendMoney,
      navigationOptions: () => ({
        title: 'Send Money',
      })
    },
    BrowseMarket: {
      screen: MarketBrowse,
      navigationOptions: () => ({
        title: 'Wala Market'
      })
    },
    Me: {
      screen: Me,
      navigationOptions: () => ({
        title: 'Me'
      })
    },
    BuyDala: {
      screen: BuyDala,
      navigationOptions: () => ({
        title: 'Buy Dala'
      })
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: AUI_COLORS.WalaTeal.hex,
        height: AUI_FUNCTIONS.gridBaseMultiplier(4),
      },
      headerTitleStyle: {
        fontFamily: AUI_TYPOGRAPHY.Poppins.medium,
        fontStyle: 'normal',
        fontSize: 16,
        color: 'white',
        fontWeight: '300',
      }
    }
  }
);