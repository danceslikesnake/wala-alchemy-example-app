import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView, Animated, View} from 'react-native';
import {
  Container,
  Headline,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, SmallDisplay
} from 'alchemyUI';

export default class HomeNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColorShow: false
    };
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    //console.warn(this.props.navigation.state.routes[0].params.scrollPos);
    if(this.props.navigation.state.routes[0].params.scrollPos > 100) {
      if(!this.state.bgColorShow) {
        this.setState({
          bgColorShow: true
        });
      }
    } else {
      if(this.state.bgColorShow) {
        this.setState({
          bgColorShow: false
        });
      }
    }
  }

  render() {
    return (
      <Animated.View style={[localStyles.floatingNav, this.state.bgColorShow ? localStyles.navStateOpaque : localStyles.navStateTransparent]}>
        <TouchableNativeFeedback onPress={() => {}}>
          <Container alignItems={'center'} justifyContent={'center'} style={localStyles.headerButton}>
            <SmallDisplay color={'white'}>Github</SmallDisplay>
          </Container>
        </TouchableNativeFeedback>
        <Container isFlex />
        <TouchableNativeFeedback onPress={() => {}}>
          <Container alignItems={'center'} justifyContent={'center'} style={localStyles.headerButton}>
            <SmallDisplay color={'white'}>Docs</SmallDisplay>
          </Container>
        </TouchableNativeFeedback>
      </Animated.View>
    );
  }
}

HomeNav.defaultProps = {};

HomeNav.propTypes = {};

const localStyles = StyleSheet.create({
  floatingNav: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: AUI_FUNCTIONS.gridBaseMultiplier(4),
    width: '100%',
    zIndex: 100,
    flexDirection: 'row'
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
    paddingHorizontal: AUI_CONSTANTS.gridBase
  }
});
