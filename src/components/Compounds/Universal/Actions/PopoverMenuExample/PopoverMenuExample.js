import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
  BodyText
} from 'alchemyUI';

export default class PopoverMenuExample extends Component {
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
        <Container actAsRow justifyContent={'space-around'}>
          <PopoverMenu
            options={[
              {
                label: 'Option 1',
                onPress: () => {}
              },
              {
                label: 'Option 2',
                onPress: () => {this.dialogOne._openDialog()}
              }
            ]}
          />
          <PopoverMenu
            options={() => {this.dialogTwo._openDialog()}}
          />
        </Container>
        <Spacer />
        <Container variation={'card'} style={[AUI_LAYOUT.presets.card]}>
          <Container
            actAsRow
            justifyContent={'flex-end'}
            style={[styles.twitterHeader, AUI_LAYOUT.roundTopCorners]}
          >
            <PopoverMenu
              options={[
                {
                  label: 'Share',
                  onPress: () => {}
                },
                {
                  label: 'Block',
                  onPress: () => {this.dialogThree._openDialog()}
                }
              ]}
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
              imageSource={{uri: 'https://i.imgur.com/uL5XVWg.jpg'}}
              variation={'image'}
            />
            <Spacer horizontal />
            <Container isFlex>
              <Subheadline color={AUI_COLORS.Charcoal.hex} dense style={styles.twitterName}>The Mandarin</Subheadline>
              <BodyText dense>President Ellis, you continue to resist my attempts to educate you, sir. And now, you've missed me again. You don't know who I am. You don't know where I am. And you'll NEVER see me coming.</BodyText>
            </Container>
          </Container>
        </Container>
        <Spacer />
        <Dialog
          ref={dialogOne => this.dialogOne = dialogOne}
          headline={'Array of Options'}
          message={'This Popover has an array of options passed in'}
        />
        <Dialog
          ref={dialogTwo => this.dialogTwo = dialogTwo}
          headline={'Single Function'}
          message={'This Popover had a single function passed in instead of an array'}
          messageCondition={'success'}
        />
        <Dialog
          ref={dialogThree => this.dialogThree = dialogThree}
          headline={'Ugh, this fucking guy...'}
          message={'You will no longer see these fake news posts from The Mandarin.'}
          messageCondition={'failure'}
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