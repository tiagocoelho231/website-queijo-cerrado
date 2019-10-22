import React, { Component } from 'react';
import { FormContato, Mapa } from '../components';

export default class Contato extends Component {
  render() {
    return (
      <main className="contato-content">
        <h2>Contato</h2>
        <FormContato />
        <Mapa />
      </main>
    )
  }
}
