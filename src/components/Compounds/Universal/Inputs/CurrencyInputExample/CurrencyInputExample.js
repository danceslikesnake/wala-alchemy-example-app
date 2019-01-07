import React, { Component } from "react";
import {
  ScrollView,
} from "react-native";
import {
  GradientContainer,
  AUI_COLORS,
  Spacer,
  Container,
  Avatar,
  CurrencyInput,
  Subheadline
} from "alchemyUI";

export default class CurrencyInputExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '0.00'
    };
  }

  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        <Spacer/>
        <Container alignItems={'center'}>
          <Avatar
            variation={'image'}
            imageSource={{uri: 'https://i.imgur.com/Lq3HHiR.jpg?1'}}
            size={'largest'}
          />
        </Container>
        <Spacer />
        <Subheadline alignCenter color={AUI_COLORS.ScampiPurple.shade1} style={{paddingHorizontal: 13}}>What must I pay you now to own your exquisite carcass? Only at the time of your death, of course.</Subheadline>
        <Container variation={"card"}>
          <Spacer />
          <CurrencyInput
            label={'Units Desired'}
            onChangeText={(value) => {this.setState({value: value})}}
            options={{
              unit: 'U ',
              separator: '.',
              delimiter: ',',
              precision: 2
            }}
            value={this.state.value}
          />
        </Container>
        <Spacer />
      </GradientContainer>
    );
  };
}
