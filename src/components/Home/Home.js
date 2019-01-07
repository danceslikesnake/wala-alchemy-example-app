/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Animated} from 'react-native';
import {
  Container,
  Logomark,
  Headline,
  ImageContainer,
  AUI_TYPOGRAPHY,
  AUI_COLORS,
  Spacer,
  BodyText,
  Subheadline,
  CallToActionButton, AUI_CONSTANTS, Divider, TileActions, CaptionEmphasis
} from 'alchemyUI';

type Props = {};

const scrollRange = 150;

export default class Home extends Component<Props> {

  constructor(props) {
    super(props);

    this.animatedValue = new Animated.Value(0);
  }

  componentWillMount() {
    this.props.navigation.setParams({
      bgColor: this.animatedValue.interpolate({
        inputRange: [0, scrollRange],
        outputRange: ['transparent', AUI_COLORS.WalaTeal.hex],
        extrapolate: 'clamp',
      }),
      logoOpacity: this.animatedValue.interpolate({
        inputRange: [0, scrollRange],
        outputRange: [0, 1],
      })
    });
  }

  render() {
    return (
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.animatedValue } } }], // <-- tadaaa
        )}
        scrollEventThrottle={2}
      >
        <ImageContainer source={require('../../../resources/img/Home-Screen-BG.png')}>
          <Container alignItems={'center'} variation={'card'}>
            <Spacer />
            <Spacer dense />
            <Logomark variation={'alchemyWhite'} imgHeight={65} />
            <Spacer dense />
            <Headline color={'white'} style={{fontFamily: AUI_TYPOGRAPHY.Poppins.medium}}>alchemy</Headline>
            <BodyText color={'white'}>React Native UI Kit</BodyText>
          </Container>
          <Spacer dense />
          <ImageContainer
            style={{width: AUI_CONSTANTS.deviceWidth, height: AUI_CONSTANTS.deviceWidth * (210/360)}}
            source={require('../../../resources/img/example-app-home-phone.png')}
          />
        </ImageContainer>
        <Spacer dense />
        <Container variation={'card'}>
          <CallToActionButton
            onPress={() => {}}
            label={'View the Example App'}
            addArrow
          />
        </Container>
        <Spacer />
        <Divider size={'large'} />
        <Spacer dense />
        <Subheadline alignCenter color={AUI_COLORS.ScampiPurple.shade1}>Compounds</Subheadline>
        <Spacer dense />
        <CaptionEmphasis alignCenter style={{marginHorizontal: AUI_CONSTANTS.gridBase}}>A quick explainer here</CaptionEmphasis>
        <Spacer />
        <Spacer dense />
        <Divider />
        <TileActions
          tiles={[
            {
              label: 'Accounts',
              onPress: () => {this.props.navigation.navigate('Accounts')},
              iconName: 'accounts'
            },
            {
              label: 'Connections',
              onPress: () => {this.props.navigation.navigate('Connections')},
              iconName: 'connections'
            },
            {
              label: 'Earn',
              onPress: () => {this.props.navigation.navigate('Earn')},
              iconName: 'dala-icon'
            },
            {
              label: 'Market',
              onPress: () => {this.props.navigation.navigate('Market')},
              iconName: 'market'
            },
            {
              label: 'Timeline',
              onPress: () => {this.props.navigation.navigate('Timeline')},
              iconName: 'timeline'
            },
            {
              label: 'Universal',
              onPress: () => {this.props.navigation.navigate('Universal')},
              iconName: 'globe',
              iconSet: 'font-awesome-regular'
            }
          ]}
          rowCount={3}
        />
        <Spacer />
        <Subheadline alignCenter color={AUI_COLORS.ScampiPurple.shade1}>Elements</Subheadline>
        <Spacer dense />
        <CaptionEmphasis alignCenter style={{marginHorizontal: AUI_CONSTANTS.gridBase}}>A quick explainer here</CaptionEmphasis>
        <Spacer />
        <Spacer dense />
        <Divider />
        <TileActions
          tiles={[
            {
              label: 'Colors',
              onPress: () => {this.props.navigation.navigate('Colors')},
              iconName: 'palette',
              iconSet: 'font-awesome'
            },
            {
              label: 'Content',
              onPress: () => {this.props.navigation.navigate('Content')},
              iconName: 'newspaper',
              iconSet: 'font-awesome'
            },
            {
              label: 'Icons',
              onPress: () => {this.props.navigation.navigate('Icons')},
              iconName: 'info-circle',
              iconSet: 'font-awesome-regular'
            },
            {
              label: 'Layout',
              onPress: () => {this.props.navigation.navigate('Layout')},
              iconName: 'th',
              iconSet: 'font-awesome-regular'
            },
            {
              label: 'Logos',
              onPress: () => {this.props.navigation.navigate('Logos')},
              iconName: 'draw-polygon',
              iconSet: 'font-awesome'
            },
            {
              label: 'Typography',
              onPress: () => {this.props.navigation.navigate('Typography')},
              iconName: 'font',
              iconSet: 'font-awesome'
            }
          ]}
          rowCount={3}
        />
      </Animated.ScrollView>
    );
  }
}
