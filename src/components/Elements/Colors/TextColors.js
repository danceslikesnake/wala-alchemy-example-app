import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  AUI_COLORS,
  AUI_CONSTANTS,
  SmallDisplay
} from 'alchemyUI';

export default class TextColors extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <Container isFlex style={[{backgroundColor: AUI_COLORS.Slate.hex}, localStyles.colorBar]} alignItems={'center'} actAsRow>
          <SmallDisplay isFlex color={AUI_COLORS.Charcoal.tint4}>Slate</SmallDisplay>
          <SmallDisplay isFlex alignRight color={AUI_COLORS.Charcoal.tint4}>{AUI_COLORS.Slate.hex}</SmallDisplay>
        </Container>
        <Container isFlex style={[{backgroundColor: AUI_COLORS.Iron.hex}, localStyles.colorBar]} alignItems={'center'} actAsRow>
          <SmallDisplay isFlex color={AUI_COLORS.Charcoal.tint1}>Iron</SmallDisplay>
          <SmallDisplay isFlex alignRight color={AUI_COLORS.Charcoal.tint1}>{AUI_COLORS.Iron.hex}</SmallDisplay>
        </Container>
        <Container isFlex style={[{backgroundColor: AUI_COLORS.Silver.hex}, localStyles.colorBar]} alignItems={'center'} actAsRow>
          <SmallDisplay isFlex color={AUI_COLORS.Charcoal.tint1}>Silver</SmallDisplay>
          <SmallDisplay isFlex alignRight color={AUI_COLORS.Charcoal.tint1}>{AUI_COLORS.Silver.hex}</SmallDisplay>
        </Container>
      </Container>
    );
  }
}

TextColors.defaultProps = {};

TextColors.propTypes = {};

const localStyles = StyleSheet.create({
  colorBar: {
    paddingHorizontal: AUI_CONSTANTS.gridBase
  },
});
