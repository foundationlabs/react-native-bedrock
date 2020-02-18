import React from 'react';
import AppStateStore from '../store/app-state.js'
import {AppStateProvider} from './app-state';

function rootProvider(sceneComp) {
  class ScreenWrapper extends React.Component {
    static options(passProps) {
      return sceneComp.options ? sceneComp.options(passProps) : {};
    }

    render() {
      return (
        <AppStateProvider store={AppStateStore} {...this.props}>
          {React.createElement(sceneComp, this.props)}
        </AppStateProvider>
      );
    }
  }

  return ScreenWrapper;
}

export default rootProvider;
