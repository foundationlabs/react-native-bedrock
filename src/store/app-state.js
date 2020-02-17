import {Navigation} from 'react-native-navigation';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';

import {THEMES} from '../constants';
import THEME from '../theme';

const EVENTS = {
  THEME_CHANGED: 'THEME_CHANGED'
};

class AppStateStore {

  constructor() {
    this.events = new EventEmitter();
    this.state = {
      currentTheme: THEMES.LIGHT
    };
  }

  getTheme() {
    return this.state.currentTheme;
  }

  setTheme(value) {
    this.state.currentTheme = value;
    this.events.emit(EVENTS.THEME_CHANGED, value);
  }

  onThemeChanged(cb) {
    return this.events.addListener(EVENTS.THEME_CHANGED, cb);
  }

}

export default new AppStateStore();
