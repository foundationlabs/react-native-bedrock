const SPACING = {
  horizontalPadding: 8,
  listRowHorizontalPadding: 15
};
const SIZES = {
  statusBarHeight: 20,
  tabBarHeight: 49,
  toolbarHeight: 44,
  searchBarHeight: 51,
  navigationBarHeight: 44,
  bottomSpacing: 0,

  listRowHeight: 48,
  largeListRowHeight: 60,
  listRowLeftIconSize: 29,

  segmentedControl: 29
};

const TEXT_ELEMENT_STYLES = {
  largeTitle: {},
  mediumTitle: {},
  smallTitle: {},
  listRowTitle: {
    fontSize: 17,
    letterSpacing: -0.41,
    fontWeight: 400
  },
  listRowSubtitle: {
    fontSize: 15,
    letterSpacing: -0.24,
    fontWeight: 400
  },
  tableHeader: {
    fontSize: 13,
    letterSpacing: -0.08,
    fontWeight: 400
  },
  tableFooter: {
    fontSize: 13,
    letterSpacing: -0.08,
    fontWeight: 400
  }
};

export default {
  LIGHT: {
    font: {
      primary: 'Helvetica'
    },
    size: SIZES,
    text: TEXT_ELEMENT_STYLES,
    color: {
      activeText: '#007AFF',
      activeIcon: '#007AFF',
      textPrimary: 'rgba(0,0,0,0.87)',
      textSecondary: 'rgba(142,142,147,1)',
      textListSection: 'rgba(142,142,147,1)',
      border: 'rgba(209,209,214,1)',
      error: 'rgba(255, 59,48, 1)',
      listSection: '#fff',
      listRow: '#fff',
      listRowSeparator: '',
      sectionHeader: '#fff',
      screenContainer: 'rgba(242,242,247, 1)',
      disclosureIndicator: 'rgba(203,203,205,1)'
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
    size: SIZES,
    text: TEXT_ELEMENT_STYLES,
    color: {
      textPrimary: '#fff',
      textSecondary: 'rgba(142,142,147,1)',
      textListSection: '#6e6e72',
      border: '#38383A',
      error: 'rgba(255, 59,48, 1)',
      listSection: '#1c1c1e',
      sectionHeader: '#000',
      listRow: '#1c1c1e',
      listRowSeparator: '',
      screenContainer: '#000',
      disclosureIndicator: 'rgba(203,203,205,1)'
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
