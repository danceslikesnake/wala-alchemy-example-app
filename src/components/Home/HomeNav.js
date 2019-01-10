import React, {Component} from 'react';
import {StyleSheet, TouchableNativeFeedback, TouchableOpacity, Animated, Linking} from 'react-native';
import {
  Container,
  GradientContainer,
  Logomark,
  AUI_COLORS,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, SmallDisplay
} from 'alchemyUI';

export default class HomeNav extends Component {
  constructor(props) {
    super(props);
  }

  openUrl = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.warn("Don't know how to open URI: " + url);
      }
    });
  };

  render() {
    let bgColor = 'transparent';
    let opacity = 0;
    if(this.props.state.params) {
        bgColor = this.props.state.params.bgColor;
        opacity = this.props.state.params.logoOpacity;
    }
    return (
      <Container style={[localStyles.floating]}>
        <Animated.View style={[localStyles.nav, {backgroundColor: bgColor}]}>
          <TouchableOpacity onPress={() => {this.openUrl('https://github.com/GetWala/alchemy-ui')}}>
            <Container justifyContent={'center'} style={localStyles.headerButton}>
              <SmallDisplay color={'white'}>Github</SmallDisplay>
            </Container>
          </TouchableOpacity>
          <Animated.View style={{flex: 1, alignItems: 'center', justifyContent: 'center', opacity: opacity}}>
            <Logomark variation={'alchemyWhite'} imgHeight={26} />
          </Animated.View>
          <TouchableOpacity onPress={() => {this.openUrl('https://alchemy.gitbook.io/docs/')}}>
            <Container alignItems={'flex-end'} justifyContent={'center'} style={localStyles.headerButton}>
              <SmallDisplay color={'white'}>Docs</SmallDisplay>
            </Container>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{opacity: opacity}}>
          <GradientContainer
            colors={[
              AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade1, 0.5),
              AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade1, 0)
            ]}
            gradientDirection={'vertical'}
            style={{height: 4}}
          />
        </Animated.View>
      </Container>
    );
  }
}

HomeNav.defaultProps = {};

HomeNav.propTypes = {};

const localStyles = StyleSheet.create({
  floating: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
    width: '100%'
  },
  nav: {
    flexDirection: 'row',
    height: AUI_FUNCTIONS.gridBaseMultiplier(4),
  },
  navStateOpaque: {
    elevation: 5,
    backgroundColor: AUI_COLORS.WalaTeal.hex
  },
  navStateTransparent: {
    backgroundColor: 'transparent'
  },
  headerButton: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(4),
    paddingHorizontal: AUI_CONSTANTS.gridBase,
    width: 78
  }
});
