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
  AUI_FUNCTIONS, Spacer, Divider, CurrencyInput, Caption, CallToActionButton
} from 'alchemyUI';
import ExchangeTableDropdown from './ExchangeTableDropdown';

export default class HowMuchToBuy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allowToAdvance: false
    };
  }

  numberWithCommas = (x) =>  {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <Spacer />
        <Headline dense alignCenter color={AUI_COLORS.ScampiPurple.shade1} fontFamily={'Poppins'}>How Much Will You Buy?</Headline>
        <ExchangeTableDropdown />
        <Divider />
        <Spacer dense />
        <Container variation={'card'}>
          <CurrencyInput
            ref={currency => this.currency = currency}
            label={'Amount'}
            value={this.props.value}
            options={{
              unit: 'đ ',
              separator: '.',
              delimiter: ',',
              precision: 2
            }}
            onChangeText={(value) => {
              let raw = this.currency._getRawValue();
              this.props.onChangeText(raw);
              this.setState({
                allowToAdvance: (raw > 100 && raw < 100000000)
              });
            }}
            convertedValue={'$ ' + this.numberWithCommas((this.props.value / 14.0026).toFixed(2))}
          />
        </Container>
        <Divider />
        <Container actAsRow>
          <Container isFlex alignItems={'center'} justifyContent={'center'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>
            <Caption>Minimum Purchase</Caption>
            <Caption color={AUI_COLORS.Charcoal.hex}>đ 100</Caption>
          </Container>
          <Divider vertical />
          <Container isFlex alignItems={'center'} justifyContent={'center'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>
            <Caption>Maximum Purchase</Caption>
            <Caption color={AUI_COLORS.Charcoal.hex}>đ 100,000,000</Caption>
          </Container>
        </Container>
        <Divider />
        <Spacer />
        <Container variation={'card'}>
          <CallToActionButton
            variation={this.state.allowToAdvance ? 'primary' : 'disabled'}
            onPress={() => {
              if(this.state.allowToAdvance)
                this.props.ctaOnPress();
            }}
            label={this.state.allowToAdvance ? 'Select a Payment Method' : 'Type in an Amount...'}
            addArrow={this.state.allowToAdvance}
          />
        </Container>
      </Container>
    );
  }
}

HowMuchToBuy.defaultProps = {};

HowMuchToBuy.propTypes = {};

const localStyles = StyleSheet.create({});
