import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  ImageContainer,
  GradientContainer,
  Spacer,
  TimelineFeedCard,
  TimelineFeedLikeAction,
  Dialog,
  BodyText,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_TYPOGRAPHY,
  AUI_FUNCTIONS,
} from 'alchemyUI';

export default class TimelineFeedLikeActionExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrinkingRad: false
    }
  }

  renderBodyContent = () => {
    return(
      <ImageContainer
        source={{uri: 'https://i.imgur.com/SxuAnet.jpg'}}
        aspectRatio={AUI_LAYOUT.aspectRatios.landscape}
      >
        <GradientContainer
          colors={[AUI_COLORS.getRgbaFromHex('#d49a43', 0.7), AUI_COLORS.getRgbaFromHex('#444c22', 0.5)]}
          justifyContent={'center'}
          alignItems={'center'}
          isFlex
        >
          <BodyText color={'white'} alignCenter style={styles.cardMessage}>"Would you put day drinking under experience or special abilities?"</BodyText>
        </GradientContainer>
      </ImageContainer>
    );
  };

  render() {
    return (
      <GradientContainer
        isFlex
        colors={['white', AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={'vertical'}
      >
        <Spacer />
        <Container actAsRow justifyContent={'space-around'}>
          <TimelineFeedLikeAction onPress={() => {}} isLiked={false} />
          <TimelineFeedLikeAction onPress={() => {}} isLiked={true} />
        </Container>
        <Spacer />
        <TimelineFeedCard
          renderBody={this.renderBodyContent()}
          footerActions={[
            {
              component: <TimelineFeedLikeAction
                onPress={() => {this.dialog._openDialog()}}
                isLiked={this.state.isDrinkingRad}
              />
            }
          ]}
        />
        <Dialog
          ref={dialog => this.dialog = dialog}
          headline={'Well, why not both?'}
          message={'I\'m sure it\'s in the food pyramid somewhere...'}
          messageCondition={'success'}
        />
      </GradientContainer>
    );
  };
}

const styles = StyleSheet.create({
  cardMessage: {
    fontFamily: AUI_TYPOGRAPHY.ProximaNova.extrabold,
    padding: AUI_FUNCTIONS.gridBaseMultiplier(2)
  }
});