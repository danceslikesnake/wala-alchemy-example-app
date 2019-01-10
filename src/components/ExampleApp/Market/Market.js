import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView, ToastAndroid} from 'react-native';
import {
  Container,
  GradientContainer,
  ImageContainer,
  Headline,
  Spacer,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, ActionCard, CategoryHeader, MarketTransactionItem, Icons
} from 'alchemyUI';

export default class Market extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSavedTransaction: true
    };
  }


  render() {
    return (
      <ImageContainer isFlex source={require('../../../../resources/img/wala_bg_blur.png')}>
        <GradientContainer isFlex colors={[AUI_COLORS.CuriousBlue.getRgba(0.75), AUI_COLORS.ScampiPurple.getRgba(0.75)]}>
          <Spacer multiplier={7} />
          <Container isFlex style={localStyles.mainWrapper}>
            <GradientContainer
              colors={[
                AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade2, 0.4),
                AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade2, 0)
              ]}
              gradientDirection={'vertical'}
              style={localStyles.dropShadow}/>
            <ScrollView>
              <Spacer />
              <ActionCard
                description={'Purchase airtime, pay your bills, and much more, all with zero-fees!'}
                headline={'Spend Your Dala'}
                onPress={() => {
                  this.props.navigation.navigate('BrowseMarket');
                }}
                denseCopy
                accentColor={AUI_COLORS.CuriousBlue.tint2}
                image={{uri: 'https://i.imgur.com/eN2qiCs.png'}}
                imageAccentOpacity={0.7}
              />
              <Spacer />
              {this.state.showSavedTransaction &&
                <Container>
                  <CategoryHeader label={'Weapons'} />
                  <Spacer />
                  <MarketTransactionItem
                    provider={'Stark Industries'}
                    productName={'Wearable Nanotechnology'}
                    price={'đ 4,000,000.00000000'}
                    onPress={() => {
                      ToastAndroid.showWithGravity(
                        'This would open a pre-filled checkout screen...',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                      )
                    }}
                    swipeActions={[
                      {
                        label: 'Delete',
                        onPress: () => {
                          this.setState({showSavedTransaction: false});
                        },
                        iconName: 'times',
                        iconSet: 'font-awesome',
                        buttonType: 'negative'
                      }
                    ]}
                    bounceOnMount
                    statusComponent={<Icons iconName={'user-astronaut'} iconSet={'font-awesome'} iconSize={24} iconColor={AUI_COLORS.CuriousBlue.tint2} />}
                  />
                </Container>
              }
            </ScrollView>
          </Container>
        </GradientContainer>
      </ImageContainer>
    );
  }
}

Market.defaultProps = {};

Market.propTypes = {};

const localStyles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: AUI_COLORS.Charcoal.getRgba(0.05),
    position: 'relative'
  },
  dropShadow: {
    position: 'absolute',
    height: AUI_CONSTANTS.gridBaseDense,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
});
