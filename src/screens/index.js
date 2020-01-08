import React from 'react';
import { Navigation } from "react-native-navigation"
import RootScreen from "./root"
import LoginScreen from "./login"
import RegisterScreen from "./register"

export const SCREENS = {
	ROOT: "Bedrock.app.Root",
	LOGIN: "Bedrock.app.Login",
	REGISTER: "Bedrock.app.Register",
}

export const screens = {
	[SCREENS.ROOT]: RootScreen,
	[SCREENS.LOGIN]: LoginScreen,
	[SCREENS.REGISTER]: RegisterScreen,

}

export default () => {
	for (let r in screens) {
		Navigation.registerComponent(r, () => screens[r])
	}
};
