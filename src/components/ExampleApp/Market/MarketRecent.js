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

export default class MarketRecent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteTransaction: false
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
              <CategoryHeader label={'06 JAN 2019'} />
              <Spacer />
              <MarketTransactionItem
                provider={'Stark Industries'}
                productName={'Wearable Nanotechnology'}
                price={'đ 60,770.00000000'}
                onPress={() => {
                  ToastAndroid.showWithGravity(
                    'This would open a product details overlay',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  )
                }}
                statusComponent={<Icons iconName={'user-astronaut'} iconSet={'font-awesome'} iconSize={24} iconColor={AUI_COLORS.CuriousBlue.tint2} />}
                swipeActions={[
                  {
                    label: 'Save',
                    onPress: () => {
                      ToastAndroid.showWithGravity(
                        'This would save this transaction for later quick re-purchase...',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                      )
                    },
                    iconName: 'save',
                    iconSet: 'font-awesome'
                  },
                ]}
                bounceOnMount
              />
              <Spacer dense />
              <CategoryHeader label={'03 JAN 2019'} />
              <Spacer />
              {!this.state.deleteTransaction &&
                <MarketTransactionItem
                  provider={'Pym Technologies'}
                  productName={'Pym Particles'}
                  price={'đ 4,000,000.00000000'}
                  onPress={() => {
                    ToastAndroid.showWithGravity(
                      'This would open a product details overlay',
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER
                    )
                  }}
                  statusComponent={<Icons iconName={'times-circle'} iconSet={'font-awesome'} iconSize={24} iconColor={AUI_COLORS.TorchRed.hex} />}
                  swipeActions={[
                    {
                      label: 'RETRY',
                      onPress: () => {
                        ToastAndroid.showWithGravity(
                          'This would open a pre-filled checkout screen...',
                          ToastAndroid.SHORT,
                          ToastAndroid.CENTER
                        )
                      },
                      iconName: 'market',
                    },
                    {
                      label: 'Delete',
                      onPress: () => {
                        this.setState({deleteTransaction: true});
                      },
                      iconName: 'times',
                      iconSet: 'font-awesome',
                      buttonType: 'negative'
                    }
                  ]}
                  bounceOnMount
                />
              }
              <MarketTransactionItem
                provider={'Rand Enterprises'}
                productName={'Hand Moisturizer'}
                price={'đ 76.99000000'}
                onPress={() => {
                  ToastAndroid.showWithGravity(
                    'This would open a product details overlay',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  )
                }}
                statusComponent={<Icons iconName={'fist-raised'} iconSet={'font-awesome'} iconSize={24} iconColor={AUI_COLORS.WalaTeal.hex} />}
                swipeActions={[
                  {
                    label: 'Save',
                    onPress: () => {
                      ToastAndroid.showWithGravity(
                        'This would save this transaction for later quick re-purchase...',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                      )
                    },
                    iconName: 'save',
                    iconSet: 'font-awesome'
                  },
                ]}
                bounceOnMount
              />
              <Spacer dense />
              <CategoryHeader label={'15 DEC 2018'} />
              <Spacer />
              <MarketTransactionItem
                provider={'Tivan Group'}
                productName={'Red, Shiny Gem'}
                price={'đ 12,000,000,000.00000000'}
                onPress={() => {
                  ToastAndroid.showWithGravity(
                    'This would open a product details overlay',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  )
                }}
                statusComponent={<Icons iconName={'gem'} iconSet={'font-awesome'} iconSize={24} iconColor={AUI_COLORS.TorchRed.tint2} />}
                swipeActions={[
                  {
                    label: 'Save',
                    onPress: () => {
                      ToastAndroid.showWithGravity(
                        'This would save this transaction for later quick re-purchase...',
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                      )
                    },
                    iconName: 'save',
                    iconSet: 'font-awesome'
                  },
                ]}
                bounceOnMount
              />
              <Spacer />
            </ScrollView>
          </Container>
        </GradientContainer>
      </ImageContainer>
    );
  }
}

MarketRecent.defaultProps = {};

MarketRecent.propTypes = {};

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
