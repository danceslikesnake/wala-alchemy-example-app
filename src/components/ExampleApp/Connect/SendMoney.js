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
  Avatar,
  Subheadline,
  Spacer,
  CurrencyInput,
  Divider,
  Caption,
  TextField,
  CallToActionButton,
  BusyOverlay,
  Icons
} from 'alchemyUI';

import {people} from './users';

export default class SendMoney extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencyValue: '0.00',
      convertedValue: '$ 0.00',
      displayReceipt: false
    };
  }

  sendMoney = () => {
    this.busyOverlay._open();
    setTimeout(() => {
      this.busyOverlay._close();
      this.setState({displayReceipt: true});
    }, 2500);
  };

  render() {
    const personIndex = this.props.navigation.state.params.peopleIndex;
    const person = people[personIndex];

    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <ScrollView>
          <Spacer />
          {!this.state.displayReceipt ? (
            <Container variation={'card'}>
              <Container actAsRow alignItems={'center'}>
                <Avatar variation={'image'} imageSource={{uri: person.profileImage}} size={'small'} />
                <Spacer dense horizontal />
                <Subheadline color={AUI_COLORS.Charcoal.hex}>{person.firstName + ' ' + person.surname}</Subheadline>
              </Container>
              <Spacer />
              <CurrencyInput
                ref={currency => this.currency = currency}
                label={'Amount to Send'}
                options={{
                  unit: 'đ ',
                  separator: '.',
                  delimiter: ',',
                  precision: 2
                }}
                value={this.state.currencyValue}
                onChangeText={(value) => {
                  let raw = this.currency._getRawValue();
                  this.setState({
                    currencyValue: value,
                    convertedValue: '$ ' + (raw / 14.0026).toFixed(2)
                  });
                }}
                autoFocus
                convertedValue={this.state.convertedValue}
              />
              <Divider extendLeftToFillContainer={AUI_CONSTANTS.gridBase} extendRightToFillContainer={AUI_CONSTANTS.gridBase} />
              <Spacer dense />
              <Caption>Optional Information</Caption>
              <Spacer />
              <TextField
                label={'Note'}
                title={'Describe what this is for...'}
                multiline
              />
              <Spacer />
              <CallToActionButton
                onPress={() => {
                  if(this.currency._getRawValue() > 0) {
                    this.sendMoney();
                  }
                }}
                label={'Send Money'}
              />
            </Container>
          ) : (
            <Container variation={'card'}>
              <Headline dense fontFamily={'Poppins'} color={AUI_COLORS.ScampiPurple.shade1} alignCenter>Your Money was Sent!</Headline>
              <Spacer />
              <Icons iconName={'check-circle'} iconSet={'font-awesome'} iconColor={AUI_COLORS.WalaTeal.hex} iconSize={78} containerStyles={{alignSelf: 'center'}} />
              <Spacer multiplier={2} />
              <Divider extendRightToFillContainer={AUI_CONSTANTS.gridBase} extendLeftToFillContainer={AUI_CONSTANTS.gridBase} />
              <Container actAsRow alignItems={'center'}>
                <Caption isFlex style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>AMOUNT</Caption>
                <Subheadline color={AUI_COLORS.Charcoal.hex}>{this.state.currencyValue}</Subheadline>
              </Container>
              <Divider extendRightToFillContainer={AUI_CONSTANTS.gridBase} extendLeftToFillContainer={AUI_CONSTANTS.gridBase} />
              <Container actAsRow alignItems={'center'}>
                <Caption isFlex style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>AMOUNT</Caption>
                <Avatar variation={'image'} imageSource={{uri: person.profileImage}} size={'small'} />
              </Container>
              <Divider extendRightToFillContainer={AUI_CONSTANTS.gridBase} extendLeftToFillContainer={AUI_CONSTANTS.gridBase} />
              <Spacer multiplier={2} />
              <CallToActionButton onPress={() => this.props.navigation.goBack()} label={'Done'}/>
            </Container>
          )}
        </ScrollView>
        <BusyOverlay
          ref={busyOverlay => this.busyOverlay = busyOverlay}
          message={'Sending Money to ' + person.firstName + '...'}
        />
      </Container>
    );
  }
}

SendMoney.defaultProps = {};

SendMoney.propTypes = {};

const localStyles = StyleSheet.create({});
