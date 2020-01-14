import React from "react"
import Theme from "../theme"
import { eventEmitter } from "react-native-dark-mode"
import { ThemeProvider } from "styled-components"

function rootProvider(sceneComp) {
	class ScreenWrapper extends React.Component {
		static options(passProps) {
			return sceneComp.options ? sceneComp.options(passProps) : {}
		}

		onThemeModeChange(newMode) {
			console.log("Switched to", newMode, "mode")
		}

		componentDidMount() {
			eventEmitter.on("currentModeChanged", this.onThemeModeChange)
		}

		componentWillUnmount() {
			eventEmitter.removeListener("currentModeChanged", this.onThemeModeChange)
		}

		render() {
			return (
				<ThemeProvider theme={Theme}>
					{React.createElement(sceneComp, this.props)}
				</ThemeProvider>
			)
		}
	}

	return ScreenWrapper
}

export default rootProvider
