import styled from "styled-components/native"
import { StyleSheet } from "react-native"


export const ListSection = styled.View`
	background-color: #fff;
`
export const ListSectionHeader = styled.View`
	background-color: rgba(242,242,247, 1);
	padding-left: 15px;
	padding-right: 15px;
	border-bottom-color: ${props => props.theme.color.border};
	border-bottom-width: ${StyleSheet.hairlineWidth};
	padding-top: 8px;
	padding-bottom: 8px;
	justify-content: flex-end;
`

export const ListRow = styled.View`
	border-top-width: ${props => props.first ? StyleSheet.hairlineWidth : 0};
	border-bottom-width: ${props => props.last ? StyleSheet.hairlineWidth : 0};
	border-top-color: ${props => props.first ? props.theme.color.border : "transparent"};
	border-bottom-color: ${props => props.last ? props.theme.color.border : "transparent"};
	background-color: #fff;
	justify-content: center;
`

export const ListRowSeparator = styled.View`
	height: ${StyleSheet.hairlineWidth};
	margin-left: 15px;
	background-color: ${props => props.theme.color.border};
`
