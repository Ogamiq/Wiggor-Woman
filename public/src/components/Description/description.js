import React from 'react';
import { Container, ImageContainer, BigImage, SmallImage , TextContainer, SubHeader, Header, Text } from './description-styles';

export default (props) => {
  return (
    <Container direction={props.positionImgBeforeText}>
      <ImageContainer>
        <BigImage src={props.img} alt={props.imgTitle} />
        <SmallImage src={props.imgSmall} alt={props.imgTitle} />
      </ImageContainer>
        <TextContainer textAlign={props.align}>
        <SubHeader>{props.subHeader}</SubHeader>
        <Header>{props.header}</Header>
        <Text>{props.text}</Text>
      </TextContainer>
    </Container>
  );
}