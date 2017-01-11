import React, { Component } from 'react';

export default class Grudge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forgiven: false,
    };
  }

  forgivenStatus(e) {
    this.setState({ forgiven: e.target.checked });
  }

  render() {
    const { grudge, index } = this.props;

    return (
      <article className='Grudge' key={index}>
        <h3>Name: {grudge.name}</h3>
        <p>Wrongful behavior: {grudge.description}</p>
        <label htmlFor='Forgiven'>Forgive:</label>
        <input
          value={this.state.forgiven}
          id='Forgiven'
          type='checkbox'
          name='forgiven'
          onChange={this.forgivenStatus.bind(this)}
        />
      </article>
    );
  }
}
