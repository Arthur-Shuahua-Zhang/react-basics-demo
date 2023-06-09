import logo from './logo.svg';
import './App.css';
// import { createStore } from 'redux';
// import allReducers from './components/react-redux-demo/reducers';
// import { Provider } from 'react-redux';
// import MyReactReduxDemo from './components/react-redux-demo/MyReactRudexDemo';
// import Greeting from './components/class-components/Geeting';
// import CounterClassComponent from './components/class-components/CounterClassComponent';
// import MyColorComponent from './components/component-life-cycle/MyColorComponent';
// import { Greeting } from './components/function-components/Greeting';
// import CounterFunctionComponent from './components/function-components/CounterFunctionComponent';
// import UserList from './components/function-components/UserList';
// import ClickIncrease from './components/myHOC/ClickIncrease';
// import HoverIncrease from './components/myHOC/HoverIncrease';
// import InitUserInfoComponent from './components/myHooks/InitUserInfoComponent';
// import UseMemoDemo from './components/myHooks/UseMemoDemo';
// import UserRefDemo1 from './components/myHooks/UseRefDemo1';
// import UserRefDemo2 from './components/myHooks/UseRefDemo2';
// import { CounterWithHook } from './components/myHooks/CounterWithHook';
// import RecentPosts from './components/contextDemo/RecentPosts';
// import Moments from './components/contextDemo/Moments';
// import {MyBasicReduxCounterFn} from './components/basics-redux/MyBasicReduxCounterFn';
// import MyRouterComponent from './components/router-demo/MyRouterComponent';
import UsersComponent from './components/interview-question/UsersComponent';



function App() {
  // const store = createStore(
  //   allReducers,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   );

  return (
    <div className="App">
      {/* < Greeting name="Tom"/> */}
      {/* < CounterClassComponent initCount={10}/> */}
      {/* <MyColorComponent favcol="blue"/> */}
      {/* <Greeting name="Lili"/> */}
      {/* <CounterFunctionComponent /> */}
      {/* <UserList /> */}
      {/* <ClickIncrease secretWord="pear"/>
      <HoverIncrease secretWord="apple"/> */}
      {/* <InitUserInfoComponent /> */}
      {/* < UseMemoDemo/> */}
      {/* <UserRefDemo1 /> */}
      {/* <UserRefDemo2 /> */}
      {/* < CounterWithHook/> */}
      {/* <RecentPosts /> */}
      {/* <Moments /> */}
      {/* <MyBasicReduxCounterFn /> */}
      {/* <Provider store={store}>
        <MyReactReduxDemo />
      </Provider> */}
      {/* <MyRouterComponent /> */}
      <UsersComponent />

    </div>
  );
}

export default App;
