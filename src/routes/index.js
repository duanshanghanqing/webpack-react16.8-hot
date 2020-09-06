import Root from '../view/Root';
import Home from '../view/Home';
import About from '../view/About';
import Counter from '../view/Counter';
import NewFeatures from '../view/NewFeatures';
import IifeCycle from '../view/IifeCycle';
import Hooks from '../view/Hooks';
import CustomHooks from '../view/CustomHooks';
import UseRef from '../view/UseRef';
import UseCallbackUseMemo from '../view/UseCallbackUseMemo';
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
        exact: true,
        component: About,
      },
      {
        path: '/counter',
        exact: true,
        component: Counter,
      },
      {
        path: '/newfeatures',
        exact: true,
        component: NewFeatures,
      },
      {
        path: '/iifecycle',
        exact: true,
        component: IifeCycle,
      },
      {
        path: '/hooks',
        exact: true,
        component: Hooks,
      },
      {
        path: '/customHooks',
        exact: true,
        component: CustomHooks,
      },
      {
        path: '/useRef',
        exact: true,
        component: UseRef,
      },
      {
        path: '/useCallbackUseMemo',
        exact: true,
        component: UseCallbackUseMemo,
      },
      {
        path: '/context/:id',
        exact: true,
        component: Context,
      },
      {
        path: '/pureComponent',
        component: PureComponent,
        routes: [
          {
            path: '/pureComponent/demo1',
            exact: true,
            component: PureComponentDemo1,
          },
          {
            path: '/pureComponent/demo2',
            exact: true,
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
