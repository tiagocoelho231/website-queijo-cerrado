import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import config from '../config';

const Article = ({ article: { title, description, image, url } }) => (
  <Link to={`/noticias/${url}`}>
    <div className="article-list-item-image">
      <img src={`${config.API}${image.url}`} alt={title}/>
    </div>
    <article className="article-description">
      <p><strong>{title}</strong></p>
      <p>{description}</p>
    </article>
  </Link>
)

class ArticlesList extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { articles } = this.props;

    if (!articles)
      return null;

    return (
      <section className="articles-list">
        {articles.map((article, index) => <Article article={article} key={index} />)}
      </section>
    )
  }
}

const mapStateToProps = ({ articles: { data: articles } }) => ({ articles })

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch.articles.fetch()
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)
