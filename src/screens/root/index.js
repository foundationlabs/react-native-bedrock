import React, { Component } from "react"
import styled from "styled-components/native"
import { Navigation } from "react-native-navigation"
import { SCREENS } from "../index"

const Container = styled.ScrollView`
	flex:1;
`

const Button = styled.TouchableOpacity`
	height:44;
	justify-content: center;
	align-items: center;
	background-color: aliceblue;
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
						},
						largeTitle: {
							visible: true,
						},
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
						drawBehind: true,
						title: {
							text: "Register",
						},
						largeTitle: {
							visible: true,
						},
					},
				},
			},
		})
	}


	render() {
		return (
			<Container>
				<Button onPress={this.onLoginPress}>
					<ButtonTitle>
						Login
					</ButtonTitle>
				</Button>
				<Button onPress={this.onRegisterPress}>
					<ButtonTitle>
						Register
					</ButtonTitle>
				</Button>
			</Container>
		)
	}
}

export default RootScreen
