import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  GradientContainer,
  AUI_COLORS,
  Spacer,
  Subheadline,
  Avatar,
  Dialog,
  PopoverMenu,
  Divider,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY,
  BodyText,
  Feedback
} from 'alchemyUI';

export default class FeedbackExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GradientContainer
        isFlex
        colors={['white', AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={'vertical'}
      >
        <Spacer />
        <Container variation={'card'} style={[AUI_LAYOUT.presets.card]}>
          <Container
            actAsRow
            justifyContent={'flex-end'}
            style={[styles.twitterHeader, AUI_LAYOUT.roundTopCorners]}
          >
            <PopoverMenu
              options={() => this.feedback._openFeedback()}
              menuButtonSize={32}
              menuButtonColor={AUI_COLORS.WalaTeal.hex}
            />
          </Container>
          <Divider />
          <Container
            actAsRow
            variation={'card'}
            style={styles.twitterCard}
          >
            <Avatar
              size={'regular'}
              imageSource={{uri: 'https://i.imgur.com/dp0XPMU.jpg'}}
              variation={'image'}
            />
            <Spacer horizontal />
            <Container isFlex>
              <Subheadline color={AUI_COLORS.Charcoal.hex} dense style={styles.twitterName}>Tony Stark</Subheadline>
              <BodyText dense>There's no decision-making process here. We need to be put in check! And whatever form that takes, I'm game. If we can't accept limitations, we're boundaryless, we're no better than the bad guys.</BodyText>
            </Container>
          </Container>
        </Container>
        <Spacer />
        <Feedback
          ref={feedback => this.feedback = feedback}
          headerText={'How do you feel about this?'}
          callToActionOnPress={() => {
            this.feedback._closeFeedback();
            this.dialog._openDialog();
          }}
          choices={[
            {
              choiceId: '1',
              choiceText: 'Most of this is your fault in the first place, Tony.'
            },
            {
              choiceId: '2',
              choiceText: 'Oh, so NOW government oversight is a good thing?'
            },
            {
              choiceId: '3',
              choiceText: '#TeamCap'
            }
          ]}
        />
        <Dialog
          ref={dialog => this.dialog = dialog}
          headline={'#TeamCap all the way'}
          message={'If you are on the opposite side of Captain freaking America, you are doing it wrong.'}
          messageCondition={'success'}
        />
      </GradientContainer>
    );
  };
}

const styles = StyleSheet.create({
  twitterCard: {
    marginTop: 8,
    marginBottom: 16
  },
  twitterName: {
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold
  },
  twitterHeader: {
    backgroundColor: AUI_COLORS.Charcoal.hex
  }
});