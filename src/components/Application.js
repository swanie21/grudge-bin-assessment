import React, { Component } from 'react';
import Form from './Form';
import GrudgeList from './GrudgeList';
import axios from 'axios';

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

    return (
      <section className="Application">
        <h1>The Grudge List</h1>
        <Form />
        <section>
          <GrudgeList
            grudgeBin={grudgeBin}
          />
        </section>
        <section>{grudgeBin}</section>
      </section>
    );
  }
}
