import Root from '../view/Root';
import Home from '../view/Home';
import About from '../view/About';
import Counter from '../view/Counter';
import NewFeatures from '../view/NewFeatures';
import IifeCycle from '../view/IifeCycle';
import Hooks from '../view/Hooks';
import Context from '../view/Context';
import PureComponent from '../view/PureComponent';
import PureComponentDemo1 from '../view/PureComponent/Demo1';
import PureComponentDemo2 from '../view/PureComponent/Demo2';
import Mixins from '../view/Mixins';
import NotFound from '../view/NotFound';
// import Main from '../view/Hooks/Main';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/counter',
        component: Counter,
      },
      {
        path: '/newfeatures',
        component: NewFeatures,
      },
      {
        path: '/iifecycle',
        component: IifeCycle,
      },
      {
        path: '/hooks',
        component: Hooks,
      },
      {
        path: '/context/:id',
        component: Context,
      },
      {
        path: '/pureComponent',
        component: PureComponent,
        routes: [
          {
            path: '/pureComponent/demo1',
            component: PureComponentDemo1,
          },
          {
            path: '/pureComponent/demo2',
            component: PureComponentDemo2,
          },
        ],
      },
      {
        path: '/mixins',
        exact: true,
        component: Mixins,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
];
