import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView, ViewPagerAndroid, View, BackHandler, ToastAndroid} from 'react-native';
import {
  Container,
  Headline,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS,
  GradientContainer,
  ImageContainer,
  Caption,
  Subheadline,
  Spacer,
  CountryInput,
  Icons,
  CategoryHeader,
  Divider, PhoneInput, CallToActionButton, TextField, BusyOverlay
} from 'alchemyUI';
import _ from 'lodash';

import {marketItems} from "./maketItems";

const Handlers = {};
function subscribe(eventName, subscriber) {
  if (Handlers[eventName]) {
    Handlers[eventName].push(subscriber);
  } else {
    Handlers[eventName] = [subscriber];
  }
  return () => {
    Handlers[eventName] = _.without(Handlers[eventName], subscriber);
  };
}

let unsubscribe = () => {};

export default class MarketBrowse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: 'US',
      selectedPhoneCountry: 'US',
      selectedProvider: '',
      selectedProduct: {
        category: '',
        productName: '',
        price: '',
        convertedPrice: ''
      },
      mobileNumber: '',
      accountNumber: '',
      providers: [],
      products: [],
      step: 0
    };

    this._step.bind(this);
  }

  componentWillMount() {
    unsubscribe = subscribe('BACK', this.customBackHandler.bind(this));
    this.androidBackHandler = this.backHandler.bind(this);
    BackHandler.addEventListener('hardwareBackPress', this.androidBackHandler);
  }

  componentDidMount(): void {
    this.refreshProviders(this.state.selectedCountry);
  }

  componentWillUnmount() {
    unsubscribe();
    BackHandler.removeEventListener('hardwareBackPress', this.androidBackHandler);
  }

  _step(num) {
    if (this._pager) {
      this.setState({ step: num });
      this._pager.setPage(num);
    }
  }

  backHandler() {
    if (this.state.step > 0) {
      this._step.call(this, this.state.step - 1);
      return true;
    }
    return false;
  }

  customBackHandler() {
    if (this.state.step > 0) {
      this._step.call(this, this.state.step - 1);
      return;
    }
    this.props.navigation.goBack();
  }

  refreshProviders = (country) => {
    let providersForSelectedCountry = marketItems.filter((provider) => {
      return provider.country === country;
    });
    this.setState({providers: providersForSelectedCountry});
  };

  makePurchase = () => {
    this.busyOverlay._open();
    setTimeout(() => {
      this.busyOverlay._close();
      ToastAndroid.showWithGravity(
        'Your purchase would appear in this list...',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      )
      this.props.navigation.navigate('MarketRecentScreen');
    }, 2500)
  };

  render() {
    return (
      <ImageContainer isFlex source={require('../../../../resources/img/wala_bg_blur.png')}>
        <GradientContainer colors={[AUI_COLORS.TorchRed.getRgba(0.3), AUI_COLORS.ScampiPurple.getRgba(0.3)]} isFlex>
          <Container style={localStyles.availableBalance} actAsRow alignItems={'center'}>
            <Spacer horizontal />
            <Caption isFlex color={AUI_COLORS.ScampiPurple.tint4}>AVAILABLE BALANCE</Caption>
            <Subheadline dense color={'white'}>đ 5,250,099.00000000</Subheadline>
            <Spacer horizontal />
          </Container>
          <ViewPagerAndroid
            ref={viewPager => (this._pager = viewPager)}
            scrollEnabled={false}
            style={{flex: 1}}
          >
            <View>
              <ScrollView>
                <Spacer />
                <Container style={[AUI_LAYOUT.presets.card, {paddingHorizontal: AUI_CONSTANTS.gridBase}]} variation={'card'}>
                  <Spacer dense />
                  <CountryInput
                    cca2={this.state.selectedCountry}
                    countries={['US', 'JP', 'CN']}
                    onChange={(country) => {
                      this.setState({selectedCountry: country.cca2, selectedPhoneCountry: country.cca2});
                      this.refreshProviders(country.cca2);
                    }}
                    searchable
                    closeable
                  />
                </Container>
                <Subheadline alignCenter color={'white'} style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>Providers</Subheadline>
                {this.state.providers.map((provider, idx) => {
                  return (
                    <TouchableNativeFeedback key={idx} onPress={() => {
                      this.setState({
                        selectedProvider: provider.provider,
                        products: this.state.providers[idx].products
                      });
                      this._step(1);
                    }}>
                      <Container style={[AUI_LAYOUT.presets.card, {marginBottom: 4}]} variation={'wide'}>
                        <Container actAsRow alignItems={'center'}>
                          <Subheadline isFlex color={AUI_COLORS.Charcoal.hex} style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>{provider.provider}</Subheadline>
                          <Icons iconName={'chevron-right'} iconColor={AUI_COLORS.WalaTeal.hex} iconSize={21} iconSet={'font-awesome'} />
                        </Container>
                      </Container>
                    </TouchableNativeFeedback>
                  );
                })}
              </ScrollView>
            </View>
            <View>
              <ScrollView>
                <Subheadline alignCenter color={'white'} style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>{this.state.selectedProvider}</Subheadline>
                {this.state.products.map((product, idx) => {
                  let ps = [];
                  ps.push(
                    <Container key={idx}>
                      <CategoryHeader label={product.category} />
                      <Spacer />
                    </Container>
                  );
                  product.items.map((item, idx2) => {
                    ps.push(
                      <TouchableNativeFeedback key={idx2} onPress={() => {
                        this.setState({
                          selectedProduct: {
                            category: product.category,
                            productName: item.productName,
                            price: item.price,
                            convertedPrice: item.convertedPrice
                          },
                        });
                        this._step(2);
                      }}>
                        <Container variation={'wide'} style={[AUI_LAYOUT.presets.card, {marginBottom: 4}]}>
                          <Container actAsRow alignItems={'center'}>
                            <Subheadline color={AUI_COLORS.Charcoal.hex} isFlex style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(3)}}>{item.productName}</Subheadline>
                            <Icons iconName={'chevron-right'} iconSet={'font-awesome'} iconSize={16} iconColor={AUI_COLORS.WalaTeal.hex} />
                          </Container>
                          <Divider extendLeftToFillContainer={9} extendRightToFillContainer={9} />
                          <Container actAsRow alignItems={'center'}>
                            <Caption isFlex style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>PRICE</Caption>
                            <Container alignItems={'flex-end'}>
                              <Subheadline color={AUI_COLORS.Charcoal.hex} style={{marginBottom: -4}}>{item.price}</Subheadline>
                              <Caption color={AUI_COLORS.ScampiPurple.hex}>{item.convertedPrice}</Caption>
                            </Container>
                          </Container>
                        </Container>
                      </TouchableNativeFeedback>
                    );
                  });
                  ps.push(<Container style={{marginBottom: 9}} />);
                  return ps;
                })}
              </ScrollView>
            </View>
            <View>
              <ScrollView>
                <Spacer />
                <Container style={[AUI_LAYOUT.presets.card, {paddingHorizontal: AUI_CONSTANTS.gridBase}]} variation={'card'}>
                  <Spacer />
                  <Container actAsRow>
                    <Container isFlex>
                      <Caption color={AUI_COLORS.Charcoal.hex} style={{marginBottom: -4}}>{this.state.selectedProvider}</Caption>
                      <Subheadline color={AUI_COLORS.Charcoal.hex}>{this.state.selectedProduct.productName}</Subheadline>
                    </Container>
                    <Icons iconName={'market'} iconColor={AUI_COLORS.WalaTeal.hex} iconSize={16} />
                  </Container>
                  <Spacer />
                  <Container actAsRow>
                    <Caption isFlex>LISTED PRICE</Caption>
                    <Container alignItems={'flex-end'}>
                      <Subheadline color={AUI_COLORS.Charcoal.hex} style={{marginBottom: -4}}>{this.state.selectedProduct.price}</Subheadline>
                      <Caption color={AUI_COLORS.ScampiPurple.hex}>{this.state.selectedProduct.convertedPrice}</Caption>
                    </Container>
                  </Container>
                  <Spacer />
                </Container>
                <Spacer />
                <CategoryHeader label={'Optional info'} />
                <Spacer />
                <Container style={[AUI_LAYOUT.presets.card, {paddingHorizontal: AUI_CONSTANTS.gridBase}]} variation={'wide'}>
                  <Spacer />
                  <PhoneInput
                    searchable
                    closeable
                    cca2={this.state.selectedPhoneCountry}
                    onChangeCountry={(country) => {
                      this.setState({
                        selectedPhoneCountry: country.cca2
                      });
                    }}
                    onChangePhoneText={(phone) => {
                      this.setState({mobileNumber: phone});
                    }}
                    countries={['US', 'JP', 'CN', 'SA', 'UG']}
                    phoneNumber={this.state.mobileNumber}
                  />
                  <Spacer />
                  <TextField value={this.setState.accountNumber} label={'Account Number'} onChangeText={(value) => {
                      this.setState({
                        accountNumber: value
                      });
                    }}
                  />
                  <Spacer />
                </Container>
                <Spacer />
              </ScrollView>
              <Container style={{backgroundColor: 'white', paddingHorizontal: AUI_CONSTANTS.gridBase}}>
                <Spacer />
                <CallToActionButton onPress={() => {this._step(3)}} label={'Go to Checkout'}/>
                <Spacer />
              </Container>
            </View>
            <View>
              <Container isFlex>
                <Spacer />
                <Container style={[AUI_LAYOUT.presets.card, {paddingHorizontal: AUI_CONSTANTS.gridBase}]} variation={'card'}>
                  <Spacer />
                  <Container actAsRow>
                    <Container isFlex>
                      <Caption color={AUI_COLORS.Charcoal.hex} style={{marginBottom: -4}}>{this.state.selectedProvider}</Caption>
                      <Subheadline color={AUI_COLORS.Charcoal.hex}>{this.state.selectedProduct.productName}</Subheadline>
                    </Container>
                    <Icons iconName={'market'} iconColor={AUI_COLORS.WalaTeal.hex} iconSize={16} />
                  </Container>
                  <Spacer />
                  <Container actAsRow>
                    <Caption isFlex>LISTED PRICE</Caption>
                    <Container alignItems={'flex-end'}>
                      <Subheadline color={AUI_COLORS.Charcoal.hex} style={{marginBottom: -4}}>{this.state.selectedProduct.price}</Subheadline>
                      <Caption color={AUI_COLORS.ScampiPurple.hex}>{this.state.selectedProduct.convertedPrice}</Caption>
                    </Container>
                  </Container>
                  <Spacer />
                  <Divider extendRightToFillContainer={AUI_CONSTANTS.gridBase} extendLeftToFillContainer={AUI_CONSTANTS.gridBase} />
                  {(this.state.mobileNumber !== '' || this.state.accountNumber !== '') &&
                  <Container actAsRow>
                    <Container isFlex style={{borderRightWidth: 1, borderRightColor: AUI_COLORS.Silver.hex}}>
                      {this.state.mobileNumber !== '' &&
                      <Container actAsRow alignItems={'center'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(3), borderBottomWidth: 1, borderBottomColor: AUI_COLORS.Silver.hex}}>
                        <Caption isFlex>MOBILE NUMBER</Caption>
                        <Caption color={AUI_COLORS.Charcoal.hex}>{this.state.mobileNumber}</Caption>
                        <Spacer horizontal />
                      </Container>
                      }
                      {this.state.accountNumber !== '' &&
                      <Container actAsRow alignItems={'center'} style={{height: AUI_FUNCTIONS.gridBaseMultiplier(3)}}>
                        <Caption isFlex>ACCOUNT NUMBER</Caption>
                        <Caption color={AUI_COLORS.Charcoal.hex}>{this.state.accountNumber}</Caption>
                        <Spacer horizontal />
                      </Container>
                      }
                    </Container>
                    <TouchableNativeFeedback onPress={() => {this._step(2);}}>
                      <Container style={{width: 39, marginRight: -13}} alignItems={'center'} justifyContent={'center'}>
                        <Icons iconName={'pencil'} iconSet={'font-awesome'} iconColor={AUI_COLORS.WalaTeal.hex} iconSize={16} />
                      </Container>
                    </TouchableNativeFeedback>
                  </Container>
                  }
                  <Divider size={'large'} extendLeftToFillContainer={AUI_CONSTANTS.gridBase} extendRightToFillContainer={AUI_CONSTANTS.gridBase} />
                  <Container actAsRow alignItems={'center'}>
                    <Caption isFlex style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(5)}}>YOU PAY</Caption>
                    <Container alignItems={'flex-end'}>
                      <Subheadline color={AUI_COLORS.Charcoal.hex} style={{marginBottom: -4, fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold}}>{this.state.selectedProduct.price}</Subheadline>
                      <Caption color={AUI_COLORS.ScampiPurple.hex}>{this.state.selectedProduct.convertedPrice}</Caption>
                    </Container>
                  </Container>
                </Container>
              </Container>
              <Container style={{backgroundColor: 'white', paddingHorizontal: AUI_CONSTANTS.gridBase}}>
                <Spacer />
                <Container actAsRow>
                  <Container isFlex>
                    <CallToActionButton
                      onPress={() => {
                        ToastAndroid.showWithGravity(
                          'This would save the transaction for later...',
                          ToastAndroid.SHORT,
                          ToastAndroid.CENTER
                        )
                      }}
                      label={'Save for later'}
                      variation={'secondary'}
                    />
                  </Container>
                  <Spacer horizontal />
                  <Container isFlex>
                    <CallToActionButton onPress={() => {this.makePurchase()}} label={'Checkout'} />
                  </Container>
                </Container>
                <Spacer />
              </Container>
            </View>
          </ViewPagerAndroid>
        </GradientContainer>
        <BusyOverlay ref={busyOverlay => this.busyOverlay = busyOverlay} message={'Purchasing ' + this.state.selectedProduct.productName} />
      </ImageContainer>
    );
  }
}

const localStyles = StyleSheet.create({
  availableBalance: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    backgroundColor: AUI_COLORS.ScampiPurple.getRgba(0.7),
    elevation: 3
  }
});
