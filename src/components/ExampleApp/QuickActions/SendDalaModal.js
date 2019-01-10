import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableNativeFeedback, ScrollView} from 'react-native';
import {
  Container,
  Headline,
  AUI_COLORS,
  AUI_TYPOGRAPHY,
  AUI_LAYOUT,
  AUI_CONSTANTS,
  AUI_FUNCTIONS, GradientContainer, Icons, Subheadline, CategoryHeader, Spacer, Avatar
} from 'alchemyUI';
import Modal from 'react-native-modal';

import {people} from '../Connect/users';

export default class SendDalaModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openSendDala: false
    };
  }

  _openSendDalaOverlay = () => {
    this.setState({
      openSendDala: true,
    });
  };

  _closeSendDalaOverlay = () => {
    this.setState({
      openSendDala: false,
    });
  };

  render() {
    return (
      <Modal
        isVisible={this.state.openSendDala}
        onRequestClose={this._closeSendDalaOverlay}
        backdropColor={'transparent'}
        style={{ margin: 0 }}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationOutTiming={200}
      >
        <Container
          style={{backgroundColor: AUI_COLORS.Charcoal.getRgba(0.8)}}
          isFlex
        >
          <TouchableNativeFeedback onPress={() => {this.setState({openSendDala: false})}}>
            <Container alignItems={'center'} justifyContent={'center'} style={{alignSelf: 'flex-end', width: AUI_FUNCTIONS.gridBaseMultiplier(4), height: AUI_FUNCTIONS.gridBaseMultiplier(4), borderRadius: 3, backgroundColor: AUI_COLORS.ScampiPurple.hex, marginBottom: 4}}>
              <Icons iconName={'times'} iconSet={'font-awesome'} iconSize={24} iconColor={'white'} />
            </Container>
          </TouchableNativeFeedback>
          <Container isFlex style={{backgroundColor: AUI_COLORS.ScampiPurple.getRgba(0.6), borderTopWidth: 1, borderTopColor: AUI_COLORS.ScampiPurple.hex, position: 'relative'}}>
            <Subheadline color={'white'} alignCenter style={{lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)}}>Who will you be sending Dala to?</Subheadline>
            <GradientContainer colors={[AUI_COLORS.Charcoal.getRgba(0.3), AUI_COLORS.Charcoal.getRgba(0)]} style={{zIndex: 10, position: 'absolute', top: AUI_FUNCTIONS.gridBaseMultiplier(4), left: 0, right: 0, height: AUI_CONSTANTS.gridBaseDense}} gradientDirection={'vertical'} />
            <ScrollView>
              <Spacer />
              <CategoryHeader label={'Connections'}/>
              <Spacer />
              {people.map((person, idx) => {
                return (
                  <TouchableNativeFeedback key={idx} onPress={() => {
                    this.setState({openSendDala: false});
                    this.props.navigation.navigate('SendMoney', {peopleIndex: idx});
                  }}>
                    <Container variation={'wide'} style={[AUI_LAYOUT.presets.card, {paddingVertical: AUI_CONSTANTS.gridBase, marginBottom: 4}]} actAsRow alignItems={'center'}>
                      <Avatar imageSource={{uri: person.profileImage}} variation={'image'} size={'small'} />
                      <Spacer dense horizontal />
                      <Subheadline>{person.firstName + ' ' + person.surname}</Subheadline>
                    </Container>
                  </TouchableNativeFeedback>
                );
              })}
              <Spacer />
            </ScrollView>
          </Container>
        </Container>
      </Modal>
    );
  }
}

SendDalaModal.defaultProps = {};

SendDalaModal.propTypes = {};

const localStyles = StyleSheet.create({});
