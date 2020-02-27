import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {IS_ANDROID} from '../../utils/platform-utils';

export const ListSection = styled.View`
	background-color: ${props => props.theme.color.listSection};
`;
export const ListSectionHeader = styled.View`
	padding-left: 15px;
	padding-right: 15px;
	justify-content: flex-end;
	border-bottom-width: ${IS_ANDROID ? 0 : StyleSheet.hairlineWidth};
	border-bottom-color: ${props => props.theme.color.border};
	background-color: ${props => props.theme.color.sectionHeader};
	padding-top: 8px;
	padding-bottom: 8px;
`;

export const ListRow = styled.View`
	border-top-width: ${props => props.first ? StyleSheet.hairlineWidth : 0};
	border-bottom-width: ${props => props.last ? StyleSheet.hairlineWidth : 0};
	border-top-color: ${props => props.first ? props.theme.color.border : 'transparent'};
	border-bottom-color: ${props => props.last ? props.theme.color.border : 'transparent'};
	padding-left: 15px;
	padding-right: 15px;
	min-height:${props => props.subtitle ? props.theme.size.largeListRowHeight : props.theme.size.listRowHeight}
	background-color: ${props => props.theme.color.listRow};
	padding-top: 12px;
	padding-bottom: 12px;
	justify-content: ${props => props.justifyContent || 'flex-start'};
	alignItems: center;
	flexDirection: row
`;

export const ListRowSeparator = styled.View`
	height: ${StyleSheet.hairlineWidth};
	margin-left: 15px;
	background-color: ${props => props.theme.color.border};
`;

export const ListRowRightIcon = styled.Image`
  width: 16px;
  height: 16px;
 `;

export const ListRowLeftIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right:12px;
 `;
