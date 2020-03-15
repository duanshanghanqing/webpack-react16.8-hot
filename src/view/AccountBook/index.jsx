import React from 'react';
import { renderRoutes } from 'react-router-config';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { history, route } = this.props;
    if (history.location.pathname === route.path && route.redirect) {
      history.push(route.redirect);
    }
  }

  render() {
    const { route } = this.props;
    return (
      renderRoutes(route.routes)
    );
  }
}
