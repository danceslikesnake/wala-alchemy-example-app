import React, { Component } from "react";
import {
  TouchableNativeFeedback
} from "react-native";
import {
  AUI_COLORS,
  GradientContainer,
  ImageContainer,
  Container,
  BusyOverlay,
  Subheadline,
  Spacer,
  Icons,
  Display,
  Avatar
} from "alchemyUI";

export default class BusyOverlayExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scottAnswer: false,
      hopeAnswer: false
    };
  }

  renderAnswer = (choice) => {
    this.setState({hopeAnswer: false, scottAnswer: false});
    setTimeout(() => {
      this.busyOverlay._close();
      if(choice === 'scott') {
        this.setState({scottAnswer: true});
      }
      if(choice === 'hope') {
        this.setState({hopeAnswer: true});
      }
    }, 1500)
  };

  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        <Container variation={'card'}>
          <Spacer />
          <Container alignItems={'center'}>
            <Avatar
              variation={'image'}
              imageSource={{uri: 'https://i.imgur.com/3yWj8zO.jpg'}}
              size={'large'}
            />
          </Container>
          <Spacer />
          <Subheadline
            fontFamily={'Poppins'}
            alignCenter
            color={AUI_COLORS.ScampiPurple.shade1}>
            When I REALLY need a job done, who should I call?
          </Subheadline>
          <Spacer />
        </Container>
        <Container isFlex actAsRow>
          <TouchableNativeFeedback
            onPress={() => {
              this.busyOverlay._open();
              this.renderAnswer('scott');
            }}
          >
            <Container isFlex>
              <ImageContainer isFlex source={{uri: 'https://i.imgur.com/rWOFjBN.jpg'}}>
                {this.state.scottAnswer &&
                <Container
                  isFlex
                  justifyContent={'center'}
                  alignItems={'center'}
                  style={{backgroundColor: AUI_COLORS.TorchRed.getRgba(0.8)}}>
                  <Icons
                    iconName={'times'}
                    iconColor={'white'}
                    iconSet={'font-awesome'}
                    iconSize={32}
                  />
                  <Spacer dense />
                  <Display color={'white'}>Wrong</Display>
                </Container>
                }
              </ImageContainer>
            </Container>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              this.busyOverlay._open();
              this.renderAnswer('hope');
            }}
          >
            <Container isFlex>
              <ImageContainer isFlex source={{uri: 'https://i.imgur.com/g9YbXLB.jpg'}}>
                {this.state.hopeAnswer &&
                <Container
                  isFlex
                  justifyContent={'center'}
                  alignItems={'center'}
                  style={{backgroundColor: AUI_COLORS.WalaTeal.getRgba(0.8)}}>
                  <Icons
                    iconName={'times'}
                    iconColor={'white'}
                    iconSet={'font-awesome'}
                    iconSize={32}
                  />
                  <Spacer dense />
                  <Display color={'white'}>Correct</Display>
                </Container>
                }
              </ImageContainer>
            </Container>
          </TouchableNativeFeedback>
        </Container>
        <BusyOverlay
          ref={busyOverlay => this.busyOverlay = busyOverlay}
          message={'Let me think for a second...'}
        />
      </GradientContainer>
    );
  };
}