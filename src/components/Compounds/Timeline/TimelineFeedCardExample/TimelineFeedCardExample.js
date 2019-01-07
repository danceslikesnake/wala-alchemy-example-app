import React, {Component} from 'react';
import {
  ScrollView
} from 'react-native';
import {
  GradientContainer,
  Display,
  ImageContainer,
  Spacer,
  Icons,
  AUI_COLORS,
  AUI_LAYOUT,
  TimelineFeedCard,
  TimelineFeedLikeAction,
  Feedback,
} from 'alchemyUI';

export default class TimelineFeedCardExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false
    };
  }

  _renderCardBody = () => {
    return(
      <ImageContainer source={{uri: 'https://i.imgur.com/rDZFb7f.jpg'}}>
        <GradientContainer colors={[AUI_COLORS.getRgbaFromHex('#266962', 0.7), AUI_COLORS.getRgbaFromHex('#dfddb2', 0.7)]}>
          <Spacer multiplier={5} />
          <Display alignCenter color={'white'}>Wakanda Forever</Display>
          <Spacer multiplier={5} />
        </GradientContainer>
      </ImageContainer>
    );
  };

  render() {
    return (
      <GradientContainer isFlex colors={['white', AUI_COLORS.ScampiPurple.tint4]} gradientDirection={'vertical'}>
        <ScrollView>
          <Spacer />
          <TimelineFeedCard
            cardBorderColor={AUI_COLORS.ScampiPurple.tint2}
            headerText={'Did You Know'}
            headerTextColor={AUI_COLORS.ScampiPurple.tint2}
            renderHeaderMenu={[
              {
                label: 'Thoughts on Jewels',
                onPress: () => alert('They go well with a gold glove.')
              },
              {
                label: 'Thoughts on Loss',
                onPress: () => {this.feedback._openFeedback()}
              }
            ]}
            bodyImage={{uri: 'https://i.imgur.com/NZFwEJd.jpg'}}
            bodyImageAspectRatio={AUI_LAYOUT.aspectRatios.narrow}
            bodyInsetIcon={<Icons iconName={'hand-rock'} iconSet={'font-awesome'} iconSize={26} />}
            bodyHeadline={'You Won\'t Believe This Crazy Idea to Save the Universe'}
            bodyDescription={'"It\'ll be a snap," claims a bejeweled would-be savior.'}
            callToActionOnPress={() => alert('Call to Action on Press')}
            callToActionLabel={'Find out how'}
            footerActions={[
              {
                component: <TimelineFeedLikeAction
                  onPress={() => {}}
                  isLiked={this.state.isLiked}
                />
              }
            ]}
          />
          <Spacer />
          <TimelineFeedCard
            cardBorderColor={AUI_COLORS.TorchRed.tint2}
            renderHeaderMenu={() => alert('*Arms Crossed*')}
            headerText={'Inspirational Message'}
            headerTextColor={AUI_COLORS.TorchRed.tint2}
            renderBody={this._renderCardBody()}
            footerActions={[
              {
                component: <TimelineFeedLikeAction
                  onPress={() => {}}
                  isLiked={this.state.isLiked}
                />
              }
            ]}
          />
          <Spacer />
          <Feedback
            ref={feedback => this.feedback = feedback}
            choices={[
              {choiceId: '1', choiceText: 'Dread it.'},
              {choiceId: '2', choiceText: 'Run from it.'},
              {choiceId: '3', choiceText: 'Destiny arrives all the same.'}]}
            headerText={'What are your thoughts on loss?'}
            callToActionDisabledText={'Make a choice...'}
            callToActionActiveText={'Submit to Thanos'}
            callToActionOnPress={(selectedChoice) => {
              alert('Selected choice ID: ' + selectedChoice);
            }}
            headerDescription={'Because he is here.'}
          />
          <Spacer />
        </ScrollView>
      </GradientContainer>
    );
  };
}