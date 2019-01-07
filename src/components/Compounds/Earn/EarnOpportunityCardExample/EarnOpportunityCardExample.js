import React, {Component} from 'react';
import {
  GradientContainer,
  AUI_COLORS,
  EarnOpportunityCard,
  Spacer,
  Dialog,
} from 'alchemyUI';

export default class EarnOpportunityCardExample extends Component {
  render() {
    return (
      <GradientContainer
        isFlex
        colors={['white', AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={'vertical'}
      >
        <Spacer />
        <EarnOpportunityCard
          category={'Outreach Campaign'}
          headline={'Help Build the World of Tomorrow. Join Hydra\'s Revolution Today!'}
          image={{uri: 'https://i.imgur.com/l4rkpoL.png'}}
          tileActions={[
            {
              label: 'Learn More',
              iconName: 'search',
              iconSet: 'font-awesome',
              onPress: () => {
                this.dialogOne._openDialog();
              }
            },
            {
              label: 'Join Now',
              iconName: 'snake',
              iconSet: 'font-awesome',
              onPress: () => {
                this.dialogTwo._openDialog();
              }
            }
          ]}
        />
        <Dialog
          ref={dialogOne => this.dialogOne = dialogOne}
          headline={'Where Hydra Thrives, You Thrive'}
          message={'Vigilance against Inhumans means safety for Humanity.'}
        />
        <Dialog
          ref={dialogTwo => this.dialogTwo = dialogTwo}
          headline={'Hail Hydra'}
          message={'Cut off one head, two more grow in its place.'}
          messageCondition={'success'}
        />
      </GradientContainer>
    );
  };
}
