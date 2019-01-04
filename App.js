/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {AUI_COLORS, Container} from "alchemyUI";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/components/Home/Home';
import HomeNav from './src/components/Home/HomeNav';

const RootStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
  }
);

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