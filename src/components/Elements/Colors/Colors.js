import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  DrawerInput,
  AUI_COLORS,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, Spacer, Subheadline, SmallDisplay
} from 'alchemyUI';

export default class Colors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorTint4Bg: AUI_COLORS.WalaTeal.tint4,
      colorTint3Bg: AUI_COLORS.WalaTeal.tint3,
      colorTint2Bg: AUI_COLORS.WalaTeal.tint2,
      colorTint1Bg: AUI_COLORS.WalaTeal.tint1,
      colorBaseBg: AUI_COLORS.WalaTeal.hex,
      colorShade1Bg: AUI_COLORS.WalaTeal.shade1,
      colorShade2Bg: AUI_COLORS.WalaTeal.shade2,
      colorShade3Bg: AUI_COLORS.WalaTeal.shade3,
      colorShade4Bg: AUI_COLORS.WalaTeal.shade4,
      showShades: true
    };
  }

  renderDrawerChoice = (color, label) => {
    return(
      <Container actAsRow alignItems={'center'} style={{paddingVertical: AUI_CONSTANTS.gridBaseDense}}>
        <Spacer horizontal dense />
        <Container style={[localStyles.drawerChoice, {backgroundColor: color}]} />
        <Spacer dense horizontal />
        <Subheadline isFlex color={AUI_COLORS.Charcoal.hex}>{label}</Subheadline>
        <Spacer horizontal dense />
      </Container>
    );
  };

  changeColors = (colorKey) => {
    switch(colorKey) {
      case 'Charcoal':
        this.setState({
          colorTint4Bg: AUI_COLORS[colorKey].tint4,
          colorTint3Bg: AUI_COLORS[colorKey].tint3,
          colorTint2Bg: AUI_COLORS[colorKey].tint2,
          colorTint1Bg: AUI_COLORS[colorKey].tint1,
          colorBaseBg: AUI_COLORS[colorKey].hex,
          colorShade1Bg: 'white',
          colorShade2Bg: 'white',
          colorShade3Bg: 'white',
          colorShade4Bg: 'white',
          showShades: false
        });
        break;
      default:
        this.setState({
          colorTint4Bg: AUI_COLORS[colorKey].tint4,
          colorTint3Bg: AUI_COLORS[colorKey].tint3,
          colorTint2Bg: AUI_COLORS[colorKey].tint2,
          colorTint1Bg: AUI_COLORS[colorKey].tint1,
          colorBaseBg: AUI_COLORS[colorKey].hex,
          colorShade1Bg: AUI_COLORS[colorKey].shade1,
          colorShade2Bg: AUI_COLORS[colorKey].shade2,
          colorShade3Bg: AUI_COLORS[colorKey].shade3,
          colorShade4Bg: AUI_COLORS[colorKey].shade4,
          showShades: true
        });
        break;
    }
  };

  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <Container variation={'card'}>
          <Spacer dense />
          <DrawerInput
            ref={drawer => this.drawer = drawer}
            label={'Select a Color'}
            drawerChoices={[
              {
                displayComponent: this.renderDrawerChoice(AUI_COLORS.WalaTeal.hex, 'Wala Teal')
              },
              {
                displayComponent: this.renderDrawerChoice(AUI_COLORS.CuriousBlue.hex, 'Curious Blue')
              },
              {
                displayComponent: this.renderDrawerChoice(AUI_COLORS.ScampiPurple.hex, 'Scampi Purple')
              },
              {
                displayComponent: this.renderDrawerChoice(AUI_COLORS.TorchRed.hex, 'Torch Red')
              },
              {
                displayComponent: this.renderDrawerChoice(AUI_COLORS.PoppyYellow.hex, 'Poppy Yellow')
              },
              {
                displayComponent: this.renderDrawerChoice(AUI_COLORS.Charcoal.hex, 'Charcoal')
              }
            ]}
            onSelectChoice={(idx) => {
              this.changeColors(colorKeyMap[idx]);
            }}
          />
          <Spacer dense />
        </Container>
        <Container isFlex>
          <Container actAsRow isFlex style={[{backgroundColor: this.state.colorTint4Bg}, localStyles.colorBar]} alignItems={'center'}>
            <SmallDisplay isFlex color={AUI_COLORS.Charcoal.tint1}>Tint 4</SmallDisplay>
            <SmallDisplay isFlex color={AUI_COLORS.Charcoal.tint1} alignRight>{this.state.colorTint4Bg}</SmallDisplay>
          </Container>
          <Container actAsRow isFlex style={[{backgroundColor: this.state.colorTint3Bg}, localStyles.colorBar]} alignItems={'center'}>
            <SmallDisplay isFlex color={AUI_COLORS.Charcoal.tint1}>Tint 3</SmallDisplay>
            <SmallDisplay isFlex color={AUI_COLORS.Charcoal.tint1} alignRight>{this.state.colorTint3Bg}</SmallDisplay>
          </Container>
          <Container actAsRow isFlex style={[{backgroundColor: this.state.colorTint2Bg}, localStyles.colorBar]} alignItems={'center'}>
            <SmallDisplay isFlex color={AUI_COLORS.Charcoal.tint1}>Tint 2</SmallDisplay>
            <SmallDisplay isFlex color={AUI_COLORS.Charcoal.tint1} alignRight>{this.state.colorTint2Bg}</SmallDisplay>
          </Container>
          <Container actAsRow isFlex style={[{backgroundColor: this.state.colorTint1Bg}, localStyles.colorBar]} alignItems={'center'}>
            <SmallDisplay isFlex color={'white'}>Tint 1</SmallDisplay>
            <SmallDisplay isFlex color={'white'} alignRight>{this.state.colorTint1Bg}</SmallDisplay>
          </Container>
          <Container actAsRow isFlex style={[{backgroundColor: this.state.colorBaseBg}, localStyles.colorBar]} alignItems={'center'}>
            <SmallDisplay isFlex color={'white'}>Base</SmallDisplay>
            <SmallDisplay isFlex color={'white'} alignRight>{this.state.colorBaseBg}</SmallDisplay>
          </Container>
          {this.state.showShades &&
          <Container actAsRow isFlex style={[{backgroundColor: this.state.colorShade1Bg}, localStyles.colorBar]} alignItems={'center'}>
            <SmallDisplay isFlex color={'white'}>Shade 1</SmallDisplay>
            <SmallDisplay isFlex color={'white'} alignRight>{this.state.colorShade1Bg}</SmallDisplay>
          </Container>
          }
          {this.state.showShades &&
          <Container actAsRow isFlex style={[{backgroundColor: this.state.colorShade2Bg}, localStyles.colorBar]} alignItems={'center'}>
            <SmallDisplay isFlex color={'white'}>Shade 2</SmallDisplay>
            <SmallDisplay isFlex color={'white'} alignRight>{this.state.colorShade2Bg}</SmallDisplay>
          </Container>
          }
          {this.state.showShades &&
          <Container actAsRow isFlex style={[{backgroundColor: this.state.colorShade3Bg}, localStyles.colorBar]} alignItems={'center'}>
            <SmallDisplay isFlex color={'white'}>Shade 3</SmallDisplay>
            <SmallDisplay isFlex color={'white'} alignRight>{this.state.colorShade3Bg}</SmallDisplay>
          </Container>
          }
          {this.state.showShades &&
          <Container actAsRow isFlex style={[{backgroundColor: this.state.colorShade4Bg}, localStyles.colorBar]} alignItems={'center'}>
            <SmallDisplay isFlex color={'white'}>Shade 4</SmallDisplay>
            <SmallDisplay isFlex color={'white'} alignRight>{this.state.colorShade4Bg}</SmallDisplay>
          </Container>
          }
        </Container>
      </Container>
    );
  }
}

const localStyles = StyleSheet.create({
  colorBar: {
    paddingHorizontal: AUI_CONSTANTS.gridBase
  },
  drawerChoice: {
    width: AUI_FUNCTIONS.gridBaseMultiplier(4, true),
    height: AUI_FUNCTIONS.gridBaseMultiplier(4, true),
    borderRadius: AUI_FUNCTIONS.gridBaseMultiplier(4, true) / 2
  }
});

const colorKeyMap = [
  'WalaTeal',
  'CuriousBlue',
  'ScampiPurple',
  'TorchRed',
  'PoppyYellow',
  'Charcoal'
];