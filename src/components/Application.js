import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';
import Grudge from './Grudge';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      grudgeBin: [],
    };
  }

  componentDidMount() {
    this.fetchGrudges();
  }

  fetchGrudges() {
    axios.get('http://localhost:3001/grudges')
    .then(response => {
      console.log(response);
      this.setState({ grudgeBin: response.data });
    })
    .catch(error => console.log(error));
  }

  render() {
    const { grudgeBin } = this.state;
    let grudgesArray = grudgeBin.map(grudge => {
      return <Grudge grudge={grudge} />
    });

    return (
      <section className="Application">
        <h1>The Grudge List</h1>
        <Form />
        <section>
          {grudgesArray}
        </section>
        <section>{grudgeBin}</section>
      </section>
    );
  }
}
