import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Subheadline,
  AUI_COLORS,
  AUI_FUNCTIONS,
  Avatar,
  Spacer,
  Divider,
  Badge,
  CallToActionButton,
  TransparentButton,
  Dialog
} from 'alchemyUI';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <ScrollView>
          <Subheadline
            style={localStyles.subhead}
            color={AUI_COLORS.ScampiPurple.shade1}
            alignCenter
            fontFamily={'Poppins'}>Avatars</Subheadline>
          <Divider />
          <Spacer />
          <Container actAsRow>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Avatar size={'tiny'} /></Container>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Avatar size={'small'} /></Container>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Avatar variation={'initials'} initials={'TT'} /></Container>
          </Container>
          <Spacer />
          <Container actAsRow>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Avatar size={'large'} variation={'initials'} initials={'TT'} /></Container>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Avatar size={'larger'} variation={'image'} imageSource={{uri: 'https://i.imgur.com/dPpi7MJ.jpg'}} /></Container>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Avatar size={'largest'} variation={'image'} imageSource={{uri: 'https://i.imgur.com/dPpi7MJ.jpg'}} /></Container>
          </Container>
          <Spacer />
          <Divider />
          <Subheadline
            style={localStyles.subhead}
            color={AUI_COLORS.ScampiPurple.shade1}
            alignCenter
            fontFamily={'Poppins'}>Badges</Subheadline>
          <Divider />
          <Spacer />
          <Container actAsRow>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Badge badgeNumber={2} badgeColor={AUI_COLORS.ScampiPurple.hex} /></Container>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Badge badgeNumber={99} badgeColor={AUI_COLORS.CuriousBlue.hex} /></Container>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Badge variation={'icon'} badgeIconName={'close'} /></Container>
            <Container alignItems={'center'} justifyContent={'center'} isFlex><Badge variation={'icon'} badgeIconName={'more-horiz'} badgeColor={AUI_COLORS.PoppyYellow.hex} /></Container>
          </Container>
          <Spacer />
          <Divider />
          <Subheadline
            style={localStyles.subhead}
            color={AUI_COLORS.ScampiPurple.shade1}
            alignCenter
            fontFamily={'Poppins'}>Call To Action Buttons</Subheadline>
          <Divider />
          <Spacer />
          <Container variation={'card'}>
            <CallToActionButton
              label={'Primary Button'}
              onPress={() => {this.ctaDialog._openDialog()}}
            />
            <Spacer />
            <CallToActionButton
              variation={'secondary'}
              label={'Secondary Button'}
              onPress={() => {this.ctaDialog._openDialog()}}
            />
            <Spacer />
            <CallToActionButton
              variation={'disabled'}
              label={'Disabled Button'}
              onPress={() => {this.ctaDialog._openDialog()}}
            />
            <Spacer />
            <CallToActionButton
              label={'Primary Button'}
              onPress={() => {this.ctaDialog._openDialog()}}
              addArrow
            />
            <Spacer />
            <CallToActionButton
              variation={'secondary'}
              label={'Secondary Button'}
              onPress={() => {this.ctaDialog._openDialog()}}
              addArrow
            />
            <Spacer />
          </Container>
          <Divider />
          <Subheadline
            style={localStyles.subhead}
            color={AUI_COLORS.ScampiPurple.shade1}
            alignCenter
            fontFamily={'Poppins'}>Transparent Buttons</Subheadline>
          <Divider />
          <Spacer />
          <Container variation={'card'}>
            <Container actAsRow>
              <TransparentButton
                label={'Primary'}
                onPress={() => {this.transparentDialog._openDialog()}}
              />
              <TransparentButton
                variation={'secondary'}
                label={'Secondary'}
                onPress={() => {this.transparentDialog._openDialog()}}
              />
            </Container>
          </Container>
          <Spacer />
        </ScrollView>
        <Dialog ref={ctaDialog => this.ctaDialog = ctaDialog} messageCondition={'success'} headline={'Call to Action Pressed'} message={'Look at you, pressing buttons.'} />
        <Dialog ref={transparentDialog => this.transparentDialog = transparentDialog} headline={'Call to Action Pressed'} message={'Look at you, pressing buttons.'} />
      </Container>
    );
  }
}

const localStyles = StyleSheet.create({
  subhead: {
    lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)
  }
});
