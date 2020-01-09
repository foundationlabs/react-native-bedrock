import React from 'react'
import Theme from '../theme'
import { ThemeProvider } from "styled-components"

function rootProvider(sceneComp) {
	class ScreenWrapper extends React.Component {
		static options(passProps) {
			return sceneComp.options ? sceneComp.options(passProps) : {}
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
