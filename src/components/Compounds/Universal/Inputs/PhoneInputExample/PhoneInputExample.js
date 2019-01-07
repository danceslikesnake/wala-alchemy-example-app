import React, { Component } from "react";
import {
  AUI_COLORS,
  GradientContainer,
  Subheadline,
  Container,
  Spacer,
  Avatar,
  PhoneInput
} from "alchemyUI";

export default class PhoneInputExample extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedCountry: ''
    };
  }

  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        <Container variation={'card'}>
          <Spacer />
          <Container alignItems={'center'}>
            <Avatar
              imageSource={{uri: 'https://i.imgur.com/kP0sXSb.jpg?1'}}
              size={'largest'}
              variation={'image'}
            />
            <Spacer />
            <Subheadline alignCenter color={AUI_COLORS.ScampiPurple.shade1}>
              Ugh, yes, Thanos, end of the world, blah blah blah, fine. I'll call Steve...
            </Subheadline>
            <Spacer />
          </Container>
          <PhoneInput
            cca2={this.state.selectedCountry ? this.state.selectedCountry : ''}
            closeable
            onChangeCountry={(country) => {this.setState({selectedCountry: country.cca2})}}
            onChangePhoneText={(phone) => {}}
            countries={[
              "AF", "AR", "AT", "BR", "CN", "GL", "DE", "IN", "NG", "NO", "RO", "RU", "KR", "GB", "CH", "US", "ZA"
            ]}
          />
        </Container>
      </GradientContainer>
    );
  };
}
