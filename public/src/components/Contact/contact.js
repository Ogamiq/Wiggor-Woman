import React, { Component } from 'react';
import { Container, Header, Text, PersonContainer, PersonContent, Person, PersonImage, PersonName, PersonText } from './contact-styles';

export default class Contact extends Component {
  render() {
    const Person1 = ({
      src: '../../../img/team/1.jpg',
      name: "Aleksandra Cichoń",
      position: "Koordynator główny",
      email: "aleksandra.cichon@wiggor.pl",
    });

    const Person2 = ({
      src: '../../../img/team/2.jpg',
      name: "Maria Jamrozik",
      position: "Koordynator ds. Kontaktów zewnętrznych",
      email: "maria.jamrozik@wiggor.pl",
    });

    const Person3 = ({
      src: '../../../img/team/3.jpg',
      name: 'Paulina Pawelec',
      position: 'Koordynator ds. Marketingu',
      email: 'paulina.pawelec@wiggor.pl',
    });

    const Person4 = ({
      src: '../../../img/team/4.jpg',
      name: 'Katarzyna Chabraś',
      position: 'Koordynator ds. Public Relations',
      email: 'katarzyna.chabras@wiggor.pl',
    });

    return (
      <Container>
        <Header>Chcesz się z nami skontaktować ?</Header>
        <Text>Napisz wiadomość do jednej z nas</Text>
        <PersonContainer>
          <PersonContent>
            <PersonImage src={Person1.src} alt={Person1.name} />
            <Person>
              <PersonName>{Person1.name}</PersonName>
              <PersonText>{Person1.position}</PersonText>
              <PersonText>{Person1.email}</PersonText>
            </Person>
          </PersonContent>
          <PersonContent>
            <PersonImage src={Person2.src} alt={Person2.name} />
            <Person>
              <PersonName>{Person2.name}</PersonName>
              <PersonText>{Person2.position}</PersonText>
              <PersonText>{Person2.email}</PersonText>
            </Person>
          </PersonContent>
        </PersonContainer>
        <PersonContainer>
          <PersonContent>
            <PersonImage src={Person3.src} alt={Person3.name} />
            <Person>
              <PersonName>{Person3.name}</PersonName>
              <PersonText>{Person3.position}</PersonText>
              <PersonText>{Person3.email}</PersonText>
            </Person>
          </PersonContent>
          <PersonContent>
            <PersonImage src={Person4.src} alt={Person4.name} />
            <Person>
              <PersonName>{Person4.name}</PersonName>
              <PersonText>{Person4.position}</PersonText>
              <PersonText>{Person4.email}</PersonText>
            </Person>
          </PersonContent>
        </PersonContainer>
      </Container>
    );
  }
}