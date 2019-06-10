import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'Components/Header';
import Dashboard from 'Components/Dashboard';
import { AppProvider } from 'State/AppProvider';
import { initialState } from 'Reducers/initialState';
import { mainReducer } from 'Reducers/mainReducer';

const App = (props) => {
  console.log(mainReducer);
  return (
    <main id="app-root" className="container">
      <AppProvider initialState={initialState} reducer={mainReducer}>
        <Header {...props} />
        <Switch>
          <Route path="/" render={(props) => <Dashboard {...props} />} />
        </Switch>
      </AppProvider>
    </main>
  );
};

export default App;