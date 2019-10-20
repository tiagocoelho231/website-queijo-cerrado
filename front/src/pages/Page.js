import React, { Component } from 'react'
import axios from '../lib/axios';

export default class Page extends Component {
  state = { page: null };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    axios.get(`/pages/${id}`)
      .then(({ data }) => this.setState({ page: data }))
      .catch(({ error }) => console.log(error));
  }

  render() {
    const { page } = this.state;

    if (!page)
      return null;

    return (
      <main className="page-content">
        <h1>{page.title}</h1>
        <section className="custom-page-content" dangerouslySetInnerHTML={{ __html: page.content }}></section>
      </main>
    )
  }
}