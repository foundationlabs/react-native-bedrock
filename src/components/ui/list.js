import styled from "styled-components/native"
import { StyleSheet } from "react-native"


export const ListSection = styled.View`
	background-color: #fff;
`
export const ListSectionHeader = styled.View`
	padding-left: 15px;
	padding-right: 15px;
	height: 64px;
	padding-bottom: 6px;
	justify-content: flex-end;
`

export const ListRow = styled.View`
	border-top-width: ${props => props.first ? StyleSheet.hairlineWidth : 0};
	border-bottom-width: ${props => props.last ? StyleSheet.hairlineWidth : 0};
	border-top-color: ${props => props.first ? props.theme.color.border : "transparent"};
	border-bottom-color: ${props => props.last ? props.theme.color.border : "transparent"};
	padding-left: 15px;
	padding-right: 15px;
	background-color: #fff;
	padding-top: 12px;
	padding-bottom: 12px;
	justify-content: center;
`

export const ListRowSeparator = styled.View`
	height: ${StyleSheet.hairlineWidth};
	margin-left: 15px;
	background-color: ${props => props.theme.color.border};
`
