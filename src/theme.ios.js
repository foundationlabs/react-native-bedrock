const SPACING = {
  horizontalPadding: 8
};

export default {
  LIGHT: {
    font: {
      primary: 'Helvetica'
    },
    color: {
      textPrimary: 'rgba(0,0,0,0.87)',
      textListSection: 'rgba(142,142,147,1)',
      border: 'rgba(209,209,214,1)',
      error: 'rgba(255, 59,48, 1)',
      listSection: '#fff',
      listRow: '#fff',
      listRowSeparator: '',
      sectionHeader: 'rgba(242,242,247, 1)',
      screenContainer: 'rgba(242,242,247, 1)'
    },
    spacing: SPACING,
    navigation: {
      topBar: {
        background: {
          color: '#fff'
        },
        title: {
          color: '#000'
        },
        largeTitle: {
          color: '#000'
        }
      },
      bottomTabs: {
        backgroundColor: '#fff'
      }
    }
  },
  DARK: {
    font: {
      primary: 'Helvetica'
    },
    color: {
      textPrimary: '#fff',
      textListSection: '#6e6e72',
      border: '#38383A',
      error: 'rgba(255, 59,48, 1)',
      listSection: '#1c1c1e',
      sectionHeader: '#000',
      listRow: '#1c1c1e',
      listRowSeparator: '',
      screenContainer: '#000'
    },
    spacing: SPACING,
    navigation: {
      topBar: {
        background: {
          color: '#000'
        },
        title: {
          color: '#fff'
        },
        largeTitle: {
          color: '#fff'
        }
      },
      bottomTabs: {
        backgroundColor: '#000'
      }
    }
  }
};
