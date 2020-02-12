import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom'
import './assets/css/style.css';
import MyCallBack from './components/MyCallBack'


function App() {
  return (
    <div className="App">
      <h1>마이콜백누르고 입력눌러용</h1>
      <NavLink to="/mycallback" className="normalLink" activeClassName="activeLink">[MyCallBack]</NavLink>


      <Switch>
        <Route path="/mycallback" component={MyCallBack}/>

      </Switch>
    </div>
  );
}

export default App;
