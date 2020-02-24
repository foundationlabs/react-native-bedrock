import React, {Component} from 'react';
import styled from 'styled-components/native';
import {getVersion} from 'react-native-device-info';
import {ListRowSeparator, ListSectionHeader} from '../../components/ui/list';
import {ListSectionTitle} from '../../components/ui/text';
import {ScreenContainer} from '../../components/ui/screen';
import NativeUIListRow from '../../components/list/row';
import {SectionList} from 'react-native';

const StyledSectionList = styled(SectionList)`
  flex:1;
`;

class AboutScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mockSectionListData: [
        {
          title: 'SUMMARY',
          data: [
            {
              key: 'summary-row',
              title: 'Bedrock is a React Native starter kit for creating apps that adhere to iOS and Android design guidelines.'
            }
          ]
        },
        {
          title: 'LEGAL',
          data: [
            {
              key: 'legal-version-row',
              title: 'Version',
              value: getVersion()
            },
            {
              key: 'legal-license-row',
              title: 'License',
              value: 'MIT',
              showChevron: true
            }
          ]
        }
      ]
    };
  }

  renderItem = ({item}) => {
    return (
      <NativeUIListRow
        onPress={item.action}
        title={item.title}
        subtitle={item.subtitle}
        leftIcon={item.leftIcon}
        swipeableProps={item.swipeableProps}
        rightIcon={item.rightIcon}
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

export default AboutScreen;
