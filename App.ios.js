import React from 'react';
import configureStore from './src/store/store.js';
const {Provider} = require('react-redux');
import Root from './src/components/Root.js';
import {NavigatorIOS} from 'react-native';

const store = configureStore();

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <NavigatorIOS
          initialRoute={{
            component: Root,
            title: 'Initial Scene',
          }}
          style={{flex: 1}}
        />
      </Provider>
    );
  }
}
