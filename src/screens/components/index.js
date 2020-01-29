import React, {Component} from 'react';
import styled from 'styled-components/native';
import {Navigation} from 'react-native-navigation';
import {SCREENS} from '../index';
import {ScreenContainer} from '../../components/ui/screen';
import NativeUIListRow from '../../components/list/list-row';
import {SectionList} from 'react-native';
import {ListSectionHeader} from '../../components/ui/list';
import {ListSectionTitle} from '../../components/ui/text';

const Container = styled.View`
	flex:1;
`;

const Button = styled.TouchableOpacity`
`;

const StarIcon = require('../../../assets/icons/star.png');
const ChevronRightIcon = require('../../../assets/icons/chevron-right.png');

const StyledSectionList = styled(SectionList)`
  flex:1;
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
              rightIcon: ChevronRightIcon
            },
            {
              key: 'push-small-title',
              title: 'Push (Small Title)',
              action: this.onPushSmallTitle,
              rightIcon: ChevronRightIcon
            },
            {
              key: 'page-sheet',
              title: 'Page Sheet',
              action: this.onPageSheetPress,
              rightIcon: ChevronRightIcon
            },
            {
              key: 'form-sheet',
              title: 'Form Sheet',
              action: this.onFormSheetPress,
              rightIcon: ChevronRightIcon
            }
          ]
        },
        {
          title: 'TABLE ROWS',
          data: [
            {
              key: 'icon-table-row1',
              title: 'Row with left icon',
              leftIcon: StarIcon
            },
            {
              key: 'icon-table-row3',
              title: 'Awesome title',
              subtitle: 'Even better subtitle',
              leftIcon: StarIcon
            },
            {
              key: 'icon-table-row2',
              title: 'Row with right icon',
              rightIcon: StarIcon
            },
            {
              key: 'icon-table-row4',
              title: 'Swipeable row',
              subtitle: 'Swipe left to see actions'
            },
            {
              key: 'icon-table-row5',
              title: 'Swipeable row',
              subtitle: 'Swipe right to see actions'
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
