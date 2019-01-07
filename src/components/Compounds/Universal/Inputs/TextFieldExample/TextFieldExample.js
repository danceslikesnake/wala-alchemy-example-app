import React, { Component } from "react";
import {
  AUI_COLORS,
  GradientContainer,
  Subheadline,
  Container,
  Spacer,
  Avatar,
  TextField
} from "alchemyUI";

export default class TextFieldExample extends Component {
  constructor(props){
    super(props);

    this.state = {
      password: ''
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
              imageSource={{uri: 'https://i.imgur.com/rec1oqd.jpg?1'}}
              variation={'image'}
              size={'largest'}
            />
          </Container>
          <Spacer />
          <Subheadline alignCenter color={AUI_COLORS.ScampiPurple.shade1} fontFamily={'Poppins'}>It's the WiFi Password. We aren't savages.</Subheadline>
          <Spacer />
          <TextField
            label={'WiFi Password'}
            value={this.state.password}
            onChangeText={text => {
              this.setState({password: text});
            }}
          />
        </Container>
      </GradientContainer>
    );
  };
}
