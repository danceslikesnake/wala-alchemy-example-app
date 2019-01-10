import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  BusyOverlay,
  Container,
} from 'alchemyUI';

import HowMuchToBuy from './HowMuchToBuy';
import PaymentMethod from './PaymentMethod';
import Review from './Review';
import Receipt from './Receipt';

export default class BuyDala extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountToBuy: 0,
      network: {},
      paymentMethodId: null,
      step: 0,
      selectedPhoneCountry: 'US',
      phoneNumber: ''
    };
  }

  busyMessage = () => {
    this.busyOverlay._open();
    setTimeout(() => {
      this.setState({step: 3});
      this.busyOverlay._close()
    }, 2500);
  };

  renderScreen = () => {
    switch(this.state.step) {
      case 0:
      default:
        return (
          <HowMuchToBuy
            value={this.state.amountToBuy}
            onChangeText={(amount) => {
              this.setState({
                amountToBuy: amount
              });
            }}
            ctaOnPress={() => {
              this.setState({
                step: 1
              });
            }}
          />
        );
      case 1:
        return (
          <PaymentMethod
            amountToBuy={this.state.amountToBuy}
            selectPaymentMethod={(paymentMethodId) => {
              this.setState({paymentMethodId: paymentMethodId, step: 2});
            }}
          />
        );
      case 2:
        return(
          <Review
            bankId={this.state.paymentMethodId}
            amountToBuy={this.state.amountToBuy}
            phoneCountry={this.state.selectedPhoneCountry}
            onChangePhoneCountry={(country) => {
              this.setState({selectedPhoneCountry: country});
            }}
            onChangePhoneText={(phone) => {
              this.setState({phoneNumber: phone});
            }}
            phone={this.state.phoneNumber}
            ctaOnPress={() => {
              this.busyMessage();
            }}
          />
        );
      case 3:
        return(
          <Receipt
            bankId={this.state.paymentMethodId}
            amountToBuy={this.state.amountToBuy}
            phoneCountry={this.state.selectedPhoneCountry}
            phone={this.state.phoneNumber}
            ctaOnPress={() => {
              this.props.navigation.goBack();
            }}
          />
        )
    }
  };

  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        {this.renderScreen()}
        <BusyOverlay ref={busyOverlay => this.busyOverlay = busyOverlay} message={'Purchasing Dala...'} />
      </Container>
    );
  }
}

BuyDala.defaultProps = {};

BuyDala.propTypes = {};

const localStyles = StyleSheet.create({});
