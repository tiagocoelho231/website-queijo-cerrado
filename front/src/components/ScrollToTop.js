import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location, regexp } = this.props;
    if (location !== prevProps.location) {
      if (regexp) {
        if (!regexp.test(location.pathname) && !regexp.test(prevProps.location.pathname)) {
          window.scrollTo(0, 0);
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
