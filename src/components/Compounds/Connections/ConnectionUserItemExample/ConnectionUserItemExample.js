import React, {Component} from 'react';
import {
  GradientContainer,
  ConnectionUserItem,
  Spacer,
  AUI_COLORS,
} from 'alchemyUI';

export default class ConnectionUserItemExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavourite1: false,
      isFavourite2: false,
      isFavourite3: false,
      isFavourite4: false,
      isFavourite5: false
    }
  }

  render() {
    return (
      <GradientContainer isFlex colors={['white', AUI_COLORS.ScampiPurple.tint4]} gradientDirection={'vertical'}>
        <Spacer />
        <ConnectionUserItem
          user={user1}
          onPress={() => alert('View Steve\'s Profile')}
          isFavourite={this.state.isFavourite1}
          favouriteOnPress={() => {
            this.setState({
              isFavourite1: !this.state.isFavourite1
            });
          }}
        />
        <ConnectionUserItem
          user={user2}
          swipeActions={carolActions}
          bounceOnMount
          onPress={() => alert('View Carol\'s Profile')}
          isFavourite={this.state.isFavourite2}
          favouriteOnPress={() => {
            this.setState({
              isFavourite2: !this.state.isFavourite2
            });
          }}
        />
        <ConnectionUserItem
          user={user3}
          onPress={() => alert('View Tony\'s Profile')}
          isFavourite={this.state.isFavourite3}
          favouriteOnPress={() => {
            this.setState({
              isFavourite3: !this.state.isFavourite3
            });
          }}
        />
        <ConnectionUserItem
          user={user4}
          onPress={() => alert('View Daisy\'s Profile')}
          isFavourite={this.state.isFavourite4}
          favouriteOnPress={() => {
            this.setState({
              isFavourite4: !this.state.isFavourite4
            });
          }}
        />
        <ConnectionUserItem
          user={user5}
          swipeActions={lukeActions}
          bounceOnMount
          onPress={() => alert('View Luke\'s Profile')}
          isFavourite={this.state.isFavourite5}
          favouriteOnPress={() => {
            this.setState({
              isFavourite5: !this.state.isFavourite5
            });
          }}
        />
        <Spacer />
      </GradientContainer>
    );
  };
}

const user1 = {
  firstName: 'Steve',
  surname: 'Rogers',
  profileImage: 'https://i.imgur.com/8M9YXBW.jpg'
};

const user2 = {
  firstName: 'Carol',
  surname: 'Danvers',
  profileImage: 'https://i.imgur.com/JKzdL6Z.jpg'
};

const user3 = {
  firstName: 'Tony',
  surname: 'Stark',
  profileImage: ''
};

const user4 = {
  firstName: 'Daisy',
  surname: 'Johnson',
  profileImage: 'https://i.imgur.com/ytmC14X.jpg'
};

const user5 = {
  firstName: 'Luke',
  surname: 'Cage',
  profileImage: 'https://i.imgur.com/2YOdQqZ.jpg'
};

const carolActions = [
  {
    label: 'Pursue',
    onPress: () => {},
    iconName: 'fighter-jet',
    iconSet: 'font-awesome'
  },
  {
    label: 'Atomize',
    onPress: () => {},
    iconName: 'atom',
    iconSet: 'font-awesome'
  }
];

const lukeActions = [
  {
    label: 'Strength',
    onPress: () => {},
    iconName: 'dumbbell',
    iconSet: 'font-awesome'
  }
];