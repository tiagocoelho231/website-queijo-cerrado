import React, { Component } from 'react';
import { FormContato } from '../components';

export default class Contato extends Component {
  render() {
    return (
      <main className="contato-content">
        <h1>Contato</h1>
        <FormContato />
      </main>
    )
  }
}
