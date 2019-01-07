import React, {Component} from 'react';
import {
  GradientContainer,
  AUI_COLORS,
  EarnPayoutMessage,
  Spacer,
  CallToActionButton,
  Container
} from 'alchemyUI';

export default class EarnPayoutMessageExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <GradientContainer
        isFlex
        colors={['white', AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={'vertical'}
      >
        <Spacer />
        <Container variation={'card'}>
          <CallToActionButton
            onPress={() => {
              this.setState({
                isOpen: !this.state.isOpen
              });
            }}
            label={'Collect your reward'}
          />
        </Container>
        <EarnPayoutMessage
          callToActionOnPress={() => {
            this.setState({
              isOpen: !this.state.isOpen
            });
          }}
          callToActionLabel={'Transfer the Units'}
          opportunityTitle={'Bounty Hunting'}
          opportunityDescription={'For the capture of Peter Quill, a.k.a. Starlord'}
          dalaAmount={'đ 40,000.00000000'}
          isOpen={this.state.isOpen}
          onClose={() => {
            this.setState({
              isOpen: !this.state.isOpen
            });
          }}
        />
      </GradientContainer>
    );
  };
}
