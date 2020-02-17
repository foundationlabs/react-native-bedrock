import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import AsyncStorage from '@react-native-community/async-storage';
import {eventEmitter, initialMode} from 'react-native-dark-mode';

import {EVENTS, STORAGE_KEYS, THEMES} from '../constants';

class AppStateStore {

  constructor() {
    this.events = new EventEmitter();
    this.currentTheme = THEMES.LIGHT;
    this.lastAutomaticTheme = initialMode.toUpperCase();
    this.isAutomatic = false;
    this.loadTheme();

    eventEmitter.on('currentModeChanged', newMode => {
      if (this.isAutomatic) {
        this.currentTheme = newMode.toUpperCase();
        this.lastAutomaticTheme = this.currentTheme;
        this.events.emit(EVENTS.THEME_CHANGED, {
          theme: this.currentTheme,
          isAutomatic: this.isAutomatic
        });
      }
    });
  }

  async loadTheme() {
    const mode = await AsyncStorage.getItem(STORAGE_KEYS.SELECTED_THEME_TYPE);

    if (mode === THEMES.AUTOMATIC) {
      this.isAutomatic = true;
      this.setTheme(this.lastAutomaticTheme);
    } else {
      this.isAutomatic = false;
      this.setTheme(mode);
    }
  }

  getTheme() {
    return this.currentTheme;
  }

  async setTheme(value) {
    if (value === THEMES.AUTOMATIC) {
      await AsyncStorage.setItem(STORAGE_KEYS.SELECTED_THEME_TYPE, value);
      this.currentTheme = this.lastAutomaticTheme;
      this.isAutomatic = true;
    } else {
      await AsyncStorage.removeItem(STORAGE_KEYS.SELECTED_THEME_TYPE);
      await AsyncStorage.setItem(STORAGE_KEYS.SELECTED_THEME, value);
      this.currentTheme = value;
      this.isAutomatic = false;
    }

    this.events.emit(EVENTS.THEME_CHANGED, {
      theme: this.currentTheme,
      isAutomatic: this.isAutomatic
    });
  }

  onThemeChanged(cb) {
    return this.events.addListener(EVENTS.THEME_CHANGED, cb);
  }

}

export default new AppStateStore();
