import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView, Image} from 'react-native';
import {
  AUI_COLORS,
  AUI_CONSTANTS,
  AUI_FUNCTIONS,
  AUI_LAYOUT,
  Container,
  Icons,
  Logomark,
  SmallDisplay,
  Spacer,
  Subheadline,
} from 'alchemyUI';
import * as Animatable from 'react-native-animatable';

export default class ExchangeTableDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangeTableVisible: false,
    };
  }

  toggleExchangeTable = () => {
    if (this.state.exchangeTableVisible) {
      this.exchangeTable.transition(
        { marginTop: AUI_FUNCTIONS.gridBaseMultiplier(4) },
        { marginTop: -47 },
        200,
        'ease-out'
      );
      this.exchangeTableIcon.transition(
        {
          transform: [{ rotate: '180deg' }],
        },
        {
          transform: [{ rotate: '0deg' }],
        },
        200,
        'ease-out'
      );
    } else {
      this.exchangeTable.transition(
        { marginTop: -47 },
        { marginTop: AUI_FUNCTIONS.gridBaseMultiplier(4) },
        200,
        'ease-out'
      );
      this.exchangeTableIcon.transition(
        {
          transform: [{ rotate: '0deg' }],
        },
        {
          transform: [{ rotate: '180deg' }],
        },
        200,
        'ease-out'
      );
    }
    this.setState({ exchangeTableVisible: !this.state.exchangeTableVisible });
  };

  render() {
    return (
      <Container style={localStyles.mainWrapper}>
        <TouchableNativeFeedback
          onPress={() => {
            this.toggleExchangeTable();
          }}>
          <Container actAsRow alignItems={'center'} style={localStyles.exchangeRateButton}>
            <Icons
              iconName={'info-circle'}
              iconSet={'font-awesome'}
              iconColor={AUI_COLORS.CuriousBlue.tint2}
              iconSize={AUI_FUNCTIONS.gridBaseMultiplier(2)}
            />
            <Spacer horizontal dense />
            <SmallDisplay isFlex color={AUI_COLORS.CuriousBlue.tint2}>
              View Current Exchange Rate
            </SmallDisplay>
            <Animatable.View
              ref={exchangeTableIcon => (this.exchangeTableIcon = exchangeTableIcon)}>
              <Icons
                iconName={'keyboard-arrow-down'}
                iconSet={'material-design'}
                iconColor={AUI_COLORS.WalaTeal.hex}
                iconSize={AUI_FUNCTIONS.gridBaseMultiplier(2)}
              />
            </Animatable.View>
          </Container>
        </TouchableNativeFeedback>
        <Animatable.View
          style={{ marginTop: -47 }}
          ref={exchangeTable => (this.exchangeTable = exchangeTable)}>
          <Container
            actAsRow
            alignItems={'center'}
            style={{ paddingHorizontal: AUI_CONSTANTS.gridBase }}>
            <Image source={require('../../../../resources/img/usFlag.png')} style={{height: 26}} />
            <Spacer horizontal />
            <SmallDisplay alignCenter style={{ width: AUI_FUNCTIONS.gridBaseMultiplier(3) }}>
              USD
            </SmallDisplay>
            <Spacer horizontal />
            <Container
              isFlex
              style={[localStyles.exchangeRate, AUI_LAYOUT.roundCorners]}
              alignItems={'center'}
              justifyContent={'center'}>
              <Subheadline color={AUI_COLORS.CuriousBlue.shade2}>
                {
                  '1.00' /* removed this from I18n because this is a number, not something translatable */
                }
              </Subheadline>
            </Container>
          </Container>
          <Spacer dense />
          <Container
            actAsRow
            alignItems={'center'}
            style={{ paddingHorizontal: AUI_CONSTANTS.gridBase }}>
            <Container style={{width: 40}} alignItems={'center'}>
              <Logomark variation={'logomarkDala'} imgHeight={26} />
            </Container>
            <Spacer horizontal />
            <SmallDisplay alignCenter style={{ width: AUI_FUNCTIONS.gridBaseMultiplier(3) }}>
              {
                'DALA' /* removed this from I18n because this is a symbol, not something translatable */
              }
            </SmallDisplay>
            <Spacer horizontal />
            <Container
              isFlex
              style={[localStyles.exchangeRate, AUI_LAYOUT.roundCorners]}
              alignItems={'center'}
              justifyContent={'center'}>
              <Subheadline color={AUI_COLORS.CuriousBlue.shade2}>{'14.0026'}</Subheadline>
            </Container>
          </Container>
          <Spacer />
        </Animatable.View>
      </Container>
    );
  }
}

const localStyles = StyleSheet.create({
  mainWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  exchangeRateButton: {
    paddingLeft: AUI_CONSTANTS.gridBase,
    paddingRight: 6,
    height: AUI_FUNCTIONS.gridBaseMultiplier(4),
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },
  exchangeRate: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    backgroundColor: AUI_COLORS.CuriousBlue.tint4,
  },
});
