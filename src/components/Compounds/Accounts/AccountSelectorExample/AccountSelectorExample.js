import React, {Component} from 'react';

import {
  AccountSelector,
  GradientContainer,
  Container,
  Logomark,
  SmallDisplay,
  Caption,
  Spacer,
  Icons,
  AUI_COLORS,
  AUI_LAYOUT,
  AUI_CONSTANTS
} from 'alchemyUI';

export default class AccountSelectorExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAccountName: null
    }
  }

  render() {
    const { selectedAccount} = this.state;

    return(
      <GradientContainer
        isFlex
        colors={['white', AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={'vertical'}
      >
        <Container variation={'wide'}>
          <Spacer />
          <AccountSelector
            drawerChoices={accounts}
            onSelectAccount={(account) => {
              this.setState({
                selectedAccount: account,
              });
            }}
            drawerHeaderText={'Which one of these?'}
            label={'Funding Account'}
          />
          <SmallDisplay
            alignCenter
            color={AUI_COLORS.ScampiPurple.shade2}
          >
            {'Callback Results'}
          </SmallDisplay>
          <Spacer />
          <Container
            style={[
              AUI_LAYOUT.presets.card,
              {padding: AUI_CONSTANTS.gridBase}
            ]}
          >
            <Caption>
              {selectedAccount ?
                JSON.stringify(selectedAccount, null, 4)
                : 'Make a Selection...'}
            </Caption>
          </Container>
          <Spacer />
        </Container>
      </GradientContainer>
    );
  }
}

const accounts = [
  {
    id: 'DALA001',
    name: 'Dala Wallet',
    amount: 'đ 800.00000000',
    convertedAmount: 'R 234.30',
    branding: <Logomark variation={'logomarkDala'} imgHeight={26} />
  },
  {
    id: 'SVNG001',
    name: 'My Savings Goals Wallet',
    amount: 'đ 200.00340000',
    convertedAmount: 'R 70.45',
    branding: <Icons iconName={'flag-checkered'} iconSet={'font-awesome'} iconColor={AUI_COLORS.CuriousBlue.tint2} />
  },
  {
    id: 'LOCL001',
    name: 'FINCA Current Account',
    amount: 'R 14,290.33',
    branding: <Icons iconName={'credit-card'} iconSet={'font-awesome'} iconColor={AUI_COLORS.TorchRed.shade2} />
  }
];