import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler'
import rootProvider from '../providers/root-provider';
import ComponentsScreen from './components';
import ThemesScreen from './themes';
import AboutScreen from './about';
import TypographyScreen from './typography';

export const SCREENS = {
  COMPONENTS: 'Bedrock.app.Components',
  ABOUT: 'Bedrock.app.About',
  THEMES: 'Bedrock.app.Themes',
  TYPOGRAPHY: 'Bedrock.app.Typography'
};

export const screens = {
  [SCREENS.COMPONENTS]: ComponentsScreen,
  [SCREENS.ABOUT]: AboutScreen,
  [SCREENS.THEMES]: ThemesScreen,
  [SCREENS.TYPOGRAPHY]: TypographyScreen
};

export default () => {
  // eslint-disable-next-line guard-for-in
  for (let r in screens) {
    Navigation.registerComponent(r, () => gestureHandlerRootHOC(rootProvider(screens[r])), () => screens[r]);
  }
};
