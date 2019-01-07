import React, { Component } from "react";
import {
  StyleSheet
} from "react-native";
import {
  AUI_COLORS,
  AUI_LAYOUT,
  GradientContainer,
  ImageContainer,
  Headline,
  Subheadline,
  CallToActionButton,
  Container,
  Spacer,
  Banner
} from "alchemyUI";

export default class BannerExample extends Component {
  constructor(props){
    super(props);

    this.state = {
      revealBanner: false
    };
  }

  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        {this.state.revealBanner &&
        <Banner
          message={'He can.'}
          messageCondition={'success'}
          addIcon
          dismissButtonLabel={'Womp Womp'}
        />
        }
        <ImageContainer source={{uri: 'https://i.imgur.com/5gugyHC.png'}} aspectRatio={AUI_LAYOUT.aspectRatios.landscape} />
        <Spacer />
        <Subheadline alignCenter>Dormammu says:</Subheadline>
        <Spacer />
        <Container
          variation={'card'}
          style={[
            styles.speechBubble
          ]}
        >
          <Headline alignCenter color={AUI_COLORS.TorchRed.tint4}>YOU CAN'T DO THIS FOREVER, STRANGE!!!</Headline>
        </Container>
        <Spacer />
        <Container variation={'card'}>
          <CallToActionButton onPress={() => {this.setState({revealBanner: true})}} label={'Spoiler alert...'}/>
        </Container>
      </GradientContainer>
    );
  };
}

const styles = StyleSheet.create({
  speechBubble: {
    borderWidth: 4,
    borderColor: AUI_COLORS.TorchRed.tint2,
    backgroundColor: AUI_COLORS.TorchRed.shade3,
    padding: 13,
    borderRadius: 8
  }
});