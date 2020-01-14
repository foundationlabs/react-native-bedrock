import React from "react"
import { Navigation } from "react-native-navigation"
import RootScreen from "./root"
import rootProvider from "./root-provider"
import ComponentsScreen from "./components"
import ThemesScreen from "./themes"
import AboutScreen from "./about"
import TypographyScreen from "./typography"

export const SCREENS = {
	ROOT: "Bedrock.app.Root",
	COMPONENTS: "Bedrock.app.Components",
	ABOUT: "Bedrock.app.About",
	THEMES: "Bedrock.app.Themes",
	TYPOGRAPHY: "Bedrock.app.Typography",
}

export const screens = {
	[SCREENS.ROOT]: RootScreen,
	[SCREENS.COMPONENTS]: ComponentsScreen,
	[SCREENS.ABOUT]: AboutScreen,
	[SCREENS.THEMES]: ThemesScreen,
	[SCREENS.TYPOGRAPHY]: TypographyScreen,
}

export default () => {
	for (let r in screens) {
		Navigation.registerComponent(r, () => rootProvider(screens[r]))
	}
};
