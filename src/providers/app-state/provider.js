import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Context from './context';
import {ThemeProvider} from 'styled-components';
// import Theme from './theme';

export default class AppStateProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      setTheme: this.setTheme
    };
  }

  setTheme = async(theme) => {
    // await this.props.appStore.setTheme(theme);
  };

  render() {
    return (
      <Context.Provider value={{
        ...this.state,
        themeMode: this.props.appStore.appState.theme
      }}>
        <ThemeProvider theme={{}}>
          {this.props.children}
        </ThemeProvider>
      </Context.Provider>
    );
  }
}
