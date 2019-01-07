import React, {Component} from 'react';
import {
  GradientContainer,
  ImageContainer,
  AUI_COLORS,
  Spacer,
  Subheadline,
  Avatar,
  TileActions
} from 'alchemyUI';

export default class TileActionsExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSrc: 'https://i.imgur.com/Qzo8NY7.jpg',
      colors: [AUI_COLORS.getRgbaFromHex('#aabbee', 0.7), AUI_COLORS.getRgbaFromHex('#442233', 0.7)],
      name: 'Matt Murdock'
    }
  }

  vigilanteLevel = (image, color1, color2, alias) => {
    this.setState({
      imageSrc: image,
      colors: [AUI_COLORS.getRgbaFromHex(color1, 0.7), AUI_COLORS.getRgbaFromHex(color2, 0.7)],
      name: alias
    });
  };

  render() {
    return (
      <GradientContainer
        isFlex
        colors={['white', AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={'vertical'}
      >
        <ImageContainer
          isFlex
          source={{uri: this.state.imageSrc}}
        >
          <GradientContainer
            isFlex
            colors={this.state.colors}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Avatar imageSource={{uri: this.state.imageSrc}} variation={'image'} size={'largest'} />
            <Spacer />
            <Subheadline color={'white'} fontFamily={'Poppins'}>{this.state.name}</Subheadline>
          </GradientContainer>
        </ImageContainer>
        <TileActions
          tiles={[
            {
              label: 'Empty',
              onPress: () => {
                this.vigilanteLevel('https://i.imgur.com/Qzo8NY7.jpg', '#aabbee', '#442233', 'Matt Murdock');
              },
              iconName: 'battery-empty',
              iconSet: 'font-awesome'
            },
            {
              label: 'Half Full',
              onPress: () => {
                this.vigilanteLevel('https://i.imgur.com/Py2t9rM.jpg', '#bbccdd', '#331122', 'The Devil of Hell\'s Kitchen');
              },
              iconName: 'battery-half',
              iconSet: 'font-awesome'
            },
            {
              label: 'Full',
              onPress: () => {
                this.vigilanteLevel('https://i.imgur.com/w3b3hgw.jpg', '#BA5B70', '#2E273B', 'Daredevil');
              },
              iconName: 'battery-full',
              iconSet: 'font-awesome'
            }
          ]}
        />
      </GradientContainer>
    );
  };
}