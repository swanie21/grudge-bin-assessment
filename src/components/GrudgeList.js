import React, { Component } from 'react';
import Grudge from './Grudge';

const GrudgeList = ({ grudgeBin }) => {

  return (
    <section className='GrudgeList'>
      <h2>List of wrongful people:</h2>
      <Grudge
      />
    </section>
  );
}

export default GrudgeList;
