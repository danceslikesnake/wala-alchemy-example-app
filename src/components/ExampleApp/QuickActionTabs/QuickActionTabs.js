import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView, BackHandler} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ViewOverflow from 'react-native-view-overflow';
import {
  Container,
  Headline,
  GradientContainer,
  Icons,
  Logomark,
  Caption,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS
} from 'alchemyUI';
import QuickActionTab from "./QuickActionTab";
import QuickActionsModal from '../QuickActions/QuickActionsModal';

const tabWidth = AUI_CONSTANTS.deviceWidth / 5;

export default class QuickActionTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeState: {
        dashboard: true,
        earn: false,
        connections: false,
        market: false,
      },
      indicatorLeft: 0,
      quickActionsVisible: false,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    if(this.state.indicatorLeft > 0 && this.props.navigation.state.index > 0) {
      this.setState({
        activeState: {
          dashboard: true,
          earn: false,
          connections: false,
          market: false,
        },
        indicatorLeft: 0,
      });
    }
  };

  mainButtonPress = () => {
    this.quickActionModal._openQuickActionsOverlay();
  };

  renderTab = (key, iconName, label, isActive, indicatorPos, navigateTo) => {
    const { navigation } = this.props;
    return (
      <QuickActionTab
        key={key}
        iconName={iconName}
        label={label}
        onPress={() => {
          let reset = {};
          for (let active in this.state.activeState) {
            reset[active] = active === key;
          }
          this.setState({
            activeState: reset,
            indicatorLeft: indicatorPos,
          });
          navigation.navigate(navigateTo);
        }}
        isActive={isActive}
      />
    );
  };

  render() {
    const indicatorWidth = tabWidth;
    return (
      <ViewOverflow style={{position: 'relative'}}>
        <GradientContainer
          colors={[
            AUI_COLORS.ScampiPurple.getRgba(0),
            AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade1, 0.2),
          ]}
          style={localStyles.dropShadow}
          gradientDirection={'vertical'}
        />
        <ViewOverflow style={localStyles.tabBar}>
          <Animatable.View
            ref={indicator => (this.indicator = indicator)}
            transition="left"
            style={[localStyles.indicator, { left: this.state.indicatorLeft }]}
          />
          {this.renderTab(
            'dashboard',
            'timeline',
            'FEED',
            this.state.activeState.dashboard,
            0,
            'AppFeed'
          )}
          {this.renderTab(
            'earn',
            'dala-icon',
            'EARN',
            this.state.activeState.earn,
            indicatorWidth,
            'AppEarn'
          )}
          <Container isFlex />
          <TouchableNativeFeedback key={'QuickActions'} onPress={this.mainButtonPress}>
            <GradientContainer
              style={localStyles.quickActionsBtn}
              colors={[AUI_COLORS.WalaTeal.hex, AUI_COLORS.ScampiPurple.hex]}
              justifyContent={'center'}
              alignItems={'center'}>
              <Logomark imgHeight={24} variation={'logomarkWhite'} />
            </GradientContainer>
          </TouchableNativeFeedback>
          {this.renderTab(
            'connections',
            'connections',
            'CONNECT',
            this.state.activeState.connections,
            indicatorWidth * 3,
            'AppConnect'
          )}
          {this.renderTab(
            'market',
            'market',
            'MARKET',
            this.state.activeState.market,
            indicatorWidth * 4,
            'AppMarket'
          )}
        </ViewOverflow>
        <QuickActionsModal
          ref={quickActionModal => this.quickActionModal = quickActionModal}
          {...this.props}
        />
      </ViewOverflow>
    );
  }
}

const localStyles = StyleSheet.create({
  dropShadow: {
    height: 8,
    position: 'absolute',
    top: -8,
    left: 0,
    right: 0,
  },
  tabBar: {
    backgroundColor: 'white',
    height: AUI_FUNCTIONS.gridBaseMultiplier(4),
    position: 'relative',
    flexDirection: 'row',
  },
  indicator: {
    height: 4,
    backgroundColor: AUI_COLORS.WalaTeal.hex,
    position: 'absolute',
    bottom: 0,
    width: tabWidth,
  },
  quickActionsBtn: {
    width: tabWidth,
    height: tabWidth,
    borderWidth: 2,
    borderColor: AUI_COLORS.WalaTeal.tint4,
    borderRadius: tabWidth / 2,
    position: 'absolute',
    bottom: 0 - (tabWidth - 52) / 2,
    left: '50%',
    marginLeft: 0 - tabWidth / 2,
    zIndex: 9999,
    elevation: 4,
  },
});
