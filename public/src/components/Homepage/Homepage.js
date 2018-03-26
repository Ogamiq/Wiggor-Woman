import React, { Component } from 'react';

import Carousel from '../Carousel/carousel';
import Greetings from '../Greetings/greetings';
import TrainingMetamorphosis from '../Training/training';
import Team from '../Team/team';


export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Greetings />
        <TrainingMetamorphosis />
        <Team />
      </div>
    );
  }
}