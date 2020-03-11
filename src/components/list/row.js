import React, {Component} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {TouchableNativeFeedback, BorderlessButton} from 'react-native-gesture-handler';
import {ListRowSubtitle, ListRowTitle, ListRowValueLabel} from '../ui/text';
import ICONS from '../../../assets/icons';
import {ListRow, ListRowLeftIcon} from '../ui/list';
import {IS_ANDROID} from '../../utils/platform-utils';

const LeftContent = styled.View`
   flex:1;
   justify-content:center;
`;

const RightContent = styled.View`
   flex-direction:row;
   justify-content:flex-end;
   align-items:center;
`;

const RightIcon = styled.Image`
  width: 12px;
  height: 12px;
  margin-left: 12px;
  tint-color:${props => props.theme.color.disclosureIndicator};
 `;

const Touchable = IS_ANDROID ? TouchableNativeFeedback : BorderlessButton;


class NativeUIListRow extends Component {

  static propTypes = {
    leftIcon: PropTypes.number,
    rightIcon: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    value: PropTypes.string,
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
      showChevron,
      swipeableProps,
      value
    } = this.props;


    const content = (
      <Touchable onPress={onPress}>
        <ListRow subtitle={!!subtitle}>
          {!!leftIcon && <ListRowLeftIcon
            source={leftIcon}
          />}
          <LeftContent>
            <ListRowTitle>
              {title}
            </ListRowTitle>
            {!!subtitle && <ListRowSubtitle>
              {subtitle}
            </ListRowSubtitle>}
          </LeftContent>
          <RightContent>
            {value && <ListRowValueLabel>{value}</ListRowValueLabel>}
            {showChevron && <RightIcon source={ICONS.SYSTEM.CHEVRON}/>}
            {!!rightIcon && <RightIcon source={rightIcon}/>}
          </RightContent>
        </ListRow>
      </Touchable>
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
