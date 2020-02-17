import React, {Component} from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import {ListRow, ListRowSeparator, ListSection, ListSectionHeader} from '../../components/ui/list';
import {ListRowTitle, ListSectionTitle} from '../../components/ui/text';
import {ScreenContainer} from '../../components/ui/screen';
import {withAppState} from '../../providers/app-state';
import {THEMES} from '../../constants';

const Container = styled.ScrollView`
	flex:1;
`;

const Button = styled.TouchableOpacity`
	height: 44px;
`;

@withAppState
class ThemesScreen extends Component {
  onChangeTheme = themeMode => {
    this.props.setTheme(themeMode);
  };

  render() {
    let {themeMode} = this.props;

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
            <Button onPress={() => this.onChangeTheme(THEMES.LIGHT)}>
              <ListRow justifyContent="space-between">
                <ListRowTitle>
                  Light Mode
                </ListRowTitle>
                {themeMode === THEMES.LIGHT && <Image source={require('../../assets/done.png')} />}
              </ListRow>
            </Button>
            <ListRowSeparator />
            <Button onPress={() => this.onChangeTheme(THEMES.DARK)}>
              <ListRow last justifyContent="space-between">
                <ListRowTitle>
                  Dark Mode
                </ListRowTitle>
                {themeMode === THEMES.DARK && <Image source={require('../../assets/done.png')} />}
              </ListRow>
            </Button>
          </ListSection>
        </Container>
      </ScreenContainer>
    );
  }
}

export default ThemesScreen;
