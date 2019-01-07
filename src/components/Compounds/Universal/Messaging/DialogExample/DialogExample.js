import React, { Component } from "react";
import {
  TouchableNativeFeedback
} from "react-native";
import {
  AUI_COLORS,
  GradientContainer,
  ImageContainer,
  Container,
  Subheadline,
  Spacer,
  Avatar,
  Dialog
} from 'alchemyUI';

export default class DialogExample extends Component {

  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        <Container alignItems={'center'}>
          <Spacer />
          <Avatar
            imageSource={{uri: 'https://i.imgur.com/7pkoHFv.jpg?1'}}
            size={'largest'}
            variation={'image'}
          />
          <Spacer />
          <Subheadline color={AUI_COLORS.ScampiPurple.shade1}>
            Who is the weakest Defender?
          </Subheadline>
          <Spacer />
        </Container>
        <Container actAsRow isFlex>
          <TouchableNativeFeedback onPress={() => {this.dialog._openDialog()}}>
            <Container style={{backgroundColor: 'green'}} isFlex>
              <ImageContainer source={{uri: 'https://i.imgur.com/AHRbG3B.jpg?1'}} isFlex />
            </Container>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {this.dialog._openDialog()}}>
            <Container style={{backgroundColor: 'red'}} isFlex>
              <ImageContainer source={{uri: 'https://i.imgur.com/w3b3hgw.jpg'}} isFlex />
            </Container>
          </TouchableNativeFeedback>
        </Container>
        <Container actAsRow isFlex>
          <TouchableNativeFeedback onPress={() => {this.dialog._openDialog()}}>
            <Container style={{backgroundColor: 'yellow'}} isFlex>
              <ImageContainer source={{uri: 'https://i.imgur.com/2YOdQqZ.jpg'}} isFlex />
            </Container>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {this.dialog._openDialog()}}>
            <Container style={{backgroundColor: 'purple'}} isFlex>
              <ImageContainer source={{uri: 'https://i.imgur.com/PxvOVPo.jpg'}} isFlex />
            </Container>
          </TouchableNativeFeedback>
        </Container>
        <Dialog
          ref={dialog => this.dialog = dialog}
          headline={'Trick question'}
          message={'None of them have what it takes.'}
        />
      </GradientContainer>
    );
  };
}