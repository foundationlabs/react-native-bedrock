import { Navigation } from "react-native-navigation"
import registerScreens, { SCREENS } from "./screens"
import {IS_ANDROID} from "./utils/platform-utils";

registerScreens()

Navigation.events().registerAppLaunchedListener(async () => {
	Navigation.setDefaultOptions({})

	await Navigation.setRoot({
		root: {
			stack: {
				children: [{
					component: {
						name: SCREENS.ROOT,
						options: {
							topBar: {
								visible: true,
								drawBehind: !IS_ANDROID,
								title: {
									text: "Bedrock",
								},
								largeTitle: {
									visible: true,
								},
							},
							bottomTabs: {
								visible: false,
								drawBehind: true,
							},
						},
					},
				}],
			},
		},
		layout: {
			orientation: ["portrait"],
		},
	})
})
