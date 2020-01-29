import { Navigation } from "react-native-navigation"
import registerScreens, { SCREENS } from "./screens"
import { IS_ANDROID } from "./utils/platform-utils"

registerScreens()

Navigation.events().registerAppLaunchedListener(async () => {
	Navigation.setDefaultOptions({})

	await Navigation.setRoot({
		root: {
			bottomTabs: {
				options: {
					topBar: {
						title: {
							visible: false,
							drawBehind: true,
						},
					},
				},
				children: [
					{
						stack: {
							children: [{
								component: {
									name: SCREENS.COMPONENTS,
									options: {
										topBar: {
											visible: true,
											drawBehind: !IS_ANDROID,
											searchBar: true,
											searchBarPlaceholder: "Search",
											title: {
												text: "Components",
											},
											largeTitle: {
												visible: true,
											},
											background:{
												color:'rgba(248,248,248,1)'
											}
										},
										bottomTab: {
											text: "Components",
											textColor: '#999999',
											selectedTextColor: '#307bf6',
										},
									},
								},
							}],
						},
					},
					{
						stack: {
							children: [{
								component: {
									name: SCREENS.THEMES,
									options: {
										topBar: {
											visible: true,
											drawBehind: !IS_ANDROID,
											title: {
												text: "Themes",
											},
											largeTitle: {
												visible: true,
											},
										},
										bottomTab: {
											text: "Themes",
											textColor: '#999999',
											selectedTextColor: '#307bf6',
										},
									},
								},
							}],
						},
					},
					{
						stack: {
							children: [{
								component: {
									name: SCREENS.ABOUT,
									options: {
										topBar: {
											visible: true,
											drawBehind: !IS_ANDROID,
											title: {
												text: "About",
											},
											largeTitle: {
												visible: true,
											},
										},
										bottomTab: {
											text: "About",
											textColor: '#999999',
											selectedTextColor: '#307bf6',
										},
									},
								},
							}],
						},
					},
				],
			},
		},
		layout: {
			orientation: ["portrait"],
		},
	})
})
