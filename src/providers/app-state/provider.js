import React, {Component} from 'react';
import Context from './context';
import Theme from './theme';

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
        <ThemeProvider theme={theme}>
          {this.props.children}
        </ThemeProvider>
      </Context.Provider>
    );
  }
}
