import React from 'react';
import { TileContainer, Header, Text } from './tiles-style';

export default (props) => {
  return (
    <TileContainer backgroundColor={props.backgroundColor}>
      <Header>{props.header}</Header>
      <Text>{props.text}</Text>
    </TileContainer>
  );
}