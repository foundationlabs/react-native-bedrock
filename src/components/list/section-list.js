import React, { Component } from "react"
import { SectionList } from "react-native"
import { ListRow, ListSectionHeader } from "../ui/list"

class NativeSectionList extends Component {

	renderItem = (...props) => {
		const { renderItem } = this.props
		return (
			<ListRow>
				{renderItem(...props)}
			</ListRow>
		)
	}

	renderSectionHeader = () => {
		return (
			<ListSectionHeader>

			</ListSectionHeader>
		)
	}

	render() {
		return (
			<SectionList
				renderSectionHeader={this.renderSectionHeader}
				renderItem={this.renderItem}
			/>
		)
	}

}

export default NativeSectionList
