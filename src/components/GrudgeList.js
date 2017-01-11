import React, { Component } from 'react';
import Grudge from './Grudge';

export default class GrudgeList extends Component {
  render() {
    return (
      <section className='GrudgeList'>
        <h2>List of wrongful people:</h2>
        <Grudge
        />
      </section>
    );
  }
}
