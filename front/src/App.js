import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BoardContainer from './components/board/BoardContainer';

function App() {
  return (
    <div>
      <Link to="/boardContainer"></Link>

      <Switch>
        <Route path="/:boardContainer" component={BoardContainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
