import styled from "styled-components/native"


// Headers
export const LargeTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.textPrimary};
	font-size: 34px;
	font-weight: 400;
`
export const MediumTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.textPrimary};
	font-size: 22px;
	font-weight: 400;
`
export const SmallTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.textPrimary};
	font-size: 17px;
	font-weight: 400;
`

export const Headline = styled.Text`
	font-size: 17px;
	line-height: 22px;
	font-weight: normal;
`

export const Body = styled.Text`
	font-size: 17px;
	line-height: 22px;
	font-weight: 500;
`

export const Callout = styled.Text`
	font-size: 16px;
	line-height: 21px;
	font-weight: 400;
`

export const SubHeading = styled.Text`
	font-size: 15px;
	line-height: 20px;
	font-weight: 400;
`

export const Footnote = styled.Text`
	font-size: 13px;
	line-height: 18px;
	font-weight: 400;
`

export const TabBarButtonTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.textPrimary};
	font-size: 14px;
	font-weight: 600;
`

