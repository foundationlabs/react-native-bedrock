import React, {Component} from 'react';
import styled from 'styled-components/native';
import {ListRow, ListRowSeparator, ListSection, ListSectionHeader} from '../../components/ui/list';
import {ListRowTitle, ListSectionTitle} from '../../components/ui/text';
import {ScreenContainer} from '../../components/ui/screen';

const Container = styled.ScrollView`
	flex:1;
`;

class ThemesScreen extends Component {

  render() {
    return (
      <ScreenContainer>
        <Container>
          <ListSectionHeader>
            <ListSectionTitle>
              THEMES
            </ListSectionTitle>
          </ListSectionHeader>
          <ListSection>
            <ListRow first>
              <ListRowTitle>
                Automatic
              </ListRowTitle>
            </ListRow>
            <ListRowSeparator/>
            <ListRow>
              <ListRowTitle>
                Light Mode
              </ListRowTitle>
            </ListRow>
            <ListRowSeparator/>
            <ListRow last>
              <ListRowTitle>
                Dark Mode
              </ListRowTitle>
            </ListRow>
          </ListSection>
        </Container>
      </ScreenContainer>
    );
  }
}

export default ThemesScreen;
