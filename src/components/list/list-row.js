import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {BorderlessButton} from 'react-native-gesture-handler';

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

const LeftContent = styled.View`
   flex:1;
   height:100%;
   justify-content:center;
`;

const RightContent = styled.View`
   flex-direction:row;
   justify-content:flex-end;
   height:100%;
   align-items:center;
`;


const LeftIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right:12px;
  tint-color:rgba(0,122,255,1);
 `;

const RightIcon = styled.Image`
  width: 16px;
  height: 16px;
 `;

export const ListRowTitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textPrimary};
	font-size: 17px;
	font-weight: 400;
`;

export const ListRowSubtitle = styled.Text`
	font-family: ${props => props.theme.font.primary};
    color: ${props => props.theme.color.textPrimary};
	font-size: 12px;
	font-weight: 400;
`;

class NativeUIListRow extends Component {

  static propTypes = {
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    actionText: PropTypes.string,
    onPress: PropTypes.func,
    showChevron: PropTypes.bool,
    swipeableProps: PropTypes.shape({
      leftThreshold: PropTypes.number,
      rightThreshold: PropTypes.number,
      overshootLeft: PropTypes.bool,
      overshootRight: PropTypes.bool,
      renderLeftActions: PropTypes.func,
      renderRightActions: PropTypes.func
    })
  };

  static defaultProps = {
    showChevron: false,
    swipeable: false
  };

  render() {
    const {
      title,
      subtitle,
      onPress,
      leftIcon,
      rightIcon
    } = this.props;

    return (
      <BorderlessButton onPress={onPress}>
        <Container>
          {!!leftIcon && <LeftIcon
            source={leftIcon}
          />}
          <Content>
            <LeftContent>
              <ListRowTitle>
                {title}
              </ListRowTitle>
              {!!subtitle && <ListRowSubtitle>
                {subtitle}
              </ListRowSubtitle>}
            </LeftContent>
            <RightContent>
              {!!rightIcon && <RightIcon
                source={rightIcon}
              />}
            </RightContent>
          </Content>
        </Container>
      </BorderlessButton>
    );
  }

}

export default NativeUIListRow;
