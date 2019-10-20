import React, { Component } from 'react';
import axios from 'axios';
const CancelToken = axios.CancelToken;

export default class InlineSVG extends Component {
  state = { svgContent: null }

  componentDidMount() {
    this.request = CancelToken.source();
    axios.get(this.props.src, { cancelToken: this.request.token })
      .then(({ data }) => {
        const svgContent = data.replace(/\n|<title>(.*?)<\/title>|<desc>(.*?)<\/desc>|<defs>(.*?)<\/defs>|<!--(.*?)-->/g, "");
        this.setState({ svgContent });
      })
      .catch(() => { });
  }

  componentWillUnmount() {
    if (this.request)
      this.request.cancel();
  }

  render() {
    const { svgContent } = this.state;

    if (!svgContent)
      return null;

    const { className } = this.props;
    return (
      <span {...this.props} className={`inline-svg${className ? ' ' + className : ''}`} dangerouslySetInnerHTML={{ __html: this.state.svgContent }}></span>
    )
  }
};
