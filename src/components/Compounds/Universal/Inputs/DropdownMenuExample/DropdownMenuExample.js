import React, { Component } from "react";
import {
  AUI_COLORS,
  GradientContainer,
  Subheadline,
  Container,
  DropdownMenu,
  Spacer,
  Avatar,
  Dialog
} from "alchemyUI";

export default class DropdownMenuExample extends Component {
  constructor(props){
    super(props);

    this.state = {
      alias: ''
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
              imageSource={{uri: 'https://i.imgur.com/ytmC14X.jpg'}}
              variation={'image'}
              size={'largest'}
            />
          </Container>
          <Spacer />
          <Subheadline alignCenter color={AUI_COLORS.ScampiPurple.shade1}>
            Which is the best alias for this Agent of S.H.I.E.L.D.?
          </Subheadline>
          <Spacer />
          <DropdownMenu
            dropdownItems={[
              {
                value: 'Skye'
              },
              {
                label: 'Daisy Johnson',
                value: 'Daisy'
              },
              {
                value: 'Quake'
              },
              {
                value: 'Destroyer of Worlds'
              }
            ]}
            onChangeText={(value) => {
              this.setState({alias: value});
              (value === 'Destroyer of Worlds') ? this.successDialog._openDialog() : this.failDialog._openDialog();
            }}
            label={'Best Alias'}
          />
        </Container>
        <Dialog
          ref={failDialog => this.failDialog = failDialog}
          headline={'You chose: ' + this.state.alias}
          message={'This is a bad answer and you should feel bad.'}
          messageCondition={'failure'}
        />
        <Dialog
          ref={successDialog => this.successDialog = successDialog}
          headline={'You chose: ' + this.state.alias}
          message={'You get it.'}
          messageCondition={'success'}
        />
      </GradientContainer>
    );
  };
}
