import React, {Component} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity, ToastAndroid} from 'react-native';
import {
  Container,
  GradientContainer,
  ImageContainer,
  Spacer,
  ActionCard,
  ConnectionUserItem,
  AUI_COLORS,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, Subheadline, CategoryHeader, Avatar, Caption
} from 'alchemyUI';

import {people} from './users';

export default class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: people,
      favourites: []
    };
  }

  componentDidMount(): void {
    this.setState({users: people});
  }

  renderConnectionItem = (person, id) => {
    let swipeActions = (id === 1) ? [
      {
        label: 'Send',
        iconName: 'send-dala',
        onPress: () => this.props.navigation.navigate('SendMoney', {peopleIndex: 1})
      }
    ] : null;
    return(
      <ConnectionUserItem
        user={person}
        onPress={() => {
          this.props.navigation.navigate('Profile', {peopleIndex: id});
        }}
        isFavourite={person.isFavourite}
        favouriteOnPress={() => {
          let users = this.state.users;
          let favourites = this.state.favourites;
          users[id].isFavourite = !users[id].isFavourite;
          if(users[id].isFavourite) {
            favourites.push(users[id]);
          } else {
            favourites = favourites.filter((fav) => {
              return fav !== users[id];
            });
          }
          this.setState({
            users,
            favourites
          });
        }}
        swipeActions={swipeActions ? swipeActions : null}
        bounceOnMount={!!swipeActions}
      />
    );
  };

  renderFavourites = () => {
    return(
      <Container>
        <CategoryHeader label={'Favourites'} />
        <Container style={{height: AUI_FUNCTIONS.gridBaseMultiplier(7)}}>
          <ScrollView
            horizontal
            contentContainerStyle={localStyles.favouritesWrapper}
            showsHorizontalScrollIndicator={false}
          >
            {this.state.favourites.map((fav, idx) => {
              return(
                <TouchableOpacity key={idx} activeOpacity={0.7} onPress={()=>{}}>
                  <Container style={{marginRight: AUI_CONSTANTS.gridBase}}>
                    <Container style={localStyles.favourite}>
                      <Avatar imageSource={{uri: fav.profileImage}} variation={'image'} />
                      <Caption color={'white'} style={{marginTop: 4}} alignCenter>{fav.firstName}</Caption>
                    </Container>
                  </Container>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </Container>
        <Spacer />
      </Container>
    );
  };

  render() {
    return (
      <ImageContainer isFlex source={require('../../../../resources/img/wala_bg_blur.png')}>
        <GradientContainer isFlex colors={[AUI_COLORS.PoppyYellow.getRgba(0.75), AUI_COLORS.CuriousBlue.getRgba(0.75)]}>
          <Spacer multiplier={4} />
          <Container isFlex style={{backgroundColor: AUI_COLORS.Charcoal.getRgba(0.05), position: 'relative'}}>
            <GradientContainer
              colors={[
                AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade2, 0.4),
                AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade2, 0)
              ]}
              gradientDirection={'vertical'}
              style={localStyles.dropShadow}/>
            <Container style={localStyles.cardWrapper}>
              <Spacer />
              <ActionCard
                headline={'Invite Your Friends & Family'}
                description={'Easily send money across countries to your friends & family with zero-fees!'}
                onPress={() => {
                  ToastAndroid.showWithGravity(
                    'This would open an invite module...',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  )
                }}
                accentColor={AUI_COLORS.PoppyYellow.hex}
                image={{uri: 'https://i.imgur.com/bOj2pJe.jpg'}}
                imageAccentOpacity={0.5}
                denseCopy
              />
              <Spacer />
            </Container>
            <ScrollView>
              <Spacer />
              {this.state.favourites.length > 0 ? this.renderFavourites() : null}
              <CategoryHeader label={'Connections'} />
              <Subheadline fontFamily={'Poppins'} color={'white'} style={[localStyles.letterHead, {marginTop: 4}]}>B</Subheadline>
              {this.renderConnectionItem(this.state.users[0], 0)}
              <Subheadline fontFamily={'Poppins'} color={'white'} style={localStyles.letterHead}>C</Subheadline>
              {this.renderConnectionItem(this.state.users[1], 1)}
              {this.renderConnectionItem(this.state.users[2], 2)}
              <Subheadline fontFamily={'Poppins'} color={'white'} style={localStyles.letterHead}>J</Subheadline>
              {this.renderConnectionItem(this.state.users[3], 3)}
              <Subheadline fontFamily={'Poppins'} color={'white'} style={localStyles.letterHead}>N</Subheadline>
              {this.renderConnectionItem(this.state.users[4], 4)}
              <Subheadline fontFamily={'Poppins'} color={'white'} style={localStyles.letterHead}>P</Subheadline>
              {this.renderConnectionItem(this.state.users[5], 5)}
              {this.renderConnectionItem(this.state.users[6], 6)}
              <Subheadline fontFamily={'Poppins'} color={'white'} style={localStyles.letterHead}>S</Subheadline>
              {this.renderConnectionItem(this.state.users[7], 7)}
              <Subheadline fontFamily={'Poppins'} color={'white'} style={localStyles.letterHead}>T</Subheadline>
              {this.renderConnectionItem(this.state.users[8], 8)}
              <Spacer dense />
            </ScrollView>
          </Container>
        </GradientContainer>
      </ImageContainer>
    );
  }
}

const localStyles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: AUI_COLORS.Charcoal.getRgba(0.15),
    borderBottomWidth: 1,
    borderBottomColor: AUI_COLORS.PoppyYellow.hex,
    position: 'relative'
  },
  dropShadow: {
    position: 'absolute',
    height: AUI_CONSTANTS.gridBaseDense,
    top: 102,
    left: 0,
    right: 0,
    zIndex: 10
  },
  letterHead: {
    paddingHorizontal: AUI_CONSTANTS.gridBase,
    lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4, true),
    marginBottom: 4
  },
  favouritesWrapper: {
    paddingTop: 10,
    paddingLeft: AUI_CONSTANTS.gridBase,
  },
  favourite: {
    width: AUI_FUNCTIONS.gridBaseMultiplier(7, true),
    height: AUI_FUNCTIONS.gridBaseMultiplier(7, true),
    backgroundColor: 'white',
    borderRadius: AUI_FUNCTIONS.gridBaseMultiplier(7, true) / 2,
    elevation: 4,
    paddingTop: 2,
    paddingLeft: 2
  }
});
