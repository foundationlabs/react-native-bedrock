import React from 'react';
import { lightTheme, darkTheme } from '../theme';
import { eventEmitter, initialMode } from 'react-native-dark-mode';
import { ThemeProvider } from 'styled-components';

function rootProvider(sceneComp) {
  class ScreenWrapper extends React.Component {
    state = {
      newMode: initialMode
    }

    static options(passProps) {
      return sceneComp.options ? sceneComp.options(passProps) : {};
    }

    onThemeModeChange = (newMode) => {
      this.setState({
        newMode
      })
    }

    componentDidMount() {
      eventEmitter.on('currentModeChanged', this.onThemeModeChange);
    }

    componentWillUnmount() {
      eventEmitter.removeListener('currentModeChanged', this.onThemeModeChange);
    }

    render() {
      return (
        <ThemeProvider theme={this.state.newMode === 'light' ? lightTheme : darkTheme}>
          {React.createElement(sceneComp, this.props)}
        </ThemeProvider>
      );
    }
  }

  return ScreenWrapper;
}

export default rootProvider;
