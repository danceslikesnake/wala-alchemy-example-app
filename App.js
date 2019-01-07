/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {AUI_COLORS, Container} from "alchemyUI";
import { createAppContainer } from 'react-navigation';

import {RootStack} from './src/navigation/navigation';

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <Container isFlex>
        <StatusBar backgroundColor={AUI_COLORS.WalaTeal.shade2} />
        <AppContainer />
      </Container>
    );
  }
}