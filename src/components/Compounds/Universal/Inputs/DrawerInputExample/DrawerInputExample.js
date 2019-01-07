import React, { Component } from "react";
import moment from 'moment';
import {
  AUI_COLORS,
  AUI_LAYOUT,
  Spacer,
  Container,
  Avatar,
  Subheadline,
  DrawerInput,
  GradientContainer,
  ImageContainer,
  Dialog
} from "alchemyUI";

export default class DrawerInputExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateValue: moment('1991-12-16').format('LL')
    };
  }

  renderDisplayComponent = (type) => {
    let imageSource = '';
    let title = '';
    switch(type) {
      case 'mind':
        imageSource = 'https://i.imgur.com/JRCKs0R.png';
        title = 'The Mind Stone';
        break;
      case 'soul':
        imageSource = 'https://i.imgur.com/fo8L80f.png';
        title = 'The Soul Stone';
        break;
      case 'power':
        imageSource = 'https://i.imgur.com/S9njuCQ.png';
        title = 'The Power Stone';
        break;
      case 'reality':
        imageSource = 'https://i.imgur.com/OSHp6RU.png';
        title = 'The Reality Stone';
        break;
      case 'space':
        imageSource = 'https://i.imgur.com/DOUROmJ.png';
        title = 'The Space Stone';
        break;
      case 'time':
        imageSource = 'https://i.imgur.com/C7d3cCD.png';
        title = 'The Time Stone';
        break;
    }

    return(
      <Container actAsRow alignItems={'center'} style={{padding: 8}}>
        <Avatar imageSource={{uri: imageSource}} variation={'image'} size={'small'} />
        <Spacer dense horizontal />
        <Subheadline color={AUI_COLORS.Charcoal.hex}>{title}</Subheadline>
      </Container>
    );
  };

  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        <ImageContainer
          source={{uri: 'https://i.imgur.com/kaZkjEJ.jpg?1'}}
          aspectRatio={AUI_LAYOUT.aspectRatios.widescreen}
        />
        <Spacer />
        <Container alignItems={'center'}>
          <Avatar
            size={'large'}
            variation={'image'}
            imageSource={{uri: 'https://i.imgur.com/NPtxLvv.jpg'}}
          />
          <Spacer dense />
          <Subheadline alignCenter dense color={AUI_COLORS.ScampiPurple.shade1}>Which Infinity Stone is the exalted and much heralded Thanos wielding above?</Subheadline>
        </Container>
        <Spacer />
        <Container variation={'card'}>
          <DrawerInput
            ref={drawerinput => this.drawerinput = drawerinput}
            drawerChoices={[
              {
                displayComponent: this.renderDisplayComponent('soul'),
              },
              {
                displayComponent: this.renderDisplayComponent('mind'),
              },
              {
                displayComponent: this.renderDisplayComponent('power'),
              },
              {
                displayComponent: this.renderDisplayComponent('reality'),
              },
              {
                displayComponent: this.renderDisplayComponent('time'),
              },
              {
                displayComponent: this.renderDisplayComponent('space'),
              }
            ]}
            onSelectChoice={(key) => {
              if(key === 3) {
                this.success._openDialog();
              } else {
                this.failure._openDialog();
              }
            }}
            drawerHeaderText={'ollo'}
            label={'Select a stone...'}
          />
        </Container>
        <Spacer />
        <Dialog ref={failure => this.failure = failure} headline={'You have failed Thanos'} message={'The judgment visited upon you will be...unpleasant'} messageCondition={'failure'} />
        <Dialog ref={success => this.success = success} headline={'Rejoice!'} message={'You have answered correctly, and have earned the privilege of being saved by the Great Titan'} messageCondition={'success'} />
      </GradientContainer>
    );
  };
}
