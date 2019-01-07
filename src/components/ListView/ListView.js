import React, {Component} from 'react';
import {StyleSheet, TouchableNativeFeedback, ScrollView} from 'react-native';
import {
  Container,
  Divider,
  AUI_COLORS,
  AUI_CONSTANTS,
  AUI_FUNCTIONS,
  Subheadline,
  Icons
} from 'alchemyUI';

import {links} from './links';

export default class ListView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItems = (links, id) => {
    let renderedItems = [];
    if(links.subhead) {
      let subhead = (
        <Container key={id}>
          <Subheadline
            style={localStyles.subhead}
            alignCenter
            fontFamily={'Poppins'}
            color={AUI_COLORS.ScampiPurple.shade1}>{links.subhead}</Subheadline>
          <Divider />
        </Container>
      );
      renderedItems.push(subhead);
    }
    if(links.items) {
      let compounds = links.items.map((compound, idx) => {
        return (
          <Container key={'i' + idx}>
            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate(compound.navigationRoute)}>
              <Container
                actAsRow
                alignItems={'center'}
                style={localStyles.link}>
                <Subheadline isFlex color={AUI_COLORS.Charcoal.hex}>{compound.label}</Subheadline>
                <Icons
                  iconName={'chevron-right'}
                  iconColor={AUI_COLORS.WalaTeal.hex}
                  iconSize={21}
                  iconSet={'font-awesome'}
                />
              </Container>
            </TouchableNativeFeedback>
            <Divider />
          </Container>
        );
      });
      renderedItems.push(compounds);
    }
    return renderedItems;
  };

  render() {
    let compoundLinks = null;
    if(this.props.navigation.state) {
      let listKey = this.props.navigation.state.params.listKey;
      compoundLinks = links[listKey];
    }
    return (
      <Container isFlex style={{backgroundColor: 'white'}}>
        <ScrollView>
          {compoundLinks ?
            compoundLinks.map((links, idx) => {
              return this.renderItems(links, idx);
            })
            : null
          }
        </ScrollView>
      </Container>
    );
  }
}

ListView.defaultProps = {};

ListView.propTypes = {};

const localStyles = StyleSheet.create({
  subhead: {
    lineHeight: AUI_FUNCTIONS.gridBaseMultiplier(4)
  },
  link: {
    height: AUI_FUNCTIONS.gridBaseMultiplier(4),
    paddingHorizontal: AUI_CONSTANTS.gridBase
  }
});
