import React from 'react';
import { renderRoutes } from 'react-router-config';

class Hooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { route } = this.props;
    return (
      <>
        {renderRoutes(route.routes)}
      </>
    );
  }
}

export default Hooks;
