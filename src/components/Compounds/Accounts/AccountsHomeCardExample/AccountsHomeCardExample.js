import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {
  AccountsHomeCard,
  GradientContainer,
  Container,
  CallToActionButton,
  Logomark,
  Spacer,
  Icons,
  AUI_COLORS,
  AUI_CONSTANTS
} from 'alchemyUI';

export default class AccountsHomeCardExample extends Component {
  constructor(props) {
    super(props);
  }

  _renderEmptySavings = () => {
    return (
      <Container style={{backgroundColor: AUI_COLORS.CuriousBlue.getRgba(0.3), padding: AUI_CONSTANTS.gridBaseDense}}>
        <CallToActionButton
          onPress={() => alert('Callback for Create a New Goal')}
          label={'Create a new Goal'}
        />
      </Container>
    );
  };

  render() {
    return (
      <GradientContainer isFlex colors={['white', AUI_COLORS.ScampiPurple.tint4]} gradientDirection={'vertical'}>
        <ScrollView>
          <Spacer/>
          <AccountsHomeCard
            accountName={'Basic Account Card'}
            accountBalance={'đ 503.00091827'}
          />
          <Spacer/>
          <AccountsHomeCard
            accountName={'Dala Wallet'}
            accountBalance={'đ 1,998.00000023'}
            accountConvertedBalance={'R 2,376.88'}
            branding={<Logomark variation={'logomarkDala'} imgHeight={26}/>}
            brandingBgImage={{uri: 'https://i.imgur.com/OfdlKd6.png'}}
            accountTileActions={accountTileActions}
          />
          <Spacer/>
          <AccountsHomeCard
            accountName={'My Savings Goals'}
            accountBalance={'đ 0.00'}
            accountConvertedBalance={'R 0.00'}
            branding={<Icons iconName={'flag'} iconSize={26} iconSet={'material-design'}
                             iconColor={AUI_COLORS.CuriousBlue.tint2}/>}
            brandingBgImage={{uri: 'https://i.imgur.com/EqMaiA4.png'}}
            renderAdditionalContent={this._renderEmptySavings}
          />
          <Spacer/>
          <AccountsHomeCard
            isBadState
          />
          <Spacer/>
        </ScrollView>
      </GradientContainer>
    );
  };
}

const accountTileActions = [
  {
    label: 'Send',
    iconName: 'send-dala',
    onPress: () => alert('Send Callback')
  },
  {
    label: 'Deposit',
    iconName: 'deposit-dala',
    onPress: () => alert('Deposit Callback')
  },
  {
    label: 'Activity',
    iconName: 'list',
    iconSet: 'material-design',
    onPress: () => alert('Some rad callback for the Activity Tile Action!')
  }
];