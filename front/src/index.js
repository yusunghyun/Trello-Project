import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
//스토어생성, 미들웨어 처리 함수
import { createStore, applyMiddleware } from 'redux';
//전체 앱 리덕스 구독을 위한 객체
import { Provider } from 'react-redux';
//크롬 개발자 도구 연동 함수
import { composeWithDevTools } from 'redux-devtools-extension';
//통합 스토어
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
