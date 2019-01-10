import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView} from 'react-native';
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
  AUI_FUNCTIONS, EarnOpportunityCard, Dialog
} from 'alchemyUI';

export default class Earn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <ImageContainer isFlex source={require('../../../../resources/img/wala_bg_blur.png')}>
        <GradientContainer isFlex colors={[AUI_COLORS.TorchRed.getRgba(0.75), AUI_COLORS.ScampiPurple.getRgba(0.75)]}>
          <Spacer multiplier={4} />
          <ScrollView contentContainerStyle={{backgroundColor: AUI_COLORS.Charcoal.getRgba(0.05)}}>
            <Spacer />
            <EarnOpportunityCard
              category={'Cosmic Destinations'}
              headline={'Sure, Your Planet Seems Cool, but is it a LIVING Planet?'}
              image={{uri: 'https://i.imgur.com/ojI4Hw9.png'}}
              tileActions={[
                {
                  label: 'Learn More',
                  iconName: 'search',
                  iconSet: 'font-awesome',
                  onPress: () => {
                    this.dialogFive._openDialog();
                  }
                },
                {
                  label: 'Visit Ego Today',
                  iconName: 'rocket',
                  iconSet: 'font-awesome',
                  onPress: () => {
                    this.dialogSix._openDialog();
                  }
                }
              ]}
            />
            <Spacer />
            <EarnOpportunityCard
              category={'Membership Drive'}
              headline={'Fly Fast. Ride Strong. Ride with the Valkyries!'}
              image={{uri: 'https://i.imgur.com/Rx2rjfs.jpg'}}
              tileActions={[
                {
                  label: 'Learn More',
                  iconName: 'search',
                  iconSet: 'font-awesome',
                  onPress: () => {
                    this.dialogThree._openDialog();
                  }
                },
                {
                  label: 'Become a Valkyrie',
                  iconName: 'pegasus',
                  iconSet: 'font-awesome',
                  onPress: () => {
                    this.dialogFour._openDialog();
                  }
                }
              ]}
            />
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
            <Spacer />
          </ScrollView>
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
          <Dialog
            ref={dialogThree => this.dialogThree = dialogThree}
            headline={'Are You Serious?'}
            message={'What more do you need to know? Flying horses!'}
          />
          <Dialog
            ref={dialogFour => this.dialogFour = dialogFour}
            headline={'Strap in Losers...'}
            message={'We\'re off to Valhalla'}
            messageCondition={'success'}
          />
          <Dialog
            ref={dialogFive => this.dialogFive = dialogFive}
            headline={'Go on a Journey into Mystery'}
            message={'Some mild child sacrifice may be required'}
          />
          <Dialog
            ref={dialogSix => this.dialogSix = dialogSix}
            headline={'You\'re all set!'}
            message={'Don\t forget to bring a blanket, some toiletries, and a heaping handful of daddy issues.'}
            messageCondition={'success'}
          />
        </GradientContainer>
      </ImageContainer>
    );
  }
}

const localStyles = StyleSheet.create({});
