import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import Context from './context';
import {ThemeProvider} from 'styled-components';
import THEME from '../../theme';

export default class AppStateProvider extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      setTheme: this.setTheme,
      currentTheme: props.store.getTheme()
    };
    this.themeChangedListener = props.store.onThemeChanged(this.onThemeChanged);
  }

  componentWillUnmount() {
    this.themeChangedListener.remove();
  }

  onThemeChanged = (theme) => {
    this.setState({currentTheme: theme});

    Navigation.mergeOptions(this.props.componentId, THEME[theme].navigation);
  };

  setTheme = async(theme) => {
    this.props.store.setTheme(theme);
  };

  render() {
    console.log('props', this.props);
    return (
      <Context.Provider value={this.state}>
        <ThemeProvider theme={THEME[this.state.currentTheme]}>
          {this.props.children}
        </ThemeProvider>
      </Context.Provider>
    );
  }
}
