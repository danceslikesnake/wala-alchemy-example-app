import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView} from 'react-native';
import {
  Container,
  Headline,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS,
  Spacer,
  Icons,
  SmallDisplay,
  Caption,
  GradientContainer,
  Divider,
  PhoneInput,
  Avatar,
  Subheadline,
  CallToActionButton
} from 'alchemyUI';

import {banks} from './banks';

export default class Review extends Component {
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
        <ScrollView>
          <Spacer />
          <Headline dense alignCenter color={AUI_COLORS.ScampiPurple.shade1} fontFamily={'Poppins'}>Review Your Purchase</Headline>
          <Spacer dense />
          <Icons
            iconName={'check-double'}
            iconSet={'font-awesome'}
            iconSize={16}
            containerStyles={{ alignSelf: 'center' }}
            iconColor={AUI_COLORS.WalaTeal.tint2}
          />
          <Spacer />
          <SmallDisplay alignCenter color={AUI_COLORS.ScampiPurple.hex}>Always Double Check</SmallDisplay>
          <Spacer dense />
          <Caption alignCenter style={{ marginHorizontal: AUI_CONSTANTS.gridBase }}>Make sure that the details of your purchase are correct!</Caption>
          <Spacer />
          <GradientContainer
            colors={[AUI_COLORS.ScampiPurple.tint4, AUI_COLORS.ScampiPurple.tint2]}
            style={[{ paddingHorizontal: 4 }, AUI_LAYOUT.roundCorners]}
            variation={'card'}
          >
            <Container style={{backgroundColor: 'white', paddingHorizontal: 9, marginVertical: 4, borderRadius: 3}}>
              <Container actAsRow alignItems={'center'} justifyContent={'space-between'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(6, true)}}>
                <Avatar size={'tiny'} variation={'image'} imageSource={{uri: bank.profileImage}} />
                <Headline dense color={AUI_COLORS.Charcoal.hex}>{'đ ' + this.numberWithCommas((this.props.amountToBuy + bank.fee).toFixed(2))}</Headline>
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
            <Container style={{backgroundColor: 'white', paddingHorizontal: 9, marginBottom: 4, borderRadius: 3}}>
              <Spacer dense />
              <PhoneInput
                cca2={this.props.phoneCountry}
                onChangeCountry={(country) => {
                  this.props.onChangePhoneCountry(country.cca2)
                }}
                onChangePhoneText={(phone) => {
                  this.props.onChangePhoneText(phone);
                }}
                countries={['US', 'CN', 'UG', 'ZA', 'JP']}
              />
            </Container>
          </GradientContainer>
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Container isFlex>
              <CallToActionButton onPress={() => {}} label={'Change'} variation={'secondary'}/>
            </Container>
            <Spacer horizontal />
            <Container isFlex>
              <CallToActionButton
                onPress={() => {
                  if(this.props.phone !== '')
                    this.props.ctaOnPress();
                }}
                label={this.props.phone !== '' ? 'Buy Dala' : 'Enter Phone...'}
                variation={this.props.phone !== '' ? 'primary' : 'disabled'}
                addArrow={this.props.phone !== ''}
              />
            </Container>
          </Container>
        </ScrollView>
      </Container>
    );
  }
}

Review.defaultProps = {};

Review.propTypes = {};

const localStyles = StyleSheet.create({
  receiptDivider: {
    height: 4,
    backgroundColor: AUI_COLORS.ScampiPurple.tint4,
  }
});
