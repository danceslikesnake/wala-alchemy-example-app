import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {
  GradientContainer,
  ImageContainer,
  AUI_COLORS,
  ActionCard,
  Spacer,
  CategoryHeader
} from 'alchemyUI';

export default class ActionCardExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <GradientContainer
          isFlex
          colors={['white', AUI_COLORS.ScampiPurple.tint4]}
          gradientDirection={'vertical'}
        >
          <Spacer/>
          <CategoryHeader label={'Varisty Teams'}/>
          <Spacer/>
          <ActionCard
            headline={'The Avengers'}
            description={'Oi son, read this'}
            onPress={() => {
            }}
            image={{uri: 'https://i.imgur.com/eN2qiCs.png'}}
          />
          <Spacer/>
          <ActionCard
            headline={'Hydra'}
            description={'Hail Hydra'}
            onPress={() => {
            }}
            accentColor={AUI_COLORS.TorchRed.tint2}
            image={{uri: 'https://i.imgur.com/Krkaeh9.png'}}
          />
          <Spacer/>
          <CategoryHeader label={'Junior Varsity'}/>
          <Spacer/>
          <ActionCard
            headline={'Guardians of the Galaxy'}
            description={'If you wanna do something good, something bad, maybe a bit of both'}
            onPress={() => {
            }}
            accentColor={AUI_COLORS.CuriousBlue.hex}
            image={{uri: 'https://i.imgur.com/bOj2pJe.jpg'}}
            imageAccentOpacity={0.5}
            denseCopy
          />
          <Spacer/>
          <ActionCard
            headline={'Children of Thanos'}
            description={'Rejoice, and give your worthless life meaning through death'}
            onPress={() => {
            }}
            accentColor={AUI_COLORS.ScampiPurple.hex}
            image={{uri: 'https://i.imgur.com/2POWDyZ.jpg'}}
            imageAccentOpacity={0.5}
            denseCopy
          />
          <Spacer/>
          <CategoryHeader label={'Little League'}/>
          <Spacer/>
          <ActionCard
            headline={'The Defenders'}
            description={'I mean, only if you have to...'}
            onPress={() => {
            }}
            accentColor={AUI_COLORS.PoppyYellow.hex}
            denseCopy
          />
          <Spacer/>
        </GradientContainer>
      </ScrollView>
    );
  };
}