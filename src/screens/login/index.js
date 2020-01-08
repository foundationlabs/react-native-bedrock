import React, { Component } from "react"
import styled from "styled-components/native"

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

class LoginScreen extends Component {

	onNextPress = () => {

	}

	render() {
		return (
			<Container>

			</Container>
		)
	}
}

export default LoginScreen
