import React, { Component } from "react";
import {
  AUI_COLORS,
  GradientContainer,
  Container,
  Subheadline,
  Spacer,
  ImageContainer,
  Avatar,
  Headline,
  Divider,
  StepProgress,
  CallToActionButton
} from 'alchemyUI';

export default class StepProgressExample extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentStep: 1,
      stepHeadline: 'Step 1: Smash Thor\'s Hammer',
      stepImage: 'https://i.imgur.com/YU0dRNa.jpg'
    }
  }

  fakeSteps = () => {
    switch(this.state.currentStep) {
      case 1:
        this.setState({
          currentStep: 2,
          stepHeadline: 'Step 2: Kill everyone in Asgard',
          stepImage: 'https://i.imgur.com/tE65dW6.jpg'
        });
        break;
      case 2:
        this.setState({
          currentStep: 3,
          stepHeadline: 'Step 3: Profit',
          stepImage: 'https://i.imgur.com/1atRIhw.png'
        });
        break;
    }
  };

  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        <StepProgress numberOfSteps={3} currentStep={this.state.currentStep}/>
        <Divider />
        <Container isFlex>
          <Spacer />
          <Headline dense alignCenter fontFamily={'Poppins'} color={AUI_COLORS.ScampiPurple.shade1}>How to Rule Asgard</Headline>
          <Container alignItems={'center'}><Avatar imageSource={{uri: 'https://i.imgur.com/17cgHr3.jpg'}} variation={'image'} /></Container>
          <Spacer dense />
          <Subheadline
            alignCenter
            style={{paddingHorizontal: 13}}
            color={AUI_COLORS.ScampiPurple.shade1}>
            {this.state.stepHeadline}
          </Subheadline>
          <Spacer />
          <ImageContainer isFlex source={{uri: this.state.stepImage}} />
        </Container>
        <Divider />
        <Container style={{backgroundColor: 'white'}}>
          <Spacer />
          <Container actAsRow>
            <Spacer horizontal />
            <Container isFlex>
              <CallToActionButton
                onPress={()=>{}}
                label={'Prev'}
              />
            </Container>
            <Spacer horizontal />
            <Container isFlex>
              <CallToActionButton
                onPress={()=>{this.fakeSteps()}}
                label={'Next'}
              />
            </Container>
            <Spacer horizontal />
          </Container>
          <Spacer />
        </Container>
      </GradientContainer>
    );
  };
}