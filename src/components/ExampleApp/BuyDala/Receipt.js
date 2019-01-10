import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView, Image} from 'react-native';
import {
  Container,
  Headline,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, Spacer, Icons, GradientContainer, Divider, Caption, SmallDisplay, CallToActionButton, Avatar
} from 'alchemyUI';

import {banks} from './banks';

export default class Receipt extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  numberWithCommas = (x) =>  {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    let bank = banks[this.props.bankId];

    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <Spacer />
        <Headline fontFamily={'Poppins'} alignCenter dense color={AUI_COLORS.ScampiPurple.shade1}>
          Purchase Successful
        </Headline>
        <Spacer dense />
        <Icons
          iconName={'check-circle'}
          iconSize={AUI_FUNCTIONS.gridBaseMultiplier(4)}
          iconSet={'font-awesome'}
          iconColor={AUI_COLORS.WalaTeal.hex}
          containerStyles={{ alignSelf: 'center' }}
        />
        <Spacer />
        <GradientContainer
          variation={'card'}
          colors={[AUI_COLORS.WalaTeal.tint1, AUI_COLORS.ScampiPurple.shade1]}
          style={[localStyles.gradientWrapper, AUI_LAYOUT.roundCorners]}>
          <Container style={[localStyles.receiptCard, AUI_LAYOUT.roundCorners]}>
            <Container
              style={localStyles.receiptHeadline}
              actAsRow
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Avatar size={'tiny'} variation={'image'} imageSource={{uri: bank.profileImage}} />
              <Headline color={AUI_COLORS.Charcoal.hex} dense>{'đ ' + this.numberWithCommas((this.props.amountToBuy + bank.fee).toFixed(2))}</Headline>
            </Container>
            <Container style={localStyles.receiptDivider} />
            <Container actAsRow justifyContent={'space-between'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(3, true)}} alignItems={'center'}>
              <Caption>Amount</Caption>
              <Caption color={AUI_COLORS.Charcoal.hex}>{'đ ' + this.numberWithCommas(this.props.amountToBuy.toFixed(2))}</Caption>
            </Container>
            <Divider />
            <Container actAsRow justifyContent={'space-between'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(3, true)}} alignItems={'center'}>
              <Caption>Fee</Caption>
              <Caption color={AUI_COLORS.Charcoal.hex}>{'đ ' + this.numberWithCommas(bank.fee.toFixed(2))}</Caption>
            </Container>
            <Divider />
            <Container actAsRow justifyContent={'space-between'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(3, true)}} alignItems={'center'}>
              <Caption>Bank Name</Caption>
              <Caption color={AUI_COLORS.Charcoal.hex}>{bank.name}</Caption>
            </Container>
          </Container>
          <Container style={[localStyles.receiptCard, AUI_LAYOUT.roundCorners]}>
            <Container actAsRow justifyContent={'space-between'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(3, true)}} alignItems={'center'}>
              <Caption>Mobile Number</Caption>
              <Caption color={AUI_COLORS.Charcoal.hex}>{this.props.phone}</Caption>
            </Container>
          </Container>
        </GradientContainer>
        <Container variation={'wide'}>
          <Spacer />
          <SmallDisplay alignCenter color={AUI_COLORS.ScampiPurple.hex}>What's Next?</SmallDisplay>
          <Spacer dense />
          <Caption alignCenter style={{ marginHorizontal: AUI_CONSTANTS.gridBase }}>
            You will soon receive an OTP from your MM provider to confirm your deposit. Once you confirm, we'll credit your Dala wallet.
          </Caption>
          <Spacer />
          <CallToActionButton
            onPress={() => {this.props.ctaOnPress()}}
            label={'Finished'}
          />
        </Container>
      </Container>
    );
  }
}

Receipt.defaultProps = {};

Receipt.propTypes = {};

const localStyles = StyleSheet.create({
  receiptCard: {
    backgroundColor: 'white',
    paddingHorizontal: 9,
    marginBottom: 4,
  },
  gradientWrapper: {
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  providerIcon: {
    width: AUI_FUNCTIONS.gridBaseMultiplier(4, true),
    height: AUI_FUNCTIONS.gridBaseMultiplier(4, true),
  },
  receiptHeadline: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(6, true),
    marginBottom: 4,
  },
  receiptDivider: {
    height: 4,
    backgroundColor: AUI_COLORS.WalaTeal.tint2,
  },
});
