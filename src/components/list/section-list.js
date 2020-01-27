import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SectionList} from 'react-native';
import {ListRow, ListSectionHeader} from '../ui/list';
import {ListSectionTitle} from '../ui/text';

class NativeSectionList extends Component {

  static propTypes = {
    renderItem: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.array
    })).isRequired
  };

  renderItem = (...props) => {
    const {renderItem} = this.props;
    return (
      <ListRow>
        {renderItem(...props)}
      </ListRow>
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
    const {data} = this.props;

    return (
      <SectionList
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        data={data}
      />
    );
  }

}

export default NativeSectionList;
