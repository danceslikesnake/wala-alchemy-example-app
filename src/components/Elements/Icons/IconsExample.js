import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView, Linking} from 'react-native';
import {
  Container,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS,
  Subheadline,
  Divider,
  Icons,
  Caption,
  Spacer
} from 'alchemyUI';

export default class IconsExample extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderIcon = (iconName, idx) => {
    return(
      <Container key={idx} style={localStyles.iconWrapper} alignItems={'center'} justifyContent={'center'}>
        <Icons iconName={iconName} iconSize={24} />
        <Spacer dense />
        <Caption dense>{iconName}</Caption>
      </Container>
    );
  };

  openUrl = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.warn("Don't know how to open URI: " + url);
      }
    });
  };

  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <ScrollView>
          <Subheadline style={localStyles.subhead} color={AUI_COLORS.ScampiPurple.shade1} alignCenter fontFamily={'Poppins'}>Wala Icons</Subheadline>
          <Divider />
          <Container style={{flexWrap: 'wrap'}} actAsRow>
            {iconList.map((icon, idx) => {
              return this.renderIcon(icon, idx);
            })}
          </Container>
          <Divider size={'large'} />
          <Subheadline style={localStyles.subhead} color={AUI_COLORS.ScampiPurple.shade1} alignCenter fontFamily={'Poppins'}>Other Icon Sets</Subheadline>
          <TouchableNativeFeedback onPress={() => {this.openUrl('https://fontawesome.com/icons')}}>
            <Container style={[AUI_LAYOUT.presets.card, {paddingHorizontal: AUI_CONSTANTS.gridBase}]} variation={'card'}>
              <Spacer />
              <Container actAsRow alignItems={'center'}>
                <Container isFlex>
                  <Subheadline color={AUI_COLORS.Charcoal.hex}>Font Awesome 5</Subheadline>
                  <Caption>Solid, Regular, Light, and Brands supported</Caption>
                </Container>
                <Icons iconName={'font-awesome'} iconSet={'font-awesome-brands'} iconColor={AUI_COLORS.WalaTeal.hex} />
              </Container>
              <Spacer />
            </Container>
          </TouchableNativeFeedback>
          <Spacer />
          <TouchableNativeFeedback onPress={() => {this.openUrl('https://material.io/tools/icons/?style=baseline')}}>
            <Container style={[AUI_LAYOUT.presets.card, {paddingHorizontal: AUI_CONSTANTS.gridBase}]} variation={'card'}>
              <Spacer />
              <Container actAsRow alignItems={'center'}>
                <Container isFlex>
                  <Subheadline color={AUI_COLORS.Charcoal.hex}>Material Design Icons</Subheadline>
                  <Caption>As of version 3.0.1</Caption>
                </Container>
                <Icons iconName={'google'} iconSet={'font-awesome-brands'} iconColor={AUI_COLORS.WalaTeal.hex} />
              </Container>
              <Spacer />
            </Container>
          </TouchableNativeFeedback>
          <Spacer />
        </ScrollView>
      </Container>
    );
  }
}

IconsExample.defaultProps = {};

IconsExample.propTypes = {};

const localStyles = StyleSheet.create({
  subhead: {
    lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)
  },
  iconWrapper: {
    width: AUI_CONSTANTS.deviceWidth / 3,
    height: AUI_FUNCTIONS.gridBaseMultiplier(6),
  }
});

const iconList = [
  'account-add',
  'accounts',
  'ask-dala',
  'atm-finder',
  'birthday',
  'connection-add',
  'connections',
  'dala-icon',
  'deposit-dala',
  'globe',
  'help-center-notifications',
  'help-center',
  'market-open',
  'market',
  'qr-code',
  'qr-scan',
  'selfie-no-smile',
  'selfie-smile',
  'send-dala',
  'soft-arrow-left',
  'soft-arrow-right',
  'timeline',
  'transfer-money',
  'ussd',
  'verify-identity',
  'withdraw-dala',
];