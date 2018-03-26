import React, { Component } from 'react';
import { Container, Header, Text, Image, GreetingsIconContainer, GreetingsIcon, GreetingsText } from './greetings-style';

export default class Greetings extends Component {
  render() {
    return (
      <Container>
        <Header>Witamy na stronie projektu</Header>
        <Image
          src="/img/greetings_butterfly.png"
          alt="Kobieta z Wiggorem"
        />
        <Text>Kobieta z Wiggorem to wydarzenia i eventy organizowane przez studentki – dla
          studentek. Działamy we Wrocławiu, urządzając bezpłatne warsztaty, spotkania i
          zabawy, które nie tylko zapewnią nie lada rozrywkę, ale również pomogą Ci
          odkrywać samą siebie.</Text>
        <GreetingsIconContainer>
          <GreetingsIcon>
            <Image
              src="/img/greetings_mirror.png"
              alt="Przyciągnij spojrzenia"
            />
            <GreetingsText>Przyciągnij spojrzenia</GreetingsText>
          </GreetingsIcon>
          <GreetingsIcon>
            <Image
              src="/img/greetings_book.png"
              alt="Poszerz horyzonty"
            />
            <GreetingsText>Poszerz horyzonty</GreetingsText>
          </GreetingsIcon>
          <GreetingsIcon>
            <Image
              src="/img/greetings_search.png"
              alt="Bądź świadoma"
            />
            <GreetingsText>Bądź świadoma</GreetingsText>
          </GreetingsIcon>
          <GreetingsIcon>
            <Image
              src="/img/greetings_trophy.png"
              alt="Wyzwól energię"
            />
            <GreetingsText>Wyzwól energię</GreetingsText>
          </GreetingsIcon>
        </GreetingsIconContainer>
      </Container>
    );
  }
}