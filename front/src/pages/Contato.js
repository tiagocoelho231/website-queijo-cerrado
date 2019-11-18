import React, { Component } from 'react';
import { FormContato } from '../components';

export default class Contato extends Component {
  render() {
    return (
      <main className="contato-content">
        <h1>Entre em contato conosco</h1>
        <FormContato />
      </main>
    )
  }
}
