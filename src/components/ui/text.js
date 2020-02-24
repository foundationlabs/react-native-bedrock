import styled from 'styled-components/native';

// Headers
export const LargeTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textPrimary};
	font-size: 34px;
	font-weight: 400;
`;
export const MediumTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.color.textPrimary};
	font-size: 22px;
	font-weight: 400;
`;
export const SmallTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textPrimary};
	font-size: 17px;
	font-weight: 400;
`;

export const ListSectionTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textListSection};
    font-size: ${props => props.theme.text.tableHeader.fontSize};
    letter-spacing: ${props => props.theme.text.tableHeader.letterSpacing};
    font-weight: ${props => props.theme.text.tableHeader.fontWeight};
`;

export const ListRowTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textPrimary};
	font-size: ${props => props.theme.text.listRowTitle.fontSize};
	letter-spacing: ${props => props.theme.text.listRowTitle.letterSpacing};
	font-weight: ${props => props.theme.text.listRowTitle.fontWeight};
`;

export const ListRowSubtitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textSecondary};
    font-size: ${props => props.theme.text.listRowSubtitle.fontSize};
    letter-spacing: ${props => props.theme.text.listRowSubtitle.letterSpacing};
    font-weight: ${props => props.theme.text.listRowSubtitle.fontWeight};
`;

export const Headline = styled.Text`
	font-size: 17px;
	line-height: 22px;
	font-weight: normal;
	color: ${props => props.theme.color.textPrimary};
`;

export const Body = styled.Text`
	font-size: 17px;
	line-height: 22px;
	font-weight: 500;
	color: ${props => props.theme.color.textPrimary};
`;

export const Callout = styled.Text`
	font-size: 16px;
	line-height: 21px;
	font-weight: 400;
	color: ${props => props.theme.color.textPrimary};
`;

export const SubHeading = styled.Text`
	font-size: 15px;
	line-height: 20px;
	font-weight: 400;
	color: ${props => props.theme.color.textPrimary};
`;

export const Footnote = styled.Text`
	font-size: 13px;
	line-height: 18px;
	font-weight: 400;
	color: ${props => props.theme.color.textPrimary};
`;

export const TabBarButtonTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textPrimary};
	font-size: 14px;
	font-weight: 600;
`;

export const ListRowValueLabel = styled.Text`
    font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textSecondary};
    font-size: 17px;
    font-weight: 400;
`;
