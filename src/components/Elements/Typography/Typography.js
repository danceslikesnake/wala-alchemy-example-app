import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Display,
  Headline,
  Subheadline,
  BodyText,
  CaptionEmphasis,
  Caption,
  SmallDisplay,
  Spacer,
  Divider,
  AUI_COLORS,
  AUI_FUNCTIONS, Title
} from 'alchemyUI';

export default class Typography extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <ScrollView>
          <Subheadline style={localStyles.subhead} color={AUI_COLORS.ScampiPurple.shade1} alignCenter fontFamily={'Poppins'}>Proxima Nova</Subheadline>
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Title</Caption>
            <Spacer horizontal multiplier={2} />
            <Title color={AUI_COLORS.Charcoal.hex} isFlex>Sphinx of black quartz, judge my vow.</Title>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Display</Caption>
            <Spacer horizontal multiplier={2} />
            <Display color={AUI_COLORS.Charcoal.hex} isFlex>Carved symbols in a mountain hollow on the bank of an inlet irritated an eccentric person.</Display>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Headline</Caption>
            <Spacer horizontal multiplier={2} />
            <Headline color={AUI_COLORS.Charcoal.hex} isFlex>Cross valley and plain to steal coins from Saudi mint.</Headline>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Subheadline</Caption>
            <Spacer horizontal multiplier={2} />
            <Subheadline color={AUI_COLORS.Charcoal.hex} isFlex>A short brimless felt hat barely blocks out the sound of a Celtic violin.</Subheadline>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Body Text</Caption>
            <Spacer horizontal multiplier={2} />
            <BodyText color={AUI_COLORS.Charcoal.hex} isFlex>Relaxing in basins at the end of inlets terminates the endless tests from the box.</BodyText>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Caption Emphasis</Caption>
            <Spacer horizontal multiplier={2} />
            <CaptionEmphasis color={AUI_COLORS.Charcoal.hex} isFlex>A large fawn jumped quickly over white zinc boxes.</CaptionEmphasis>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Caption</Caption>
            <Spacer horizontal multiplier={2} />
            <Caption color={AUI_COLORS.Charcoal.hex} isFlex>Signage indicating endowments for industrial diamonds annoy filth-spreading genies.</Caption>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Small Display</Caption>
            <Spacer horizontal multiplier={2} />
            <SmallDisplay color={AUI_COLORS.Charcoal.hex} isFlex>How quickly daft jumping zebras vex!</SmallDisplay>
          </Container>
          <Spacer />
          <Divider />
          <Subheadline style={localStyles.subhead} color={AUI_COLORS.ScampiPurple.shade1} alignCenter fontFamily={'Poppins'}>Poppins</Subheadline>
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Title</Caption>
            <Spacer horizontal multiplier={2} />
            <Title color={AUI_COLORS.Charcoal.hex} isFlex fontFamily={'Poppins'}>Sphinx of black quartz, judge my vow.</Title>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Headline</Caption>
            <Spacer horizontal multiplier={2} />
            <Headline color={AUI_COLORS.Charcoal.hex} isFlex fontFamily={'Poppins'}>Cross valley and plain to steal coins from Saudi mint.</Headline>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Subheadline</Caption>
            <Spacer horizontal multiplier={2} />
            <Subheadline color={AUI_COLORS.Charcoal.hex} isFlex fontFamily={'Poppins'}>A short brimless felt hat barely blocks out the sound of a Celtic violin.</Subheadline>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Body Text</Caption>
            <Spacer horizontal multiplier={2} />
            <BodyText color={AUI_COLORS.Charcoal.hex} isFlex fontFamily={'Poppins'}>Relaxing in basins at the end of inlets terminates the endless tests from the box.</BodyText>
          </Container>
          <Spacer />
          <Divider />
          <Spacer />
          <Container actAsRow variation={'card'}>
            <Caption style={localStyles.caption}>Caption</Caption>
            <Spacer horizontal multiplier={2} />
            <Caption color={AUI_COLORS.Charcoal.hex} isFlex fontFamily={'Poppins'}>Signage indicating endowments for industrial diamonds annoy filth-spreading genies.</Caption>
          </Container>
          <Spacer />
        </ScrollView>
      </Container>
    );
  }
}

const localStyles = StyleSheet.create({
  caption: {
    width: 78
  },
  subhead: {
    lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)
  },
});
