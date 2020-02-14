import React from 'react';
import {darkTheme, lightTheme} from '../../theme';
import AsyncStorage from '@react-native-community/async-storage';
import {eventEmitter, initialMode} from 'react-native-dark-mode';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

export const ThemeProviderContext = React.createContext({themeMode: 'automatic', onChangeTheme: () => null});
const store = {themeMode: 'automatic', currentThemeFromDevice: initialMode};

class ThemeProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      themeMode: store.themeMode,
      currentThemeFromDevice: store.currentThemeFromDevice //native theme from phone set by user from device settings
    };
  }

  async componentDidMount() {
    eventEmitter.on('currentModeChanged', this.onThemeModeChange);
    let themeMode = await AsyncStorage.getItem('@theme-mode');
    if (!!themeMode === false) {
      await AsyncStorage.setItem('@theme-mode', 'automatic');
      themeMode = 'automatic';
    }
    this.setThemeMode(themeMode);
  }

  componentWillUnmount() {
    eventEmitter.removeListener('currentModeChanged', this.onThemeModeChange);
  }

  setThemeMode = (themeMode) => {
    this.setState({
      themeMode
    });
    store.themeMode = themeMode;
  };

  getTheme = () => {
    let {themeMode, currentThemeFromDevice} = this.state;
    if (themeMode === 'light') {
      return lightTheme;
    } else if (themeMode === 'dark') {
      return darkTheme;
    }
    return currentThemeFromDevice === 'light' ? lightTheme : darkTheme;
  };

  onThemeModeChange = currentThemeFromDevice => {
    this.setState({
      currentThemeFromDevice
    });
    store.currentThemeFromDevice = currentThemeFromDevice;
  };

  handleChangeThemeMode = async themeMode => {
    await AsyncStorage.setItem('@theme-mode', themeMode);
    this.setThemeMode(themeMode);
  };

  render() {
    let {themeMode} = this.state;
    return (
      <ThemeProviderContext.Provider value={{themeMode, onChangeTheme: this.handleChangeThemeMode}}>
        <StyledThemeProvider theme={this.getTheme()}>
          {this.props.children}
        </StyledThemeProvider>
      </ThemeProviderContext.Provider>
    );
  }
}

export default ThemeProvider;
