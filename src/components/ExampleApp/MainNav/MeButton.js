import React, {Component} from 'react';
import {StyleSheet, TouchableNativeFeedback, ToastAndroid} from 'react-native';
import {
  Container,
  AUI_FUNCTIONS, Icons
} from 'alchemyUI';

export default class MeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <TouchableNativeFeedback onPress={() => {
        ToastAndroid.showWithGravity(
          'This would open a settings page...',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        )
      }}>
        <Container style={{width: AUI_FUNCTIONS.gridBaseMultiplier(4), height: AUI_FUNCTIONS.gridBaseMultiplier(4)}} alignItems={'center'} justifyContent={'center'}>
          <Icons iconName={'bars'} iconSet={'font-awesome-regular'} iconColor={'white'} iconSize={21} />
        </Container>
      </TouchableNativeFeedback>
    );
  }
}

MeButton.defaultProps = {};

MeButton.propTypes = {};

const localStyles = StyleSheet.create({});
