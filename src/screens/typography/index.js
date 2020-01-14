import React, { Component } from "react"
import styled from "styled-components/native"
import { ListRow, ListRowSeparator, ListSection, ListSectionHeader } from "../../components/ui/list"
import {
	Body,
	Callout,
	Footnote,
	Headline,
	LargeTitle,
	ListSectionTitle,
	MediumTitle,
	SmallTitle,
	SubHeading,
	TabBarButtonTitle,
} from "../../components/ui/text"
import { ScreenContainer } from "../../components/ui/screen"

const Container = styled.ScrollView`
	flex:1;
`

class TypographyScreen extends Component {

	render() {
		return (
			<ScreenContainer>
				<Container>
					<ListSectionHeader>
						<ListSectionTitle>
							TEXT ELEMENTS
						</ListSectionTitle>
					</ListSectionHeader>
					<ListSection>
						<ListRow first>
							<LargeTitle>
								Large Title
							</LargeTitle>
						</ListRow>
						<ListRowSeparator />
						<ListRow>
							<MediumTitle>
								Medium Title
							</MediumTitle>
						</ListRow>
						<ListRowSeparator />
						<ListRow>
							<SmallTitle>
								Small Title
							</SmallTitle>
						</ListRow>
						<ListRowSeparator />
						<ListRow>
							<TabBarButtonTitle>
								Tab Bar button title
							</TabBarButtonTitle>
						</ListRow>
						<ListRowSeparator />
						<ListRow>
							<Headline>
								Headline
							</Headline>
						</ListRow>
						<ListRowSeparator />
						<ListRow>
							<Body>
								Body
							</Body>
						</ListRow>
						<ListRowSeparator />
						<ListRow>
							<Callout>
								Callout
							</Callout>
						</ListRow>
						<ListRowSeparator />
						<ListRow>
							<SubHeading>
								Sub heading
							</SubHeading>
						</ListRow>
						<ListRowSeparator />
						<ListRow last>
							<Footnote>
								Footnote
							</Footnote>
						</ListRow>
					</ListSection>
				</Container>
			</ScreenContainer>
		)
	}
}

export default TypographyScreen
