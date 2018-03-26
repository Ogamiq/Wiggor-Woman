import React, { Component } from 'react';

import Carousel from '..//Carousel/carousel';
import Description from '../Description/description';
import TextHeader from '../TextHeader/text_header';


export default class AboutProject extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <TextHeader
          header="Współpraca"
          text="Kobieta z Wiggorem to cykl wydarzeń organizowany dla studentek. Naszym celem jest zachęcenie młodych kobiet do rozwijania swoich pasji oraz poznawania nowych doświadczeń."
        />
        <Description
          header="Partnerzy"
          text="Serdecznie zapraszamy do współpracy w realizacji tegorocznej edycji projektu, ponieważ dzięki wspólnemu działaniu z partnerami jesteśmy w stanie zbliżyć się do osiągnięcia idei przyświecających naszemu projektowi. W przeciągu 19 lat zaufali nam m.in. Kaufland, Credit Suisse, PZU oraz Procter&Gamble."
          img="img/partners.jpg"
          imgSmall="img/partners-small.jpg"
          imgTitle="Partnerzy"
          positionImgBeforeText="rtl"
          align="left"
        />
        <Description
          header="Oferta"
          text="W związku z tym, że sami jesteśmy studentami, w łatwy sposób możemy dotrzeć do naszej grupy docelowej. Korzyści jakie płyną ze współdziałania z nami to m.in. promowanie Państwa firmy na materiałach reklamowych (plakaty, ulotki, gadżety) czy promocja na stronie internetowej. Elastyczność jest istotną dla nas cechą, dlatego jesteśmy otwarci na nowe propozycje i owocną współpracę."
          img="img/offer.jpg"
          imgSmall="img/offer-small.jpg"
          imgTitle="Oferta"
          positionImgBeforeText="ltr"
          align="right"
        />
      </div>
    );
  }
}