import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    };
  }

  postGrudge(e) {
    e.preventDefault();
    let grudge = { name: this.state.name, description: this.state.description };
    axios.post('/grudges', grudge)
      .then(() => console.log('Success'))
      .catch((error) => console.log(error));
  }

  createGrudge(e) {
    e.preventDefault();
    console.log('send grudge to database');
    this.clearInputs();
    this.postGrudge(e);
  }

  clearInputs() {
    this.setState({ name: '', description: '' });
  }

  render() {
    return (
      <form onSubmit={this.createGrudge.bind(this)}>
        <label htmlFor='Name' aria-label='Name' title='Name'>
          <input
            className='Name'
            type='text'
            placeholder='Enter the name of the person who has wronged you'
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <label htmlFor='Description' aria-label='Description' title='Description'>
          <textarea
            className='Description'
            type='text'
            placeholder='Description of deceitfulness'
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
        </label>
        <label htmlFor='SubmitButton' aria-label='Submit button'>
          <input
            id='SubmitButton'
            type='submit'
          />
        </label>
      </form>
    );
  }
}
