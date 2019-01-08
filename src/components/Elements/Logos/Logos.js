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
  AUI_FUNCTIONS, Subheadline, Divider, Logo, Spacer, Logomark
} from 'alchemyUI';

export default class Logos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <Subheadline
          style={localStyles.subhead}
          color={AUI_COLORS.ScampiPurple.shade1}
          alignCenter
          fontFamily={'Poppins'}>Logo</Subheadline>
        <Divider />
        <Container actAsRow>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logo imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(7, true)} centeredAdjust />
            <Spacer />
          </Container>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logo imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(7, true)} variation={'logoPurpleText'} centeredAdjust />
            <Spacer />
          </Container>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logo imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(7, true)} variation={'logoBlack'} centeredAdjust />
            <Spacer />
          </Container>
        </Container>
        <Container actAsRow style={{backgroundColor: AUI_COLORS.Iron.hex}}>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logo imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(7, true)} variation={'logoWhite'} centeredAdjust />
            <Spacer />
          </Container>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logo imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(7, true)} variation={'logoWhiteText'} centeredAdjust />
            <Spacer />
          </Container>
        </Container>
        <Subheadline
          style={localStyles.subhead}
          color={AUI_COLORS.ScampiPurple.shade1}
          alignCenter
          fontFamily={'Poppins'}>Logomark</Subheadline>
        <Divider />
        <Container actAsRow>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logomark imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(5, true)} />
            <Spacer />
          </Container>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logomark imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(5, true)} variation={'logomarkBlack'} />
            <Spacer />
          </Container>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logomark imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(5, true)} variation={'logomarkDala'} />
            <Spacer />
          </Container>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logomark imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(5, true)} variation={'alchemy'} />
            <Spacer />
          </Container>
        </Container>
        <Container actAsRow style={{backgroundColor: AUI_COLORS.Iron.hex}}>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logomark imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(5, true)} variation={'logomarkWhite'} />
            <Spacer />
          </Container>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Spacer />
            <Logomark imgHeight={AUI_FUNCTIONS.gridBaseMultiplier(5, true)} variation={'alchemyWhite'} />
            <Spacer />
          </Container>
        </Container>
      </Container>
    );
  }
}

const localStyles = StyleSheet.create({
  subhead: {
    lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)
  },
});
