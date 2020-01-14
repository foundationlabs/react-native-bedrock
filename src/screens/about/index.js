import React, {Component} from 'react';
import styled from 'styled-components/native';
import {ListRow, ListRowSeparator, ListSection, ListSectionHeader} from '../../components/ui/list';
import {ListRowTitle, ListSectionTitle} from '../../components/ui/text';
import {ScreenContainer} from '../../components/ui/screen';

const Container = styled.ScrollView`
	flex:1;
`;

class AboutScreen extends Component {

  render() {
    return (
      <ScreenContainer>
        <Container>
          <ListSectionHeader>
            <ListSectionTitle>
              SUMMARY
            </ListSectionTitle>
          </ListSectionHeader>
          <ListSection>
            <ListRow first last>
              <ListRowTitle>
                Bedrock is a React Native starter kit for creating apps that adhere to iOS and Android design
                guidelines.
              </ListRowTitle>
            </ListRow>
          </ListSection>
          <ListSectionHeader>
            <ListSectionTitle>
              LEGAL
            </ListSectionTitle>
          </ListSectionHeader>
          <ListSection>
            <ListRow first>
              <ListRowTitle>
                Version
              </ListRowTitle>
            </ListRow>
            <ListRowSeparator/>
            <ListRow last>
              <ListRowTitle>
                License
              </ListRowTitle>
            </ListRow>
          </ListSection>
        </Container>
      </ScreenContainer>
    );
  }
}

export default AboutScreen;
