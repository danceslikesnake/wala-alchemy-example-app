import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Headline,
  AUI_COLORS,
  Spacer
} from 'alchemyUI';
import BankCard from './BankCard';

import {banks} from './banks';

export default class PaymentMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <Spacer />
        <Headline dense alignCenter color={AUI_COLORS.ScampiPurple.shade1} fontFamily={'Poppins'}>Select a Payment Method</Headline>
        <Spacer />
        {banks.map((bank, idx) => {
          return(
            <Container key={idx}>
              <BankCard
                location={bank.location}
                name={bank.name}
                fee={bank.fee}
                profileImage={bank.profileImage}
                amount={this.props.amountToBuy}
                selectMethod={() => {
                  this.props.selectPaymentMethod(idx);
                }}
              />
              <Spacer />
            </Container>
          );
        })}
      </Container>
    );
  }
}

PaymentMethod.defaultProps = {};

PaymentMethod.propTypes = {};

const localStyles = StyleSheet.create({});
