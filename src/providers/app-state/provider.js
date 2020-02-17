import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import {ThemeProvider} from 'styled-components'
import Context from './context';
import THEME from '../../theme';
import {THEMES} from '../../constants';

export default class AppStateProvider extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      setTheme: this.setTheme,
      currentTheme: props.store.getTheme(),
      isAutomatic: false
    };
    this.themeChangedListener = props.store.onThemeChanged(this.onThemeChanged);
  }

  componentWillUnmount() {
    this.themeChangedListener.remove();
  }

  onThemeChanged = ({theme, isAutomatic}) => {
    this.setState({currentTheme: theme, isAutomatic});
    Navigation.mergeOptions(this.props.componentId, THEME[theme].navigation);
  };

  setTheme = async(theme) => {
    await this.props.store.setTheme(theme);
  };

  render() {
    return (
      <Context.Provider value={{
        currentTheme: this.state.isAutomatic ? THEMES.AUTOMATIC : this.state.currentTheme,
        setTheme: this.setTheme
      }}>
        <ThemeProvider theme={THEME[this.state.currentTheme]}>
          {this.props.children}
        </ThemeProvider>
      </Context.Provider>
    );
  }
}
