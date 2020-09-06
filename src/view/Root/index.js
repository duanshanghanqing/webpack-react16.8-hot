import React from 'react';
// import { Switch, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from '../../components/Header';
import './index.less';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // 除 登陆注册外走登陆权限
  }

  render() {
    const { route } = this.props;
    // console.log(match);
    return (
      <>
        <Header />
        {renderRoutes(route.routes)}
      </>
    );
  }
}

export default Root;
