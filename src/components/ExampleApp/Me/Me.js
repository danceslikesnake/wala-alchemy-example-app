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
  AUI_FUNCTIONS
} from 'alchemyUI';

export default class Me extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <Headline>Hello</Headline>
      </Container>
    );
  }
}

Me.defaultProps = {};

Me.propTypes = {};

const localStyles = StyleSheet.create({});
