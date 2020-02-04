import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BoardContainer from './components/board/BoardContainer';

function App() {
  return (
    <div>
      <Link to="/"></Link>

      <Switch>
        <Route path="/" component={BoardContainer} exact={true}></Route>
      </Switch>
    </div>
  );
}

export default App;
