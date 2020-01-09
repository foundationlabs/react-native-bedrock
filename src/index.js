import { Navigation } from "react-native-navigation"
import registerScreens, { SCREENS } from "./screens"

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
								drawBehind: true,
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
