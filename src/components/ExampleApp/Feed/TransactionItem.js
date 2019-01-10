import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ToastAndroid, TouchableNativeFeedback} from 'react-native';
import {
  Container,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, Avatar, Spacer, Subheadline, Icons, SmallDisplay, Caption
} from 'alchemyUI';

export default class TransactionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    const {
      senderAvatar,
      senderName,
      receiverAvatar,
      receiverName,
      transactionType,
      amount,
      marketPurchaseName
    } = this.props;

    let lineHeight = transactionType === 'purchase' ? AUI_FUNCTIONS.gridBaseMultiplier(4) : AUI_FUNCTIONS.gridBaseMultiplier(3);
    return (
      <TouchableNativeFeedback onPress={() => {
        ToastAndroid.showWithGravity(
          'This would open a transaction detail..',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        )
      }}>
        <Container variation={'card'} style={[AUI_LAYOUT.presets.card]}>
          <Container style={[localStyles.transactionCardHeader, {borderBottomColor: transactionType === 'received' ? AUI_COLORS.WalaTeal.tint2 : AUI_COLORS.TorchRed.tint2}]} actAsRow alignItems={'center'}>
            <Avatar
              variation={'image'}
              size={'tiny'}
              imageSource={{uri: senderAvatar}}
            />
            <Spacer dense horizontal />
            <Subheadline dense color={AUI_COLORS.Charcoal.hex} isFlex>{senderName}</Subheadline>
            <Icons iconName={'arrow-alt-right'} iconSet={'font-awesome'} iconSize={16} iconColor={transactionType === 'received' ? AUI_COLORS.WalaTeal.tint2 : AUI_COLORS.TorchRed.tint2} />
            <Subheadline dense color={AUI_COLORS.Charcoal.hex} isFlex alignRight>{receiverName}</Subheadline>
            <Spacer dense horizontal />
            <Avatar
              variation={'image'}
              size={'tiny'}
              imageSource={{uri: receiverAvatar}}
            />
          </Container>
          <Container style={[localStyles.transactionHeaderBody]} actAsRow alignItems={'center'}>
            <Container>
              <SmallDisplay color={transactionType === 'received' ? AUI_COLORS.WalaTeal.tint2 : AUI_COLORS.TorchRed.tint2}>{transactionType}</SmallDisplay>
              {transactionType === 'purchase' &&
              <Caption dense>{marketPurchaseName}</Caption>
              }
            </Container>
            <Subheadline isFlex color={AUI_COLORS.Charcoal.hex} style={{lineHeight: lineHeight}} alignRight>{amount}</Subheadline>
          </Container>
        </Container>
      </TouchableNativeFeedback>
    );
  }
}

TransactionItem.propTypes = {
  senderAvatar: PropTypes.string,
  senderName: PropTypes.string,
  receiverAvatar: PropTypes.string,
  receiverName: PropTypes.string,
  transactionType: PropTypes.oneOf(['received', 'sent', 'purchase']),
  amount: PropTypes.string,
  marketPurchaseName: PropTypes.string
};

const localStyles = StyleSheet.create({
  transactionCardHeader: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    borderBottomWidth: 1,
    paddingHorizontal: AUI_CONSTANTS.gridBase
  },
  transactionHeaderBody: {
    paddingHorizontal: AUI_CONSTANTS.gridBase
  }
});
