import React, { Component } from "react"
import { StyleSheet } from "react-native"
import styled from "styled-components/native"
import { Navigation } from "react-native-navigation"
import { SCREENS } from "../index"
import {
	Body,
	Callout,
	Footnote,
	Headline,
	LargeTitle,
	MediumTitle,
	SmallTitle,
	SubHeading,
	TabBarButtonTitle,
} from "../../components/ui/text"

const Container = styled.ScrollView`
	flex:1;
	padding-left: 15px;
	padding-right: 15px;
`

const Section = styled.View`
padding-top: 10px;
padding-bottom: 10px;
`

const SubSection = styled.View`
padding-top: 5px;
`

const Button = styled.TouchableOpacity`
	height:44;
	justify-content: center;
	align-items: flex-start;
	border-bottom-width: ${StyleSheet.hairlineWidth};
	border-bottom-color: black;
`

const ButtonTitle = styled.Text`
`

class RootScreen extends Component {

	onLoginPress = () => {
		const { componentId } = this.props
		Navigation.push(componentId, {
			component: {
				name: SCREENS.LOGIN,
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
				name: SCREENS.REGISTER,
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
						name: SCREENS.PAGE_SHEET,
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
						name: SCREENS.FORM_SHEET,
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
								name: SCREENS.BOTTOM_TABS,
								options: {
									bottomTab: {
										text: "Tab 1",
									},
								},
							},
						},
						{
							component: {
								name: SCREENS.BOTTOM_TABS,
								options: {
									bottomTab: {
										text: "Tab 2",
									},
								},
							},
						},
						{
							component: {
								name: SCREENS.BOTTOM_TABS,
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
			<Container>
				<Section>
					<SmallTitle>
						Navigation Actions
					</SmallTitle>
					<Button onPress={this.onLoginPress}>
						<ButtonTitle>
							Push (Large Title)
						</ButtonTitle>
					</Button>
					<Button onPress={this.onRegisterPress}>
						<ButtonTitle>
							Push (Small Title)
						</ButtonTitle>
					</Button>
					<Button onPress={this.onPageSheetPress}>
						<ButtonTitle>
							Page Sheet
						</ButtonTitle>
					</Button>
					<Button onPress={this.onFormSheetPress}>
						<ButtonTitle>
							Form Sheet
						</ButtonTitle>
					</Button>
					<Button onPress={this.onBottomTabsPress}>
						<ButtonTitle>
							Bottom Tabs
						</ButtonTitle>
					</Button>
				</Section>
				<Section>
					<SubSection>
						<SmallTitle>
							Text Elements
						</SmallTitle>
						<LargeTitle>
							Large Title
						</LargeTitle>
						<MediumTitle>
							Medium Title
						</MediumTitle>
						<SmallTitle>
							Small Title
						</SmallTitle>
					</SubSection>
					<SubSection>
						<TabBarButtonTitle>
							Tab Bar button title
						</TabBarButtonTitle>
					</SubSection>
					<SubSection>
						<Headline>
							Headline
						</Headline>
						<Body>
							Body
						</Body>
						<Callout>
							Callout
						</Callout>
						<SubHeading>
							Sub heading
						</SubHeading>
						<Footnote>
							Footnote
						</Footnote>
					</SubSection>
				</Section>
			</Container>
		)
	}
}

export default RootScreen
