import React, { Component } from "react";
import {ScrollView} from 'react-native';
import {
  AUI_COLORS,
  GradientContainer,
  Container,
  Subheadline,
  Spacer,
  Avatar,
  Headline,
  LinearProgress,
  Divider
} from 'alchemyUI';

export default class LinearProgressExample extends Component {

  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        <ScrollView>
          <Container variation={'card'}>
            <Spacer/>
            <Headline dense color={AUI_COLORS.ScampiPurple.shade1} fontFamily={'Poppins'}>Ranked by amount of red in
              ledger</Headline>
            <Spacer/>
            <Divider/>
            <Spacer/>
            <Subheadline>The Punisher</Subheadline>
            <Avatar
              imageSource={{uri: 'https://i.imgur.com/7pkoHFv.jpg?1'}}
              size={'larger'}
              variation={'image'}
            />
            <LinearProgress
              percent={1}
              trackColor={AUI_COLORS.TorchRed.shade3}
              indicatorColor={AUI_COLORS.TorchRed.hex}
              percentTextColor={AUI_COLORS.TorchRed.tint2}
            />
            <Spacer/>
            <Divider/>
            <Spacer/>
            <Subheadline>Black Widow</Subheadline>
            <Avatar
              imageSource={{uri: 'https://i.imgur.com/l2jUaTE.png'}}
              size={'larger'}
              variation={'image'}
            />
            <LinearProgress
              percent={0.9}
              trackColor={AUI_COLORS.TorchRed.shade3}
              indicatorColor={AUI_COLORS.TorchRed.hex}
              percentTextColor={AUI_COLORS.TorchRed.tint2}
            />
            <Spacer/>
            <Divider/>
            <Spacer/>
            <Subheadline>Hawkeye</Subheadline>
            <Avatar
              imageSource={{uri: 'https://i.imgur.com/nwS8eh3.jpg'}}
              size={'larger'}
              variation={'image'}
            />
            <LinearProgress
              percent={0.71}
              trackColor={AUI_COLORS.TorchRed.shade3}
              indicatorColor={AUI_COLORS.TorchRed.hex}
              percentTextColor={AUI_COLORS.TorchRed.tint2}
            />
            <Spacer/>
            <Divider/>
          </Container>
        </ScrollView>
      </GradientContainer>
    );
  };
}