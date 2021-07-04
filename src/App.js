import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>This is Homepage</h1>
      </Route>
      <Route exact path="/starred">
        This is starred page
      </Route>
      <Route>This is 404 Page.</Route>
    </Switch>
  );
}

export default App;
