import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView, ToastAndroid} from 'react-native';
import {
  Container,
  Headline,
  Icons,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS
} from 'alchemyUI';

export default class RightButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <Container actAsRow style={{width: AUI_FUNCTIONS.gridBaseMultiplier(8), height: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>
        <TouchableNativeFeedback onPress={() => {
          ToastAndroid.showWithGravity(
            'This would open an FAQ...',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          )
        }}>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Icons iconName={'help-center'} iconSize={21} iconColor={'rgba(255, 255, 255, 0.7)'} />
          </Container>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => {
          ToastAndroid.showWithGravity(
            'This would open the notifications...',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          )
        }}>
          <Container isFlex justifyContent={'center'} alignItems={'center'}>
            <Icons iconName={'bell'} iconSet={'font-awesome-regular'} iconSize={21} iconColor={'rgba(255, 255, 255, 0.7)'} />
          </Container>
        </TouchableNativeFeedback>
      </Container>
    );
  }
}

RightButtons.defaultProps = {};

RightButtons.propTypes = {};

const localStyles = StyleSheet.create({});
