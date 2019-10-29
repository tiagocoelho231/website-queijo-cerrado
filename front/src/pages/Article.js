import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {
  componentDidMount() {
    this.props.fetch(this.props.match.params.article)
  }

  render() {
    const { article } = this.props;

    if (!article)
      return null;

    return (
      <main className="article-content">
        <h1>{article.title}</h1>
        <section className="custom-article-content" dangerouslySetInnerHTML={{ __html: article.content }}></section>
      </main>
    )
  }
}

const mapStateToProps = ({ article: { data: article } }) => ({ article });

const mapDispatchToProps = dispatch => ({
  fetch: url => dispatch.article.fetch(url),
})

export default connect(mapStateToProps, mapDispatchToProps)(Article);