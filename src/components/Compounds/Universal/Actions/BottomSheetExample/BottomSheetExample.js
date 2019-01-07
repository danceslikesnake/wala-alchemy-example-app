import React, {Component} from 'react';
import {
  Container,
  GradientContainer,
  AUI_COLORS,
  Spacer,
  BottomSheet,
  Subheadline,
  CallToActionButton,
  Avatar,
  Dialog
} from 'alchemyUI';

export default class BottomSheetExample extends Component {
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
        <Container alignItems={'center'}>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/vLnytw2.jpg'}} size={'largest'} />
        </Container>
        <Spacer />
        <Subheadline alignCenter color={AUI_COLORS.Charcoal.hex}>I want to achieve peace in our time. What's the best way to do this?</Subheadline>
        <Spacer />
        <Container variation={'card'}>
          <CallToActionButton onPress={() => {this.bottomSheet._openBottomSheet()}} label={'Choices'}/>
        </Container>
        <BottomSheet
          ref={bottomSheet => this.bottomSheet = bottomSheet}
          header={'Peace in our time'}
          description={'There is only one path to peace...'}
          actions={[
            {
              label: 'Kill the Avengers',
              onPress: () => {
                this.bottomSheet._closeBottomSheet()
              }
            },
            {
              label: 'Steal some vibranium',
              onPress: () => {
                this.bottomSheet._closeBottomSheet()
              }
            },
            {
              label: 'Turn a city into an asteroid',
              onPress: () => {
                this.dialog._openDialog();
                this.bottomSheet._closeBottomSheet()
              }
            }
          ]}
        />
        <Spacer />
        <Dialog ref={dialog => this.dialog = dialog} headline={'Noice'} message={'This one gets it...'} />
      </GradientContainer>
    );
  };
}