import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { ListRow, ListRowSeparator, ListSection, ListSectionHeader } from '../../components/ui/list';
import { ListRowTitle, ListSectionTitle } from '../../components/ui/text';
import { ScreenContainer } from '../../components/ui/screen';
import { ThemeProviderContext } from '../../components/ui/theme-provider'

const Container = styled.ScrollView`
	flex:1;
`;

const Button = styled.TouchableOpacity`
	height: 44px;
`;

class ThemesScreen extends Component {
  onChangeTheme = themeMode => {
    this.props.onChangeTheme(themeMode);
  }

  render() {
    let { themeMode } = this.props;

    return (
      <ScreenContainer>
        <Container>
          <ListSectionHeader>
            <ListSectionTitle>
              THEMES
            </ListSectionTitle>
          </ListSectionHeader>
          <ListSection>
            <Button onPress={() => this.onChangeTheme('automatic')}>
              <ListRow first justifyContent="space-between">
                <ListRowTitle>
                  Automatic
                </ListRowTitle>
                {themeMode === 'automatic' && <Image source={require('../../assets/done.png')} />}
              </ListRow>
            </Button>
            <ListRowSeparator />
            <Button onPress={() => this.onChangeTheme('light')}>
              <ListRow justifyContent="space-between">
                <ListRowTitle>
                  Light Mode
                </ListRowTitle>
                {themeMode === 'light' && <Image source={require('../../assets/done.png')} />}
              </ListRow>
            </Button>
            <ListRowSeparator />
            <Button onPress={() => this.onChangeTheme('dark')}>
              <ListRow last justifyContent="space-between">
                <ListRowTitle>
                  Dark Mode
                </ListRowTitle>
                {themeMode === 'dark' && <Image source={require('../../assets/done.png')} />}
              </ListRow>
            </Button>
          </ListSection>
        </Container>
      </ScreenContainer>
    );
  }
}

const _ThemesScreen = props => (
  <ThemeProviderContext.Consumer>
    {({ themeMode, onChangeTheme }) => <ThemesScreen {...props} themeMode={themeMode} onChangeTheme={onChangeTheme} />}
  </ThemeProviderContext.Consumer>
)

export default _ThemesScreen;
