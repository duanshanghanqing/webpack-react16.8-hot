import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
