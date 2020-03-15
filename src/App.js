import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import configureStore from './store/configureStore';
import routes from './routes';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.min.css';
import 'minireset.css';

const store = configureStore();

const App = () => (
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Router basename="/frontend">
        {renderRoutes(routes)}
      </Router>
    </Provider>
  </ConfigProvider>
);

export default hot(module)(App);
