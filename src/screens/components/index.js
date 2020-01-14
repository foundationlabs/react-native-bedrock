import React, { Component } from "react"
import styled from "styled-components/native"
import { Navigation } from "react-native-navigation"
import { SCREENS } from "../index"
import { ListRowTitle, ListSectionTitle } from "../../components/ui/text"
import { ListRow, ListRowSeparator, ListSection, ListSectionHeader } from "../../components/ui/list"
import { ScreenContainer } from "../../components/ui/screen"

const Container = styled.ScrollView`
	flex:1;
`

const Button = styled.TouchableOpacity`
	height: 44px;
`

class ComponentsScreen extends Component {

	onLoginPress = () => {
		const { componentId } = this.props
		Navigation.push(componentId, {
			component: {
				name: SCREENS.ABOUT,
				options: {
					topBar: {
						visible: true,
						drawBehind: true,
						title: {
							text: "Login",
							fontWeight: "semibold",
						},
						largeTitle: {
							visible: true,
						},
						rightButtons: [
							{
								id: "done",
								systemItem: "add",
							},
						],
					},
				},
			},
		})
	}

	onRegisterPress = () => {
		const { componentId } = this.props
		Navigation.push(componentId, {
			component: {
				name: SCREENS.ABOUT,
				options: {
					topBar: {
						visible: true,
						drawBehind: false,
						searchBar: true,
						background: {
							color: "white",
							translucent: true,
							blur: false,
						},
						searchBarPlaceholder: "Search",
						title: {
							text: "Register",
							fontWeight: "semibold",
						},
						rightButtons: [
							{
								id: "done",
								text: "Action",
							},
						],
					},
				},
			},
		})
	}

	onPageSheetPress = () => {
		Navigation.showModal({
			stack: {
				children: [{
					component: {
						name: SCREENS.ABOUT,
						options: {
							modalPresentationStyle: "pageSheet",
							topBar: {
								title: {
									text: "Page Sheet",
									fontWeight: "semibold",
								},
								visible: true,
								drawBehind: false,
								leftButtons: [
									{
										id: "cancel",
										systemItem: "cancel",
									},
								],
								rightButtons: [
									{
										id: "done",
										systemItem: "done",
										fontWeight: "semibold",
									},
								],
							},
						},
					},
				}],
			},
		})
	}

	onFormSheetPress = () => {
		Navigation.showModal({
			stack: {
				children: [{
					component: {
						name: SCREENS.ABOUT,
						options: {
							modalPresentationStyle: "formSheet",
							topBar: {
								title: {
									text: "Form Sheet",
									fontWeight: "semibold",
								},
								searchBar: true,
								searchBarPlaceholder: "Search",
								visible: true,
								drawBehind: false,
								leftButtons: [
									{
										id: "cancel",
										systemItem: "cancel",
									},
								],
								rightButtons: [
									{
										id: "done",
										systemItem: "done",
										fontWeight: "semibold",
									},
								],
							},
						},
					},
				}],
			},
		})
	}

	onTypographyPress = () => {
		const { componentId } = this.props
		Navigation.push(componentId, {
			component: {
				name: SCREENS.TYPOGRAPHY,
				options: {
					topBar: {
						visible: true,
						drawBehind: true,
						title: {
							text: "Typography",
							fontWeight: "semibold",
						},
						largeTitle: {
							visible: true,
						},
					},
					bottomTabs: {
						animate: false,
						visible: false,
						drawBehind: true,
					},
				},
			},
		})
	}

	onBottomTabsPress = () => {
		const { componentId } = this.props
		Navigation.push(componentId, {
				bottomTabs: {
					options: {
						topBar: {
							title: {
								text: "Tab 1",
								fontWeight: "semibold",
							},
						},
					},
					children: [
						{
							component: {
								name: SCREENS.ABOUT,
								options: {
									bottomTab: {
										text: "Tab 1",
									},
								},
							},
						},
						{
							component: {
								name: SCREENS.ABOUT,
								options: {
									bottomTab: {
										text: "Tab 2",
									},
								},
							},
						},
						{
							component: {
								name: SCREENS.ABOUT,
								options: {
									bottomTab: {
										text: "Tab 3",
									},
								},
							},
						},
					],
				},
			},
		)
	}


	render() {
		return (
			<ScreenContainer>
				<Container>
					<ListSectionHeader>
						<ListSectionTitle>
							NAVIGATION
						</ListSectionTitle>
					</ListSectionHeader>
					<ListSection>
						<Button onPress={this.onLoginPress}>
							<ListRow first>
								<ListRowTitle>
									Push (Large Title)
								</ListRowTitle>
							</ListRow>
						</Button>
						<ListRowSeparator />
						<Button onPress={this.onRegisterPress}>
							<ListRow>
								<ListRowTitle>
									Push (Small Title)
								</ListRowTitle>
							</ListRow>
						</Button>
						<ListRowSeparator />
						<Button onPress={this.onPageSheetPress}>
							<ListRow>
								<ListRowTitle>
									Page Sheet
								</ListRowTitle>
							</ListRow>
						</Button>
						<ListRowSeparator />
						<Button onPress={this.onFormSheetPress}>
							<ListRow>
								<ListRowTitle>
									Form Sheet
								</ListRowTitle>
							</ListRow>
						</Button>
						<ListRowSeparator />
						<Button onPress={this.onBottomTabsPress}>
							<ListRow last>
								<ListRowTitle>
									Bottom Tabs
								</ListRowTitle>
							</ListRow>
						</Button>
					</ListSection>
					<ListSectionHeader>
						<ListSectionTitle>
							ELEMENTS
						</ListSectionTitle>
					</ListSectionHeader>
					<ListSection>
						<Button onPress={this.onTypographyPress}>
							<ListRow first last>
								<ListRowTitle>
									Typography
								</ListRowTitle>
							</ListRow>
						</Button>
					</ListSection>
				</Container>
			</ScreenContainer>
		)
	}
}

export default ComponentsScreen
