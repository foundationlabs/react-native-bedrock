import React from "react"
import { Navigation } from "react-native-navigation"
import RootScreen from "./root"
import LoginScreen from "./login"
import RegisterScreen from "./register"
import PageSheetScreen from "./page-sheet"
import FormSheetScreen from "./form-sheet"
import BottomTabsScreen from "./bottom-tabs"

export const SCREENS = {
	ROOT: "Bedrock.app.Root",
	LOGIN: "Bedrock.app.Login",
	REGISTER: "Bedrock.app.Register",
	PAGE_SHEET: "Bedrock.app.PageSheet",
	FORM_SHEET: "Bedrock.app.FormSheet",
	BOTTOM_TABS: "Bedrock.app.BottomTabs",
}

export const screens = {
	[SCREENS.ROOT]: RootScreen,
	[SCREENS.LOGIN]: LoginScreen,
	[SCREENS.REGISTER]: RegisterScreen,
	[SCREENS.PAGE_SHEET]: PageSheetScreen,
	[SCREENS.FORM_SHEET]: FormSheetScreen,
	[SCREENS.BOTTOM_TABS]: BottomTabsScreen,
}

export default () => {
	for (let r in screens) {
		Navigation.registerComponent(r, () => screens[r])
	}
};
