/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView, StatusBar, Animated} from 'react-native';
import {
  Container,
  Logomark,
  Headline,
  ImageContainer,
  AUI_TYPOGRAPHY,
  AUI_COLORS,
  AUI_FUNCTIONS,
  Spacer,
  BodyText,
  GradientContainer,
  AUI_LAYOUT,
  SmallDisplay,
  Subheadline,
  CallToActionButton, AUI_CONSTANTS, Divider, TileActions, CaptionEmphasis
} from 'alchemyUI';
import HomeNav from './HomeNav';

type Props = {};

export default class Home extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      header: props => <HomeNav {...props} />
    }
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.navigation.setParams({
      scrollPos: 0
    });
  }

  handleScroll = (event: Object) => {
    this.props.navigation.setParams({
      scrollPos: event.nativeEvent.contentOffset.y
    });
  };

  render() {
    return (
      <ScrollView
        onScroll={this.handleScroll}
        scrollEventThrottle={16}
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
              onPress: () => {},
              iconName: 'palette',
              iconSet: 'font-awesome'
            },
            {
              label: 'Content',
              onPress: () => {},
              iconName: 'newspaper',
              iconSet: 'font-awesome'
            },
            {
              label: 'Icons',
              onPress: () => {},
              iconName: 'info-circle',
              iconSet: 'font-awesome-regular'
            },
            {
              label: 'Layout',
              onPress: () => {},
              iconName: 'th',
              iconSet: 'font-awesome-regular'
            },
            {
              label: 'Logos',
              onPress: () => {},
              iconName: 'draw-polygon',
              iconSet: 'font-awesome'
            },
            {
              label: 'Typography',
              onPress: () => {},
              iconName: 'font',
              iconSet: 'font-awesome'
            }
          ]}
          rowCount={3}
        />
        <Spacer />
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
              onPress: () => {},
              iconName: 'accounts'
            },
            {
              label: 'Connections',
              onPress: () => {},
              iconName: 'connections'
            },
            {
              label: 'Earn',
              onPress: () => {},
              iconName: 'dala-icon'
            },
            {
              label: 'Market',
              onPress: () => {},
              iconName: 'market'
            },
            {
              label: 'Timeline',
              onPress: () => {},
              iconName: 'timeline'
            },
            {
              label: 'Universal',
              onPress: () => {},
              iconName: 'accounts'
            }
          ]}
          rowCount={3}
        />
      </ScrollView>
    );
  }
}
