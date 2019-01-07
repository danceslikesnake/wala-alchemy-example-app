import React, { Component } from "react";
import moment from 'moment';
import {
  AUI_COLORS,
  Spacer,
  Container,
  Avatar,
  Subheadline,
  DateTextField,
  GradientContainer
} from "alchemyUI";

export default class DateTextFieldExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateValue: moment('1991-12-16').format('LL')
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
            imageSource={{uri: 'https://i.imgur.com/fjgyYjI.jpg?1'}}
            size={'largest'}
          />
        </Container>
        <Spacer />
        <Subheadline
          alignCenter
          color={AUI_COLORS.ScampiPurple.shade1}
          style={{paddingHorizontal: 13}}>
          My name is Zemo. I will repeat my question. Mission report...
        </Subheadline>
        <Container variation={"card"}>
          <Spacer />
          <DateTextField
            label={'Date'}
            value={this.state.dateValue}
            onConfirm={(date) => {
              let d = moment(date).format('LL');
              this.setState({dateValue: d});
            }}
          />
        </Container>
        <Spacer />
      </GradientContainer>
    );
  };
}
