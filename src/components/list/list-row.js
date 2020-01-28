import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {BorderlessButton} from 'react-native-gesture-handler';

const ChevronRightIcon = require('../../../assets/icons/chevron-right.png');

const Container = styled.View`
  flex-direction:row;
  align-items: center;
  padding-left: 15px;
  background-color: #fff;
  height:44px;
`;

const Content = styled.View`
    flex-direction:row;
    flex:1;
    height:100%;
    align-items: center;
    justify-content: space-between;
	padding-right: 15px;
	border-bottom-width:${StyleSheet.hairlineWidth};
	border-bottom-color:${props => props.theme.color.border};
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right:12px;
  tint-color:rgba(0,122,255,1);
 `;

const ChevronIcon = styled.Image`
  width: 12px;
  height: 12px;
 `;

export const ListRowTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textPrimary};
	font-size: 17px;
	font-weight: 400;
`;

class NativeUIListRow extends Component {

  static propTypes = {
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onPress: PropTypes.func,
    showChevron: PropTypes.bool,
  };

  static defaultProps = {
    showChevron: true,
  }

  render() {
    const {
      title,
      onPress,
      leftIcon,
      showChevron
    } = this.props;

    return (
      <BorderlessButton onPress={onPress}>
        <Container>
          {!!leftIcon && <Icon
            source={leftIcon}
          />}
          <Content>
            <ListRowTitle>
              {title}
            </ListRowTitle>
            {showChevron && <ChevronIcon
              source={ChevronRightIcon}
            />}
          </Content>
        </Container>
      </BorderlessButton>
    );
  }

}

export default NativeUIListRow;
