import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page extends Component {
  componentDidMount() {
    this.props.fetch(this.props.match.params.page);
  }

  render() {
    const { page } = this.props;

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

const mapStateToProps = ({ page: { data: page } }) => ({ page });

const mapDispatchToProps = dispatch => ({
  fetch: url => dispatch.page.fetch(url)
})

export default connect(mapStateToProps, mapDispatchToProps)(Page);