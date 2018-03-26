import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Footer, FlexboxWrapper, Item, Title, List, ListItem, ItemContent, Image } from './footer-styles';


export default class FooterClass extends Component {
  render() {
    return (
      <Footer>
        <FlexboxWrapper>
          <Item>
            <Title>Menu</Title>
            <List>
              <ListItem><Link to="/" className="link">Strona główna</Link></ListItem>
              <ListItem><Link to="/o-projekcie" className="link">O projekcie</Link></ListItem>
              <ListItem><Link to="/wspolpraca" className="link">Współpraca</Link></ListItem>
              <ListItem><Link to="wydarzenia" className="link">Zapisy</Link></ListItem>
              <ListItem><Link to="/galeria" className="link">Galeria</Link></ListItem>
              <ListItem><Link to="#" className="link">Kontakt</Link></ListItem>
            </List>
          </Item>
          <Item>
            <Title>Adres</Title>
            <ItemContent>
              ul. Kamienna 57/10
              <br />
              53-307 Wrocław
            </ItemContent>
            <Title>Kontakt</Title>
            <ItemContent>
              Email: kobieta@wiggor.pl
              < br/>
              Telefon: (71) 36 80 634
            </ItemContent>
          </Item>
          <Item>
            <Title>Organizator</Title>
            <Image src="../../../img/logo-small.png" alt="" />
          </Item>
        </FlexboxWrapper>
      </Footer>
    );
  }
}