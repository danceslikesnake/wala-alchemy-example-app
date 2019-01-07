import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import {
  Container,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_FUNCTIONS,
  GradientContainer,
  Subheadline,
  Icons,
  Spacer
} from 'alchemyUI';

export default class ListViewNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      pageTitle,
      navigationRoute
    } = this.props;
    return (
      <Container>
        <Container actAsRow style={localStyles.navStyle}>
          <TouchableNativeFeedback onPress={() => {
            if(navigationRoute) {
              this.props.navigation.navigate(navigationRoute);
            } else {
              this.props.navigation.goBack();
            }
          }}>
            <Container
              style={localStyles.backButton}
              alignItems={'center'}
              justifyContent={'center'}>
              <Icons
                iconName={'arrow-left'}
                iconSet={'font-awesome-regular'}
                iconSize={24}
                iconColor={AUI_COLORS.WalaTeal.tint4}
              />
            </Container>
          </TouchableNativeFeedback>
          <Subheadline
            alignCenter
            isFlex
            color={'white'}
            style={localStyles.pageTitle}>{pageTitle}</Subheadline>
          <Spacer multiplier={4} horizontal />
        </Container>
        <GradientContainer
          colors={[
            AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade1, 0.5),
            AUI_COLORS.getRgbaFromHex(AUI_COLORS.ScampiPurple.shade1, 0)
          ]}
          gradientDirection={'vertical'}
          style={{height: 4}}
        />
      </Container>
    );
  }
}

ListViewNav.propTypes = {
  pageTitle: PropTypes.string,
  navigationRoute: PropTypes.string
};

const localStyles = StyleSheet.create({
  navStyle: {
    backgroundColor: AUI_COLORS.WalaTeal.hex,
    height: AUI_FUNCTIONS.gridBaseMultiplier(4),
    width: '100%'
  },
  backButton: {
    width: AUI_FUNCTIONS.gridBaseMultiplier(4),
    height: AUI_FUNCTIONS.gridBaseMultiplier(4)
  },
  pageTitle: {
    fontFamily: AUI_TYPOGRAPHY.Poppins.medium,
    lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)
  }
});
