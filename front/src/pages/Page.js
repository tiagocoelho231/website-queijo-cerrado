import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page extends Component {
  componentDidMount() {
    const { pages } = this.props;
    if (pages.length) {
      const { category, page } = this.props.match.params;
      const id = pages.find(c => c.url === category).subMenu.find(p => p.url === page)._id;
      this.props.fetch(id);
    }
  }

  componentDidUpdate(prevProps) {
    const { page, pages } = this.props;
    if (!page && prevProps.pages !== pages && pages.length) {
      const { category, page } = this.props.match.params;
      const id = pages.find(c => c.url === category).subMenu.find(p => p.url === page)._id;
      this.props.fetch(id);
    }
  }

  componentWillUnmount() {

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

const mapStateToProps = ({ pages: { data: pages }, page: { data: page } }) => ({ pages, page });

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch.page.clear(),
  fetch: page => dispatch.page.fetch(page),
  fetchPages: () => dispatch.pages.fetch()
})

export default connect(mapStateToProps, mapDispatchToProps)(Page);