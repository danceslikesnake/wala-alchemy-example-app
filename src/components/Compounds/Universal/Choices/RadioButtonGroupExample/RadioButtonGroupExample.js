import React, {Component} from 'react';
import {
  Container,
  GradientContainer,
  AUI_COLORS,
  Spacer,
  Subheadline,
  Avatar,
  Dialog,
  AUI_TYPOGRAPHY,
  RadioButtonGroup
} from 'alchemyUI';

export default class RadioButtonGroupExample extends Component {
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
        <Container alignItems={'center'} variation={'card'}>
          <Avatar imageSource={{uri: 'https://i.imgur.com/2f87QyW.jpg'}} size={'largest'} variation={'image'} />
          <Spacer />
          <Subheadline alignCenter color={AUI_COLORS.Charcoal.hex}>When the world tells you to move, what do you do?</Subheadline>
        </Container>
        <Container variation={'wide'}>
          <RadioButtonGroup
            label={'Choices'}
            choices={[
              {
                label: 'Apologize and move',
                caption: 'Like a jabroni'
              },
              {
                label: 'Stare ahead blankly',
                caption: 'Also, like a jabroni'
              },
              {
                label: 'Stand your ground',
                caption: 'Seriously, don\'t a jabroni'
              }
            ]}
            onSelectChoice={(choice) => {
              if(choice.label === 'Stand your ground') {
                this.goodChoice._openDialog();
              } else {
                this.badChoice._openDialog();
              }
            }}
          />
        </Container>
        <Dialog ref={badChoice => this.badChoice = badChoice} headline={'That\'s a jabroni move'} message={'Peggy would not approve.'} messageCondition={'failure'}/>
        <Dialog ref={goodChoice => this.goodChoice = goodChoice} headline={'This is the correct answer'} message={'You stand your ground and say "No, YOU move."'} messageCondition={'success'}/>
      </GradientContainer>
    );
  };
}