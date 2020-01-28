import React, {Component} from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {SectionList} from 'react-native';
import {ListRow, ListSectionHeader, ListRowSeparator} from '../ui/list';
import {ListSectionTitle} from '../ui/text';


const StyledSectionList = styled(SectionList)`
  flex:1;
`

class NativeSectionList extends Component {

  static propTypes = {
    renderItem: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.array
    })).isRequired
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
    const {data, renderItem} = this.props;

    return (
      <StyledSectionList
        renderSectionHeader={this.renderSectionHeader}
        renderItem={renderItem}
        sections={data}
      />
    );
  }

}

export default NativeSectionList;
