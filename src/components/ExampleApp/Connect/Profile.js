import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView, ToastAndroid} from 'react-native';
import {
  Container,
  ImageContainer,
  Headline,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, TileActions, GradientContainer, Avatar, Spacer
} from 'alchemyUI';

import {people} from './users';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    const personIndex = this.props.navigation.state.params.peopleIndex;
    const person = people[personIndex];
    return (
      <Container isFlex>
        <ImageContainer isFlex source={{uri: person.profileImage}}>
          <GradientContainer colors={person.gradientColors} isFlex alignItems={'center'} justifyContent={'center'}>
            <Container style={localStyles.avatarWrapper} alignItems={'center'} justifyContent={'center'}>
              <Avatar size={'largest'} imageSource={{uri: person.profileImage}} variation={'image'} />
            </Container>
            <Spacer dense />
            <Headline fontFamily={'Poppins'} color={'white'}>{person.firstName + ' ' + person.surname}</Headline>
          </GradientContainer>
        </ImageContainer>
        <TileActions
          tiles={[
            {
              label: 'Favourite',
              onPress: () => {
                ToastAndroid.showWithGravity(
                  'Toggles whether a user\'s a favourite or not',
                  ToastAndroid.SHORT,
                  ToastAndroid.CENTER
                )
              },
              iconToggle: {
                activeIcon: 'star',
                activeIconSet: 'font-awesome',
                inActiveIcon: 'star',
                inActiveIconSet: 'font-awesome-regular'
              }
            },
            {
              label: 'Send Money',
              iconName: 'send-dala',
              onPress: () => this.props.navigation.navigate('SendMoney', {peopleIndex: personIndex})
            }
          ]}
          rowCount={2}
        />
      </Container>
    );
  }
}

Profile.defaultProps = {};

Profile.propTypes = {};

const localStyles = StyleSheet.create({
  avatarWrapper: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(12, true),
    width: AUI_FUNCTIONS.gridBaseMultiplier(12, true),
    backgroundColor: 'white',
    borderRadius: AUI_FUNCTIONS.gridBaseMultiplier(6, true)
  }
});
