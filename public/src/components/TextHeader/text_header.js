import React from 'react';
import { Container, Header, Text } from './text-header-styles';

export default (props) => {
  return (
    <Container backgroundColor={props.backgroundColor}>
      <Header>{props.header}</Header>
      <Text>{props.text}</Text>
    </Container>
  );
}