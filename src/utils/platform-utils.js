import {Platform, Dimensions} from 'react-native';

export const IS_ANDROID = Platform.OS !== 'ios';


const size = Dimensions.get('window');

const X_HEIGHT = 812;
const XSMAX_HEIGHT = 896;

export const IS_IPHONE_X = (
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (size.height === X_HEIGHT ||
    size.height === XSMAX_HEIGHT ||
    size.width === X_HEIGHT ||
    size.width === XSMAX_HEIGHT)
)
