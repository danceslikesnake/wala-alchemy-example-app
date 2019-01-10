import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableNativeFeedback} from 'react-native';
import {
  Container,
  Icons,
  Caption,
  AUI_COLORS,
} from 'alchemyUI';

const QuickActionTab = ({ iconName, label, onPress, isActive }) => {
  return (
    <TouchableNativeFeedback onPress={() => onPress()}>
      <Container isFlex justifyContent={'center'} alignItems={'center'}>
        <Icons
          iconName={iconName}
          iconSize={18}
          containerStyles={{ marginBottom: 3 }}
          iconColor={isActive ? AUI_COLORS.WalaTeal.hex : AUI_COLORS.Slate.hex}
        />
        <Caption
          style={{ marginBottom: -2 }}
          dense
          color={isActive ? AUI_COLORS.WalaTeal.hex : AUI_COLORS.Slate.hex}>
          {label}
        </Caption>
      </Container>
    </TouchableNativeFeedback>
  );
};

QuickActionTab.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default QuickActionTab;
