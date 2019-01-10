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
  AUI_FUNCTIONS, GradientContainer, Subheadline, Spacer, Avatar, Divider, Caption, Icons
} from 'alchemyUI';

export default class BankCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  numberWithCommas = (x) =>  {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
      <Container variation={'card'}>
        <GradientContainer
          colors={[AUI_COLORS.ScampiPurple.tint4, AUI_COLORS.ScampiPurple.tint2]}
          style={[{ paddingHorizontal: 4 }, AUI_LAYOUT.roundCorners]}
        >
          <Container actAsRow alignItems={'center'} justifyContent={'space-between'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(5, true), paddingLeft: 9}}>
            <Subheadline dense color={AUI_COLORS.ScampiPurple.shade2}>{this.props.location}</Subheadline>
          </Container>
          <TouchableNativeFeedback onPress={() => {
            this.props.selectMethod();
          }}>
            <Container style={{backgroundColor: 'white', paddingLeft: 9, marginBottom: 4, borderRadius: 3}} actAsRow>
              <Container isFlex style={{borderRightWidth: 1, borderRightColor: AUI_COLORS.Silver.hex}}>
                <Container actAsRow alignItems={'center'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(7, true)}}>
                  <Avatar size={'tiny'} variation={'image'} imageSource={{uri: this.props.profileImage}} />
                  <Spacer dense horizontal />
                  <Subheadline dense color={AUI_COLORS.Charcoal.hex}>{this.props.name}</Subheadline>
                </Container>
                <Divider />
                <Container actAsRow justifyContent={'space-between'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(3, true), paddingRight: AUI_CONSTANTS.gridBaseDense}} alignItems={'center'}>
                  <Caption>Amount</Caption>
                  <Caption>{'đ ' + this.numberWithCommas(this.props.amount.toFixed(2))}</Caption>
                </Container>
                <Divider />
                <Container actAsRow justifyContent={'space-between'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(3, true), paddingRight: AUI_CONSTANTS.gridBaseDense}} alignItems={'center'}>
                  <Caption>Fee</Caption>
                  <Caption>{'đ ' + this.numberWithCommas(this.props.fee.toFixed(2))}</Caption>
                </Container>
                <Divider />
                <Container actAsRow justifyContent={'space-between'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(5, true), paddingRight: AUI_CONSTANTS.gridBaseDense}} alignItems={'center'}>
                  <Caption>You Pay</Caption>
                  <Subheadline dense color={AUI_COLORS.Charcoal.hex}>{'đ ' + this.numberWithCommas((this.props.fee + this.props.amount).toFixed(2))}</Subheadline>
                </Container>
              </Container>
              <Container justifyContent={'center'} alignItems={'center'} style={{width: AUI_FUNCTIONS.gridBaseMultiplier(4, true)}}>
                <Icons iconName={'chevron-right'} iconSet={'font-awesome'} iconSize={21} iconColor={AUI_COLORS.WalaTeal.hex} />
              </Container>
            </Container>
          </TouchableNativeFeedback>
        </GradientContainer>
      </Container>
    );
  }
}

BankCard.defaultProps = {};

BankCard.propTypes = {};

const localStyles = StyleSheet.create({});
