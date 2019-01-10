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
  AUI_FUNCTIONS,
  Avatar,
  Subheadline,
  Icons,
  Caption,
  TimelineFeedCard,
  TimelineFeedLikeAction,
  SmallDisplay,
  Display,
  Feedback, Dialog
} from 'alchemyUI';
import TransactionItem from './TransactionItem';

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _renderCardBody = () => {
    return(
      <ImageContainer source={{uri: 'https://i.imgur.com/rDZFb7f.jpg'}}>
        <GradientContainer colors={[AUI_COLORS.getRgbaFromHex('#266962', 0.7), AUI_COLORS.getRgbaFromHex('#dfddb2', 0.7)]}>
          <Spacer multiplier={5} />
          <Display alignCenter color={'white'}>Wakanda Forever</Display>
          <Spacer multiplier={5} />
        </GradientContainer>
      </ImageContainer>
    );
  };

  render() {
    return (
      <ImageContainer isFlex source={require('../../../../resources/img/wala_bg_blur.png')}>
        <GradientContainer isFlex colors={[AUI_COLORS.WalaTeal.getRgba(0.75), AUI_COLORS.TorchRed.getRgba(0.75)]}>
          <Spacer multiplier={4} />
          <ScrollView contentContainerStyle={{backgroundColor: AUI_COLORS.Charcoal.getRgba(0.05)}}>
            <Spacer />
            <Container variation={'card'} actAsRow alignItems={'center'}>
              <Avatar
                imageSource={{uri: 'https://i.imgur.com/kP0sXSb.jpg?1'}}
                variation={'image'}
                size={'small'}
              />
              <Spacer horizontal />
              <Subheadline fontFamily={'Poppins'} color={'white'}>Tony Stark</Subheadline>
            </Container>
            <Spacer />
            <TouchableNativeFeedback onPress={() => {
              ToastAndroid.showWithGravity(
                'This would open a transactions list...',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
              )
            }}>
              <Container variation={'card'} style={[localStyles.accountCard, AUI_LAYOUT.roundCorners]} actAsRow>
                <Spacer horizontal />
                <Container isFlex style={localStyles.summaryData}>
                  <Caption color={AUI_COLORS.WalaTeal.tint4} style={{marginBottom: -4}}>Dala Wallet</Caption>
                  <Subheadline color={'white'} style={{marginBottom: -4}}>đ 5,250,099.00000000</Subheadline>
                  <Caption color={'white'}>≈ USD 375,033.09</Caption>
                </Container>
                <Spacer horizontal />
                <Container alignItems={'center'} justifyContent={'center'}>
                  <Icons iconName={'chevron-right'} iconSet={'font-awesome'} iconColor={'white'} iconSize={24} />
                </Container>
                <Spacer horizontal />
              </Container>
            </TouchableNativeFeedback>
            <Caption alignCenter color={'white'} fontFamily={'Poppins'} style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(3)}}>07 JAN 2019</Caption>
            <TimelineFeedCard
              cardBorderColor={AUI_COLORS.ScampiPurple.tint2}
              headerText={'Did You Know'}
              headerTextColor={AUI_COLORS.ScampiPurple.tint2}
              renderHeaderMenu={[
                {
                  label: 'Thoughts on Jewels',
                  onPress: () => this.dialog._openDialog()
                },
                {
                  label: 'Thoughts on Loss',
                  onPress: () => {this.feedback._openFeedback()}
                }
              ]}
              bodyImage={{uri: 'https://i.imgur.com/NZFwEJd.jpg'}}
              bodyImageAspectRatio={AUI_LAYOUT.aspectRatios.narrow}
              bodyInsetIcon={<Icons iconName={'hand-rock'} iconSet={'font-awesome'} iconSize={26} />}
              bodyHeadline={'You Won\'t Believe This Crazy Idea to Save the Universe'}
              bodyDescription={'"It\'ll be a snap," claims a bejeweled would-be savior.'}
              callToActionOnPress={() => {
                ToastAndroid.showWithGravity(
                  'This would open an article detail...',
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER
                )
              }}
              callToActionLabel={'Find out how'}
              footerActions={[
                {
                  component: <TimelineFeedLikeAction
                    onPress={() => {}}
                    isLiked={this.state.isLiked}
                  />
                }
              ]}
            />
            <Spacer dense />
            <TransactionItem
              amount={'đ 3,500.00005599'}
              senderAvatar={'https://i.imgur.com/5stD6YX.jpg?1'}
              senderName={'Justin'}
              receiverAvatar={'https://i.imgur.com/kP0sXSb.jpg?1'}
              receiverName={'Me'}
              transactionType={'received'}
            />
            <Spacer dense />
            <TransactionItem
              amount={'đ 900,000.00000000'}
              senderAvatar={'https://i.imgur.com/kP0sXSb.jpg?1'}
              senderName={'Me'}
              receiverAvatar={'https://i.imgur.com/UtBxldf.jpg?1'}
              receiverName={'Shuri'}
              transactionType={'purchase'}
              marketPurchaseName={'Vibranium'}
            />
            <Caption alignCenter color={'white'} fontFamily={'Poppins'} style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(3)}}>06 JAN 2019</Caption>
            <TimelineFeedCard
              cardBorderColor={AUI_COLORS.TorchRed.tint2}
              headerText={'Inspirational Message'}
              headerTextColor={AUI_COLORS.TorchRed.tint2}
              renderBody={this._renderCardBody()}
              footerActions={[
                {
                  component: <TimelineFeedLikeAction
                    onPress={() => {}}
                    isLiked={this.state.isLiked}
                  />
                }
              ]}
            />
            <Caption alignCenter color={'white'} fontFamily={'Poppins'} style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(3)}}>01 JAN 2019</Caption>
            <TransactionItem
              amount={'đ 30.00000000'}
              senderAvatar={'https://i.imgur.com/kP0sXSb.jpg?1'}
              senderName={'Me'}
              receiverAvatar={'https://i.imgur.com/PxvOVPo.jpg'}
              receiverName={'Jessica'}
              transactionType={'purchase'}
              marketPurchaseName={'Hangover Medicine'}
            />
            <Caption alignCenter color={'white'} fontFamily={'Poppins'} style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(3)}}>31 DEC 2018</Caption>
            <TransactionItem
              amount={'đ 250.00000000'}
              senderAvatar={'https://i.imgur.com/PxvOVPo.jpg'}
              senderName={'Jessica'}
              receiverAvatar={'https://i.imgur.com/kP0sXSb.jpg?1'}
              receiverName={'Me'}
              transactionType={'received'}
            />
            <Spacer />
          </ScrollView>
        </GradientContainer>
        <Feedback
          ref={feedback => this.feedback = feedback}
          choices={[
            {choiceId: '1', choiceText: 'Dread it.'},
            {choiceId: '2', choiceText: 'Run from it.'},
            {choiceId: '3', choiceText: 'Destiny arrives all the same.'}]}
          headerText={'What are your thoughts on loss?'}
          callToActionDisabledText={'Make a choice...'}
          callToActionActiveText={'Submit to Thanos'}
          callToActionOnPress={(selectedChoice) => {
            this.feedback._closeFeedback();
          }}
          headerDescription={'Because he is here.'}
        />
        <Dialog ref={dialog => this.dialog = dialog} headline={'Let Me Tell You About Jewels'} message={'They go well with a glove, just sayin...'}/>
      </ImageContainer>
    );
  }
}

Feed.defaultProps = {};

Feed.propTypes = {};

const localStyles = StyleSheet.create({
  accountCard: {
    backgroundColor: AUI_COLORS.getRgbaFromHex(AUI_COLORS.WalaTeal.tint4, 0.25),
    borderTopWidth: 4,
    borderTopColor: AUI_COLORS.WalaTeal.tint4
  },
  summaryData: {
    borderRightWidth: 1,
    borderRightColor: AUI_COLORS.WalaTeal.tint4,
    height: 68,
    paddingTop: 6,
  },
  transactionCardHeader: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(3),
    borderBottomWidth: 1,
    borderBottomColor: AUI_COLORS.WalaTeal.tint2,
    paddingHorizontal: AUI_CONSTANTS.gridBase
  },
  transactionHeaderBody: {
    paddingHorizontal: AUI_CONSTANTS.gridBase
  }
});
