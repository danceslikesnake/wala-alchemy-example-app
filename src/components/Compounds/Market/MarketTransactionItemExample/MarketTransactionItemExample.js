import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  GradientContainer,
  Container,
  MarketTransactionItem,
  Spacer,
  Icons,
  AUI_COLORS,
} from 'alchemyUI';

export default class MarketTransactionItemExample extends Component {
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

  _renderFailedStatus = () => {
    return(
      <Container
        justifyContent={'center'}
        alignItems={'center'}
        style={styles.failed}
      >
        <Icons iconName={'close'} iconSet={'material-design'} iconColor={'white'} iconSize={21} />
      </Container>
    );
  };

  _renderStar = () => {
    return(
      <GradientContainer
        justifyContent={'center'}
        alignItems={'center'}
        colors={[AUI_COLORS.TorchRed.hex, AUI_COLORS.CuriousBlue.hex]}
        style={styles.star}
      >
        <Icons iconName={'star'} iconSet={'material-design'} iconColor={'white'} iconSize={21} />
      </GradientContainer>
    );
  };

  render() {
    return (
      <GradientContainer isFlex colors={['white', AUI_COLORS.ScampiPurple.tint4]} gradientDirection={'vertical'}>
        <Spacer />
        <MarketTransactionItem
          price={'R 10,098.00'}
          productName={'Replacement Vibranium Arm'}
          provider={'Wakanda'}
          onPress={() => alert('Rocket\'s gonna get that arm, Bucky.')}
          statusComponent={this._renderFailedStatus()}
        />
        <MarketTransactionItem
          price={'USD 1,991.00'}
          productName={'Used Vibranium Shield with a Star'}
          provider={'Stark Industries'}
          onPress={() => alert('Go to hell, Steve')}
          swipeActions={[
            {
              label: 'Jarvis',
              onPress: () => {},
              iconName: 'brain',
              iconSet: 'font-awesome'
            },
            {
              label: 'Ultrons',
              onPress: () => {},
              iconName: 'robot',
              iconSet: 'font-awesome',
              buttonType: 'negative'
            }
          ]}
          statusComponent={this._renderStar()}
          bounceOnMount
        />
        <MarketTransactionItem
          price={'1 Thing You Love the Most'}
          productName={'Soul Stone'}
          provider={'Red Skull'}
          onPress={() => alert('Sorry, Gamora :(')}
          statusComponent={<Icons iconName={'gem'} iconSet={'font-awesome'} iconColor={AUI_COLORS.PoppyYellow.tint2} />}
        />
        <Spacer />
      </GradientContainer>
    );
  };
}

const styles = StyleSheet.create({
  failed: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: AUI_COLORS.TorchRed.hex
  },
  star: {
    width: 26,
    height: 26,
    borderRadius: 13,
  }
});

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