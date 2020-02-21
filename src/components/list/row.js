import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {BorderlessButton} from 'react-native-gesture-handler';
import {ListRowSubtitle, ListRowTitle} from '../ui/text';

const Container = styled.View`
  flex-direction:row;
  align-items: center;
  padding-left: 15px;
  background-color: ${props => props.theme.color.listRow};
  height:${props => props.subtitle ? props.theme.size.largeListRowHeight : props.theme.size.listRowHeight};
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
 `;

const RightIcon = styled.Image`
  width: 16px;
  height: 16px;
 `;

class NativeUIListRow extends Component {

  static propTypes = {
    leftIcon: PropTypes.number,
    rightIcon: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    actionText: PropTypes.string,
    onPress: PropTypes.func,
    showChevron: PropTypes.bool,
    swipeableProps: PropTypes.shape({
      leftThreshold: PropTypes.number,
      rightThreshold: PropTypes.number,
      overshootLeft: PropTypes.number,
      overshootRight: PropTypes.number,
      renderLeftActions: PropTypes.func,
      renderRightActions: PropTypes.func
    })
  };

  static defaultProps = {};

  render() {
    const {
      title,
      subtitle,
      onPress,
      leftIcon,
      rightIcon,
      swipeableProps
    } = this.props;

    const content = (
      <BorderlessButton onPress={onPress}>
        <Container subtitle={!!subtitle}>
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

    if (swipeableProps) {
      return (
        <Swipeable {...swipeableProps}>
          {content}
        </Swipeable>
      );
    }

    return content;

  }

}

export default NativeUIListRow;
