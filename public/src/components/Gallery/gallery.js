import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';
import { Container, GalleryContainer, Header } from './gallery-styles';

  const preEventImages =
  [{
    src: "../img/pre-event/1.jpg",
    thumbnail: "../img/pre-event/1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/pre-event/2.jpg",
    thumbnail: "../img/pre-event/2.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/pre-event/3.jpg",
    thumbnail: "../img/pre-event/3.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/pre-event/4.jpg",
    thumbnail: "../img/pre-event/4.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  }];

  const workshopsImages =
  [{
    src: "../img/workshops/1.jpg",
    thumbnail: "../img/workshops/1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/2.jpg",
    thumbnail: "../img/workshops/2.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/3.jpg",
    thumbnail: "../img/workshops/3.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/4.jpg",
    thumbnail: "../img/workshops/4.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/5.jpg",
    thumbnail: "../img/workshops/5.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/6.jpg",
    thumbnail: "../img/workshops/6.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/7.jpg",
    thumbnail: "../img/workshops/7.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/8.jpg",
    thumbnail: "../img/workshops/8.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/9.jpg",
    thumbnail: "../img/workshops/9.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/10.jpg",
    thumbnail: "../img/workshops/10.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/11.jpg",
    thumbnail: "../img/workshops/11.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/12.jpg",
    thumbnail: "../img/workshops/12.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/13.jpg",
    thumbnail: "../img/workshops/13.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/workshops/14.jpg",
    thumbnail: "../img/workshops/14.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  }];

  const metamorphosisImages =
  [{
    src: "../img/metamorphosis/1.png",
    thumbnail: "../img/metamorphosis/1.png",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/2.png",
    thumbnail: "../img/metamorphosis/2.png",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/3.png",
    thumbnail: "../img/metamorphosis/3.png",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/4.jpg",
    thumbnail: "../img/metamorphosis/4.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/5.jpg",
    thumbnail: "../img/metamorphosis/5.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/6.jpg",
    thumbnail: "../img/metamorphosis/6.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/7.jpg",
    thumbnail: "../img/metamorphosis/7.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/8.jpg",
    thumbnail: "../img/metamorphosis/8.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/9.jpg",
    thumbnail: "../img/metamorphosis/9.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/10.jpg",
    thumbnail: "../img/metamorphosis/10.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/11.jpg",
    thumbnail: "../img/metamorphosis/11.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/12.jpg",
    thumbnail: "../img/metamorphosis/12.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/13.jpg",
    thumbnail: "../img/metamorphosis/13.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/14.jpg",
    thumbnail: "../img/metamorphosis/14.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/15.jpg",
    thumbnail: "../img/metamorphosis/15.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/16.jpg",
    thumbnail: "../img/metamorphosis/16.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/17.jpg",
    thumbnail: "../img/metamorphosis/17.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/18.jpg",
    thumbnail: "../img/metamorphosis/18.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/19.jpg",
    thumbnail: "../img/metamorphosis/19.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/20.jpg",
    thumbnail: "../img/metamorphosis/20.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/21.jpg",
    thumbnail: "../img/metamorphosis/21.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/22.jpg",
    thumbnail: "../img/metamorphosis/22.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/23.jpg",
    thumbnail: "../img/metamorphosis/23.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/24.jpg",
    thumbnail: "../img/metamorphosis/24.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/25.jpg",
    thumbnail: "../img/metamorphosis/25.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/26.jpg",
    thumbnail: "../img/metamorphosis/26.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/27.jpg",
    thumbnail: "../img/metamorphosis/27.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/28.jpg",
    thumbnail: "../img/metamorphosis/28.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/29.jpg",
    thumbnail: "../img/metamorphosis/29.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  },
  {
    src: "../img/metamorphosis/30.jpg",
    thumbnail: "../img/metamorphosis/30.jpg",
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    caption: "Kobieta z Wiggorem"
  }];

export default class GalleryBox extends Component {
  render() {
    return (
      <Container>
        <Header>Konferencja</Header>
        <GalleryContainer>
          <Gallery images={preEventImages} enableImageSelection={false} />
        </GalleryContainer>
        <Header>Warsztaty</Header>
        <GalleryContainer>
          <Gallery images={workshopsImages} enableImageSelection={false} />
        </GalleryContainer>
        <Header>Metamorfoza</Header>
        <GalleryContainer>
          <Gallery images={metamorphosisImages} enableImageSelection={false} />
        </GalleryContainer>
      </Container>
    );
  }
}