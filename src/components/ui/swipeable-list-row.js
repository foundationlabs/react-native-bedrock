import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native'
import styled from 'styled-components/native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListRow } from './list'

const AnimatedView = styled(Animated.View)`
    width: 64px;
    backgroundColor: ${props => props.theme.color.error};
`

export class SwipeableListRow extends React.PureComponent {
    renderDeleteAction = (progress, dragX) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [64, 0],
        });

        return (
            <AnimatedView
                style={[
                    {
                        transform: [{ translateX: trans }],
                    },
                ]}>
                <TouchableOpacity onPress={this.props.onDeleteItem}></TouchableOpacity>
            </AnimatedView>
        );
    };

    render() {
        return (
            <Swipeable friction={2} leftThreshold={30} rightThreshold={40} renderRightActions={this.renderDeleteAction} {...this.props}>
                <ListRow>
                    {this.props.children}
                </ListRow>
            </Swipeable>
        )
    }
}

SwipeableListRow.propTypes = {
    onDeleteItem: PropTypes.func,
    ...Swipeable.propTypes
}