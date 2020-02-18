import React, {Component} from 'react';
import styled from 'styled-components/native';
import {Animated, SectionList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {SCREENS} from '../index';
import ICONS from '../../assets/icons';
import {ScreenContainer} from '../../components/ui/screen';
import NativeUIListRow from '../../components/list/row';
import {ListSectionHeader} from '../../components/ui/list';
import {ListSectionTitle} from '../../components/ui/text';

const Container = styled.View`
	flex:1;
`;

const StyledSectionList = styled(SectionList)`
  flex:1;
`;

const AnimatedView = styled(Animated.View)`
    width: 64px;
    background-color: ${props => props.theme.color.error};
`;

class ComponentsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mockSectionListData: [
        {
          title: 'NAVIGATION',
          data: [
            {
              key: 'push-large-title',
              title: 'Push (Large Title)',
              action: this.onPushLargeTitle,
              rightIcon: ICONS.SYSTEM.DONE
            },
            {
              key: 'push-small-title',
              title: 'Push (Small Title)',
              action: this.onPushSmallTitle,
              rightIcon: ICONS.SYSTEM.DONE
            },
            {
              key: 'page-sheet',
              title: 'Page Sheet',
              action: this.onPageSheetPress,
              rightIcon: ICONS.SYSTEM.DONE
            },
            {
              key: 'form-sheet',
              title: 'Form Sheet',
              action: this.onFormSheetPress,
              rightIcon: ICONS.SYSTEM.DONE
            }
          ]
        },
        {
          title: 'TABLE ROWS',
          data: [
            {
              key: 'icon-table-row1',
              title: 'Row with left icon',
              leftIcon: ICONS.SYSTEM.DONE
            },
            {
              key: 'icon-table-row3',
              title: 'Awesome title',
              subtitle: 'Even better subtitle',
              leftIcon: ICONS.SYSTEM.DONE
            },
            {
              key: 'icon-table-row2',
              title: 'Row with right icon',
              rightIcon: ICONS.SYSTEM.DONE
            },
            {
              key: 'icon-table-row4',
              title: 'Swipeable row',
              subtitle: 'Swipe left to see actions',
              swipeableProps: {
                rightThreshold: 40,
                overshootRight: 20,
                friction: 2,
                leftThreshold: 30,
                renderRightActions: this.renderRightActions
              }
            },
            {
              key: 'icon-table-row5',
              title: 'Swipeable row',
              subtitle: 'Swipe right to see actions',
              swipeableProps: {
                rightThreshold: 40,
                friction: 2,
                renderLeftActions: this.renderLeftActions
              }
            }
          ]
        },
        {
          title: 'TYPOGRAPHY',
          data: [
            {
              key: 'typography',
              title: 'Typography',
              action: this.onTypographyPress
            }
          ]
        }
      ]
    };
  }

  renderRightActions = (progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [64, 0]
    });

    return (
      <AnimatedView
        style={[
          {
            transform: [{translateX: trans}]
          }
        ]}>
        <TouchableOpacity onPress={this.props.onDeleteItem}>

        </TouchableOpacity>
      </AnimatedView>
    );
  };

  renderLeftActions = (progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [-64, 0]
    });

    return (
      <AnimatedView
        style={[
          {
            transform: [{translateX: trans}]
          }
        ]}>
        <TouchableOpacity onPress={this.props.onDeleteItem}>

        </TouchableOpacity>
      </AnimatedView>
    );
  };

  onPushLargeTitle = () => {
    const {componentId} = this.props;
    Navigation.push(componentId, {
      component: {
        name: SCREENS.ABOUT,
        options: {
          topBar: {
            visible: true,
            drawBehind: true,
            title: {
              text: 'Login',
              fontWeight: 'semibold'
            },
            largeTitle: {
              visible: true
            },
            rightButtons: [
              {
                id: 'done',
                systemItem: 'add'
              }
            ]
          }
        }
      }
    });
  };

  onPushSmallTitle = () => {
    const {componentId} = this.props;
    Navigation.push(componentId, {
      component: {
        name: SCREENS.ABOUT,
        options: {
          topBar: {
            visible: true,
            drawBehind: false,
            searchBar: true,
            background: {
              color: 'white',
              translucent: true,
              blur: false
            },
            searchBarPlaceholder: 'Search',
            title: {
              text: 'Register',
              fontWeight: 'semibold'
            },
            rightButtons: [
              {
                id: 'done',
                text: 'Action'
              }
            ]
          }
        }
      }
    });
  };

  onPageSheetPress = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: SCREENS.ABOUT,
            options: {
              modalPresentationStyle: 'pageSheet',
              topBar: {
                title: {
                  text: 'Page Sheet',
                  fontWeight: 'semibold'
                },
                visible: true,
                drawBehind: false,
                leftButtons: [
                  {
                    id: 'cancel',
                    systemItem: 'cancel'
                  }
                ],
                rightButtons: [
                  {
                    id: 'done',
                    systemItem: 'done',
                    fontWeight: 'semibold'
                  }
                ]
              }
            }
          }
        }]
      }
    });
  };

  onFormSheetPress = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: SCREENS.ABOUT,
            options: {
              modalPresentationStyle: 'formSheet',
              topBar: {
                title: {
                  text: 'Form Sheet',
                  fontWeight: 'semibold'
                },
                searchBar: true,
                searchBarPlaceholder: 'Search',
                visible: true,
                drawBehind: false,
                leftButtons: [
                  {
                    id: 'cancel',
                    systemItem: 'cancel'
                  }
                ],
                rightButtons: [
                  {
                    id: 'done',
                    systemItem: 'done',
                    fontWeight: 'semibold'
                  }
                ]
              }
            }
          }
        }]
      }
    });
  };

  onTypographyPress = () => {
    const {componentId} = this.props;
    Navigation.push(componentId, {
      component: {
        name: SCREENS.TYPOGRAPHY,
        options: {
          topBar: {
            visible: true,
            drawBehind: true,
            title: {
              text: 'Typography',
              fontWeight: 'semibold'
            },
            largeTitle: {
              visible: true
            }
          },
          bottomTabs: {
            animate: false,
            visible: false,
            drawBehind: true
          }
        }
      }
    });
  };

  onBottomTabsPress = () => {
    const {componentId} = this.props;
    Navigation.push(componentId,
      {
        bottomTabs: {
          options: {
            topBar: {
              title: {
                text: 'Tab 1',
                fontWeight: 'semibold'
              }
            }
          },
          children: [
            {
              component: {
                name: SCREENS.ABOUT,
                options: {
                  bottomTab: {
                    text: 'Tab 1'
                  }
                }
              }
            },
            {
              component: {
                name: SCREENS.ABOUT,
                options: {
                  bottomTab: {
                    text: 'Tab 2'
                  }
                }
              }
            },
            {
              component: {
                name: SCREENS.ABOUT,
                options: {
                  bottomTab: {
                    text: 'Tab 3'
                  }
                }
              }
            }
          ]
        }
      }
    );
  };

  renderItem = ({item}) => {
    return (
      <NativeUIListRow
        onPress={item.action}
        title={item.title}
        subtitle={item.subtitle}
        leftIcon={item.leftIcon}
        swipeableProps={item.swipeableProps}
        rightIcon={item.rightIcon}
      />
    );
  };

  renderSectionHeader = ({section: {title}}) => {
    return (
      <ListSectionHeader>
        <ListSectionTitle>
          {title}
        </ListSectionTitle>
      </ListSectionHeader>
    );
  };

  render() {
    return (
      <ScreenContainer>
        <Container>
          <StyledSectionList
            renderSectionHeader={this.renderSectionHeader}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.key}
            sections={this.state.mockSectionListData}
          />
        </Container>
      </ScreenContainer>
    );
  }
}

export default ComponentsScreen;
