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
  AUI_FUNCTIONS, GradientContainer, Icons, Subheadline, Display, Caption, Spacer, SmallDisplay
} from 'alchemyUI';
import Modal from 'react-native-modal';
import SendDalaModal from './SendDalaModal';

export default class QuickActionsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openQuickActions: false
    };
  }

  _openQuickActionsOverlay = () => {
    this.setState({
      openQuickActions: true,
    });
  };

  _closeQuickActionsOverlay = () => {
    this.setState({
      openQuickActions: false,
    });
  };

  render() {
    return (
      <Container>
        <Modal
          isVisible={this.state.openQuickActions}
          onRequestClose={this._closeQuickActionsOverlay}
          backdropColor={'transparent'}
          style={{ margin: 0 }}
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationOutTiming={200}
        >
          <GradientContainer
            isFlex
            colors={[
              AUI_COLORS.WalaTeal.getRgba(0.97),
              AUI_COLORS.ScampiPurple.getRgba(0.97),
            ]}
          >
            <GradientContainer
              colors={[
                AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade2, 0.25),
                AUI_COLORS.ScampiPurple.getRgba(0)
              ]}
              gradientDirection={'vertical'}
              style={{height: AUI_CONSTANTS.gridBase}}
            />
            <Container isFlex justifyContent={'center'} style={{paddingHorizontal: AUI_CONSTANTS.gridBase}}>
              <Subheadline color={'white'} style={{fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold}} alignCenter>Your Dala Balance</Subheadline>
              <Display alignCenter color={'white'}>đ 5,250,099.00000000</Display>
              <Caption color={'white'} alignCenter>≈ USD 375,033.09</Caption>
              <Spacer />
              <TouchableNativeFeedback
                onPress={() => {
                  this.setState({openQuickActions: false});
                  this.props.navigation.navigate('BuyDala');
                }}
              >
                <Container style={{backgroundColor: AUI_COLORS.Charcoal.getRgba(0.2), padding: AUI_CONSTANTS.gridBaseDense, borderRadius: 3}}>
                  <Container style={{backgroundColor: AUI_COLORS.WalaTeal.hex, height: AUI_FUNCTIONS.gridBaseMultiplier(4), borderRadius: 3, elevation: 2}} justifyContent={'center'}>
                    <Display alignCenter color={'white'}>Buy More Dala</Display>
                  </Container>
                </Container>
              </TouchableNativeFeedback>
              <Spacer />
              <Container style={{height: 1, backgroundColor: AUI_COLORS.WalaTeal.tint1}} />
              <Spacer />
              <SmallDisplay alignCenter color={'white'}>Ways to Use Your Dala</SmallDisplay>
              <Spacer />
              <Container actAsRow>
                <TouchableNativeFeedback onPress={() => {
                  this.setState({openQuickActions: false});
                  this.sendDala._openSendDalaOverlay();
                }}>
                  <Container isFlex style={{borderRadius: 3, height: AUI_FUNCTIONS.gridBaseMultiplier(5), backgroundColor: 'rgba(255, 255, 255, 0.15)'}} justifyContent={'center'} alignItems={'center'}>
                    <Icons iconName={'send-dala'} iconColor={'white'} iconSize={26} containerStyles={{marginBottom: 6}} />
                    <SmallDisplay color={'white'}>Send It</SmallDisplay>
                  </Container>
                </TouchableNativeFeedback>
                <Spacer horizontal />
                <TouchableNativeFeedback onPress={() => {
                  this.setState({openQuickActions: false});
                  this.props.navigation.navigate('BrowseMarket');
                }}>
                  <Container isFlex style={{borderRadius: 3, height: AUI_FUNCTIONS.gridBaseMultiplier(5), backgroundColor: 'rgba(255, 255, 255, 0.15)'}} justifyContent={'center'} alignItems={'center'}>
                    <Icons iconName={'market'} iconColor={'white'} iconSize={26} containerStyles={{marginBottom: 6}} />
                    <SmallDisplay color={'white'}>Spend It</SmallDisplay>
                  </Container>
                </TouchableNativeFeedback>
              </Container>
            </Container>
            <GradientContainer
              colors={[
                AUI_COLORS.ScampiPurple.getRgba(0),
                AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade2, 0.4),
              ]}
              gradientDirection={'vertical'}
              style={{height: AUI_CONSTANTS.gridBase}}
            />
            <Container style={{height: AUI_FUNCTIONS.gridBaseMultiplier(4), borderTopWidth: 1, borderTopColor: AUI_COLORS.ScampiPurple.tint1,}}>
              <TouchableNativeFeedback onPress={() => {
                this.setState({
                  openQuickActions: false
                });
              }}>
                <Container isFlex alignItems={'center'} justifyContent={'center'}>
                  <Icons iconName={'times'} iconSet={'font-awesome-regular'} iconColor={'white'} iconSize={39} />
                </Container>
              </TouchableNativeFeedback>
            </Container>
          </GradientContainer>
        </Modal>
        <SendDalaModal
          ref={sendDala => this.sendDala = sendDala}
          {...this.props}
        />
      </Container>
    );
  }
}

QuickActionsModal.defaultProps = {};

QuickActionsModal.propTypes = {};

const localStyles = StyleSheet.create({});
