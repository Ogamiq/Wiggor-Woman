import React from 'react';
import { EventsIcon, EventsIconHeader, EventsIconText, Image } from './events-styles';

export default (props) => {
  return (
    <EventsIcon backgroundColor={props.backgroundColor}>
      <Image
        src={props.img}
        alt={props.imgTitle}
      />
      <EventsIconHeader>
        {props.header}
      </EventsIconHeader>
      <EventsIconText>
        {props.text}
      </EventsIconText>
    </EventsIcon>
  );
}