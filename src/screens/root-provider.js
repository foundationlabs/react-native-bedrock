import React from 'react';
import {AppStateProvider} from '../providers/app-state';

const store = {};

function rootProvider(sceneComp) {
  class ScreenWrapper extends React.Component {
    static options(passProps) {
      return sceneComp.options ? sceneComp.options(passProps) : {};
    }

    render() {
      return (
        <AppStateProvider>
          {React.createElement(sceneComp, this.props)}
        </AppStateProvider>
      );
    }
  }

  return ScreenWrapper;
}

export default rootProvider;
