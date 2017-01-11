import React, { Component } from 'react';

export default class Grudge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forgiven: false,
      id: Date.now()
    };
  }

  forgivenStatus(e) {
    this.setState({ forgiven: e.target.checked });
  }

  render() {
    const { name, description } = this.props;

    return (
      <article className='Grudge' id={this.state.id}>
        <h3>Name: {name}</h3>
        <p>Wrongful behavior: {description}</p>
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
