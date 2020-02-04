import React from 'react';
import ThemeProvider from '../components/ui/theme-provider';

function rootProvider(sceneComp) {
  class ScreenWrapper extends React.Component {
    static options(passProps) {
      return sceneComp.options ? sceneComp.options(passProps) : {};
    }

    render() {
      return (
        <ThemeProvider>
          {React.createElement(sceneComp, this.props)}
        </ThemeProvider>
      );
    }
  }

  return ScreenWrapper;
}

export default rootProvider;
