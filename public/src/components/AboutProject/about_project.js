import React, { Component } from 'react';

import Carousel from '..//Carousel/carousel';
import Description from '../Description/description';
import TextHeader from '../TextHeader/text_header';
import Tile from '../Tile/tile';

import { Container } from '../Tile/tiles-style';


export default class AboutProject extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <TextHeader
          header="O projekcie"
          text="Stowarzyszenie Studenckie WIGGOR co roku tworzy projekt „Kobieta z Wiggorem”. Jest to cykl wydarzeń, organizowanych z myślą o wrocławskich studentkach. Już od 19 lat staramy się układać nasze warsztaty tak, aby każda uczestniczka znalazła coś dla siebie."
        />
        <Description
          header="Warsztaty"
          text="Na naszych eventach dziewczyny mogą się sprawdzić w niecodziennych aktywnościach, jak fitness na trampolinie czy pole dance. Nie zapominamy również o merytorycznych aspektach, dzięki którym uczestniczki zdobędą nową wiedzę oraz praktyczne umiejętności."
          img="img/workshops.jpg"
          imgSmall="img/workshops-small.jpg"
          imgTitle="Trening"
          positionImgBeforeText="rtl"
          align="left"
        />
        <Description
          header="Współprace"
          text="Dodatkowo będą miały szansę spotkać się ze znanymi osobistościami ze świata biznesu, telewizji, social media czy sportu. Na przestrzeni lat wspierały nas m.in. Beata Sadowska (dziennikarka), Magdalena Kanoniak, szerzej znana jako Radzka (youtuberka) oraz Roma Szafarek (makijażystka, charakteryzatorka, stylistka)."
          img="img/cooperation.jpg"
          imgSmall="img/cooperation-small.jpg"
          imgTitle="Metamorfoza"
          positionImgBeforeText="ltr"
          align="right"
        />
        <Container>
          <Tile
            header="Przyciągnij spojrzenia"
            text="Pion warsztatów z zakresu wizażu, autoprezentacji czy stylizacji. Jednym słowem, wszystko, co kobieta powinna wiedzieć, aby prawidłowo o siebie dbać i przyciągnąć spojrzenia innych."
            backgroundColor="#F8F8F8"
          />
          <Tile
            header="Poszerz horyzonty"
            text="Wieloaspektowe szkolenia i wykłady poświęcone rozwojowi osobistemu. Z pewnością pomogą współczesnym kobietom radzić sobie z problemami, które stawia przed nimi życie."
            backgroundColor="#F4F3F3"
          />
          <Tile
            header="Bądź świadoma"
            text="Blok warsztatów budujących świadomość w zakresie profilaktyki zdrowotnej oraz zdrowego stylu życia. W końcu, dla kobiety zdrowe ciało to zdrowy duch!"
            backgroundColor="#EDEDED"
          />
          <Tile
            header="Wyzwól energię"
            text="Nic tak nie dodaje rumieńców jak aktywność! Z tego powodu cały pion szkoleń związaliśmy z ze sportem, treningiem fitness, a także bardziej rozrywkowymi zajęciami, takimi jak paintball czy gokarty."
            backgroundColor="#E9E9E9"
          />
        </Container>
        <TextHeader
          header="Dołącz do nas"
          text="Zapytasz, „Po co to wszystko?”. Otóż dlatego, że wierzymy, iż rozwój osobisty to klucz, który przybliża nas do spełnienia marzeń. Dlatego nie czekaj - dołącz do kobiet, które mają w sobie wigor :)"
          backgroundColor="#F6F6F6"
        />
      </div>
    );
  }
}