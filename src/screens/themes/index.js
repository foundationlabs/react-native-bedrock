import React, {Component} from 'react';
import styled from 'styled-components/native';
import {SectionList} from 'react-native';
import {ListRowSeparator, ListSectionHeader} from '../../components/ui/list';
import {ListSectionTitle} from '../../components/ui/text';
import {ScreenContainer} from '../../components/ui/screen';
import {withAppState} from '../../providers/app-state';
import {THEMES} from '../../constants';
import NativeUIListRow from '../../components/list/row';
import ICONS from '../../../assets/icons';

const StyledSectionList = styled(SectionList)`
  flex:1;
`;

@withAppState
class ThemesScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mockSectionListData: [
        {
          title: 'THEMES',
          data: [
            {
              key: 'themes-automatic-row',
              title: 'Automatic',
              themeMode: THEMES.AUTOMATIC,
              action: () => this.onChangeTheme(THEMES.AUTOMATIC)
            },
            {
              key: 'themes-light-row',
              title: 'Light Mode',
              themeMode: THEMES.LIGHT,
              action: () => this.onChangeTheme(THEMES.LIGHT)
            },
            {
              key: 'themes-dark-row',
              title: 'Dark Mode',
              themeMode: THEMES.DARK,
              action: () => this.onChangeTheme(THEMES.DARK)
            }
          ]
        }
      ]
    };
  }

  onChangeTheme = themeMode => {
    this.props.setTheme(themeMode);
  };

  renderItem = ({item}) => {
    const {currentTheme} = this.props;
    const selected = item.themeMode === currentTheme;
    return (
      <NativeUIListRow
        onPress={item.action}
        title={item.title}
        subtitle={item.subtitle}
        leftIcon={item.leftIcon}
        swipeableProps={item.swipeableProps}
        rightIcon={selected ? ICONS.SYSTEM.CHECKMARK : null}
        showChevron={item.showChevron}
        value={item.value}
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
        <StyledSectionList
          ItemSeparatorComponent={() => <ListRowSeparator/>}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.key}
          sections={this.state.mockSectionListData}
        />
      </ScreenContainer>
    );
  }
  
}

export default ThemesScreen;
