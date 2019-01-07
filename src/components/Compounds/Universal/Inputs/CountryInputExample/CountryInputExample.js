import React, { Component } from "react";
import {
  ScrollView,
} from "react-native";
import {
  GradientContainer,
  AUI_COLORS,
  Spacer,
  Headline,
  Container,
  CountryInput,
  Subheadline,
  BodyText,
  Divider
} from "alchemyUI";

export default class CountryInputExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCountry: null
    };
  }

  render() {
    return (
      <GradientContainer
        isFlex
        colors={["white", AUI_COLORS.ScampiPurple.tint4]}
        gradientDirection={"vertical"}
      >
        <ScrollView>
          <Spacer/>
          <Container variation={"card"}>
            <Headline color={AUI_COLORS.ScampiPurple.shade1}>MCU Location Tracker</Headline>
            <Spacer dense />
            <CountryInput
              cca2={this.state.selectedCountry ? this.state.selectedCountry : ''}
              countries={["AF", "AR", "AT", "BR", "CN", "GL", "DE", "IN", "NG", "NO", "RO", "RU", "KR", "GB", "CH", "US", "ZA"]}
              searchable
              closeable
              onChange={(country) => {
                this.setState({selectedCountry: country.cca2});
              }}
            />
            <Spacer />
            {this.state.selectedCountry &&
            <Container>
              <Subheadline color={AUI_COLORS.ScampiPurple.shade1}>{`${moviesList[this.state.selectedCountry].name} appears in:`}</Subheadline>
              <Spacer dense />
              <Divider/>
              {
                moviesList[this.state.selectedCountry].movies.map((movie, idx) => {
                  return <Container key={idx}><BodyText>{movie}</BodyText><Divider /></Container>;
                })
              }
            </Container>
            }
          </Container>
          <Spacer />
        </ScrollView>
      </GradientContainer>
    );
  };
}

const moviesList = {
  "AF": {name :'Afghanistan', movies: ['Iron Man']},
  "AR": {name :'Argentina', movies: ['Ant-Man and The Wasp']},
  "AT": {name :'Austria', movies: ['Captain America: The First Avenger', 'Ant-Man', 'Captain America: Civil War', 'Black Panther']},
  "BR": {name :'Brazil', movies: ['The Incredible Hulk']},
  "CN": {name :'China', movies: ['Iron Man 3', 'Doctor Strange']},
  "GL": {name :'Greenland', movies: ['Captain America: The First Avenger']},
  "DE": {name :'Germany', movies: ['Captain America: The First Avenger', 'The Avengers', 'Ant-Man', 'Captain America: Civil War']},
  "IN": {name :'India', movies: ['The Avengers', 'Spider-Man: Homecoming']},
  "NG": {name :'Nigeria', movies: ['Captain America: Civil War', 'Black Panther']},
  "NO": {name :'Norway', movies: ['Thor', 'Captain America: The First Avenger', 'Avengers: Age of Ultron', 'Thor: Ragnarok']},
  "RO": {name :'Romania', movies: ['Captain America: Civil War']},
  "RU": {name :'Russia', movies: ['Iron Man 2', 'The Avengers', 'Captain America: Civil War']},
  "ZA": {name :'South Africa', movies: ['Avengers: Age of Ultron']},
  "KR": {name :'South Korea', movies: ['Avengers: Age of Ultron', 'Black Panther', 'Avengers: Endgame']},
  "CH": {name :'Switzerland', movies: ['Iron Man 3']},
  "GB": {name :'United Kingdom', movies: ['Captain America: The First Avenger', 'Thor: The Dark World', 'Avengers: Age of Ultron', 'Avengers: Age of Ultron', 'Captain America: Civil War', 'Doctor Strange', 'Black Panther', 'Avengers: Infinity War', 'Spider-Man: Far From Home']},
  "US": {name :'United States', movies: ['Iron Man', 'The Incredible Hulk', 'Iron Man 2', 'Thor', 'Captain America: The First Avenger', 'The Avengers', 'Iron Man 3', 'Captain America: The Winter Soldier', 'Guardians of the Galaxy', 'Avengers: Age of Ultron', 'Ant-Man', 'Captain America: Civil War', 'Doctor Strange', 'Guardians of the Galaxy Vol 2', 'Spider-Man: Homecoming', 'Thor: Ragnarok', 'Black Panther', 'Avengers: Infinity War', 'Ant-Man and the Wasp', 'Captain Marvel', 'Avengers: Endgame', 'Spider-Man: Far From Home']}
};
