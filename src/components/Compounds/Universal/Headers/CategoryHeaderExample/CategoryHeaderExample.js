import React, {Component} from 'react';
import {
  Container,
  GradientContainer,
  AUI_COLORS,
  Spacer,
  Avatar,
  CategoryHeader
} from 'alchemyUI';

export default class CategoryHeaderExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GradientContainer
        isFlex
        colors={['white', AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={'vertical'}
      >
        <Spacer />
        <CategoryHeader label={'The Avengers'}/>
        <Spacer />
        <Container actAsRow style={{flexWrap: 'wrap'}} variation={'card'}>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/t6Ch1Xk.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/oQsK3np.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/nwS8eh3.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/CjqTTtF.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/PXN4uUh.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/7fTgRBO.jpg'}} size={'large'} />
        </Container>
        <Container actAsRow>
        </Container>
        <Spacer />
        <CategoryHeader label={'New Avengers'}/>
        <Spacer />
        <Container actAsRow style={{flexWrap: 'wrap'}} variation={'card'}>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/mv1ugYB.png'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/XR7HfGk.png'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/tIRhjgW.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/FZEDtsA.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/1FDemdo.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/Hi9meXN.jpg'}} size={'large'} />
        </Container>
        <Spacer />
        <CategoryHeader label={'Secret Avengers'}/>
        <Spacer />
        <Container actAsRow style={{flexWrap: 'wrap'}} variation={'card'}>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/8M9YXBW.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/l2jUaTE.png'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/jf1r8vJ.jpg'}} size={'large'} />
          <Spacer horizontal dense/>
          <Avatar variation={'image'} imageSource={{uri: 'https://i.imgur.com/57zc1Xe.jpg'}} size={'large'} />
        </Container>
        <Spacer />
      </GradientContainer>
    );
  };
}