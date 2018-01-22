import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './component/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAkjJpCrWU6PpjuyXEtxd4dxWMU9BbbVi8',
      authDomain: 'manager-rn-cm.firebaseapp.com',
      databaseURL: 'https://manager-rn-cm.firebaseio.com',
      projectId: 'manager-rn-cm',
      storageBucket: 'manager-rn-cm.appspot.com',
      messagingSenderId: '291434414782'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
