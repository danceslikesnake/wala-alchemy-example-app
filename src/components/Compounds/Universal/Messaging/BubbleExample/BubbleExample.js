import React, { Component } from "react";
import {
  AUI_COLORS,
  GradientContainer,
  ImageContainer,
  Container,
  Bubble,
  TileActions
} from "alchemyUI";

export default class BubbleExample extends Component {
  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        <ImageContainer
          isFlex
          source={{uri: 'https://i.imgur.com/7cKmOVh.jpg'}}
          justifyContent={'flex-end'}
        >
          <Container variation={'card'}>
            <Bubble
              headline={'Which art do you want to learn?'}
              message={'Choose carefully, lest you be consumed...'}
              canBeDismissed
            />
          </Container>
          <TileActions
            rowCount={2}
            tiles={[
              {
                label: 'Magic',
                onPress: () => {},
                iconName: 'magic',
                iconSet: 'font-awesome'
              },
              {
                label: 'Tea',
                onPress: () => {},
                iconName: 'coffee',
                iconSet: 'font-awesome'
              }
            ]}
          />
        </ImageContainer>
      </GradientContainer>
    );
  };
}