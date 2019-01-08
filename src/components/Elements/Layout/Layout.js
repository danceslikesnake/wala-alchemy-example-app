import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView} from 'react-native';
import {
  Container,
  GradientContainer,
  ImageContainer,
  Headline,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, Subheadline, Divider, Spacer, BodyText, Caption
} from 'alchemyUI';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <ScrollView>
          <Subheadline
            style={localStyles.subhead}
            color={AUI_COLORS.ScampiPurple.shade1}
            alignCenter
            fontFamily={'Poppins'}>Containers</Subheadline>
          <Divider />
          <Spacer />
          <Container style={{backgroundColor: AUI_COLORS.CuriousBlue.hex}}>
            <Spacer dense />
            <BodyText dense color={'white'}>Default</BodyText>
            <Spacer dense />
          </Container>
          <Spacer />
          <Container variation={'wide'} style={{backgroundColor: AUI_COLORS.CuriousBlue.hex}}>
            <Spacer dense />
            <BodyText dense color={'white'}>Wide</BodyText>
            <Spacer dense />
          </Container>
          <Spacer />
          <Container variation={'card'} style={{backgroundColor: AUI_COLORS.CuriousBlue.hex}}>
            <Spacer dense />
            <BodyText dense color={'white'}>Card</BodyText>
            <Spacer dense />
          </Container>
          <Spacer />
          <Divider />
          <Subheadline
            style={localStyles.subhead}
            color={AUI_COLORS.ScampiPurple.shade1}
            alignCenter
            fontFamily={'Poppins'}>Gradient Containers</Subheadline>
          <Divider />
          <Spacer />
          <GradientContainer colors={[AUI_COLORS.TorchRed.hex, AUI_COLORS.ScampiPurple.hex]}>
            <Spacer dense />
            <BodyText dense color={'white'}>Default</BodyText>
            <Spacer dense />
          </GradientContainer>
          <Spacer />
          <GradientContainer variation={'wide'} colors={[AUI_COLORS.TorchRed.hex, AUI_COLORS.ScampiPurple.hex]} gradientDirection={'vertical'}>
            <Spacer dense />
            <BodyText dense color={'white'}>Wide</BodyText>
            <Spacer dense />
          </GradientContainer>
          <Spacer />
          <GradientContainer variation={'card'} colors={[AUI_COLORS.TorchRed.hex, AUI_COLORS.ScampiPurple.hex]}>
            <Spacer dense />
            <BodyText dense color={'white'}>Card</BodyText>
            <Spacer dense />
          </GradientContainer>
          <Spacer />
          <Divider />
          <Subheadline
            style={localStyles.subhead}
            color={AUI_COLORS.ScampiPurple.shade1}
            alignCenter
            fontFamily={'Poppins'}>Image Containers</Subheadline>
          <Divider />
          <Spacer />
          <ImageContainer source={{uri: 'https://i.imgur.com/Rx2rjfs.jpg'}}>
            <Spacer dense />
            <BodyText dense color={'white'}>Default</BodyText>
            <Spacer dense />
          </ImageContainer>
          <Spacer />
          <ImageContainer variation={'wide'} source={{uri: 'https://i.imgur.com/Rx2rjfs.jpg'}}>
            <Spacer dense />
            <BodyText dense color={'white'}>Wide</BodyText>
            <Spacer dense />
          </ImageContainer>
          <Spacer />
          <ImageContainer variation={'card'} source={{uri: 'https://i.imgur.com/Rx2rjfs.jpg'}}>
            <Spacer dense />
            <BodyText dense color={'white'}>Card</BodyText>
            <Spacer dense />
          </ImageContainer>
          <Spacer />
          <Divider />
          <Subheadline
            style={localStyles.subhead}
            color={AUI_COLORS.ScampiPurple.shade1}
            alignCenter
            fontFamily={'Poppins'}>Dividers</Subheadline>
          <Divider />
          <Spacer />
          <Divider size={'large'} />
          <Spacer />
          <Divider size={'medium'} />
          <Spacer />
          <Divider size={'small'} />
          <Spacer />
          <Divider />
          <Subheadline
            style={localStyles.subhead}
            color={AUI_COLORS.ScampiPurple.shade1}
            alignCenter
            fontFamily={'Poppins'}>Spacers</Subheadline>
          <Caption alignCenter>Used in all the spacing between elements on this screen</Caption>
          <Spacer />
        </ScrollView>
      </Container>
    );
  }
}

const localStyles = StyleSheet.create({
  subhead: {
    lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)
  },
});
