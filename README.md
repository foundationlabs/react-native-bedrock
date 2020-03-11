<h1 align="center">
 <img src="bedrock.png" width="230px">
</h1>

<p align="center">Bedrock is a React Native starter kit for creating apps that adhere to iOS and Android design guidelines.</p>

![iOS and Android](ios-android-demo.png)

## Intro
iOS and Android come with sophisticated native components which are underutilized by product development teams using React Native. Bedrock enables teams to build UIs that are familiar to their users.

## Who is this for?
- The team is building an MVP, or
- The product would benefit from a native look and feel.

## FAQ
- **How does this differ from other starter kits?** Using this starter kit is the fastest way to build a good user experience. Apps that utilize native components enjoy better engagement metrics.
- **What's the status of this project?** Bedrock is pre-Alpha and in active development.

## Getting Started

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/foundationlabs/react-native-bedrock.git

# Navigate to clonned folder and Install dependencies
cd react-native-bedrock && yarn install

# Install Pods
cd ios && pod install
```

#### 2. Open project in your iOS simulator

Run this command to start the development server and to start your app on iOS simulator:
```
yarn ios
```

Or, if you prefer Android:
```
yarn android
```

## Documentation

### Navigation

In this starter [react-native-navigation](https://wix.github.io/react-native-navigation/#/) is used which under the hood uses native components for Navigation.We strongly suggest to go through the docs before starting. Here are some examples:
##### [Push Screen](https://wix.github.io/react-native-navigation/#/docs/screen-api?id=pushcomponentid-layout)

```javascript
const {componentId} = this.props;
Navigation.push(componentId, {
  component: {
    name: SCREENS.ABOUT,
    options: {
      topBar: {
        visible: true,
        drawBehind: true,
        title: {
          text: 'Login',
          fontWeight: 'semibold'
        },
      }
    }
  }
});
```

##### [Show Modal](https://wix.github.io/react-native-navigation/#/docs/screen-api?id=pushcomponentid-layout)

```javascript
Navigation.showModal({
  stack: {
    children: [{
      component: {
        name: SCREENS.ABOUT,
        options: {
          modalPresentationStyle: 'formSheet',
          topBar: {
            title: {
              text: 'Form Sheet',
              fontWeight: 'semibold'
            },
          }
        }
      }
    }]
  }
});
```


### Themes [WIP]
For themes we have separated Android and iOS theme files [`theme.ios`](https://github.com/foundationlabs/react-native-bedrock/blob/master/src/theme.ios.js) and [`theme.android`](https://github.com/foundationlabs/react-native-bedrock/blob/master/src/theme.android.js).

```javascript
const SPACING = {
  horizontalPadding: 8,
  listRowHorizontalPadding: 15
};
const SIZES = {
  statusBarHeight: IS_IPHONE_X ? 44 : 20,
  tabBarHeight: 49,
  toolbarHeight: 44,
  searchBarHeight: 51,
  navigationBarHeight: 44,
  bottomSpacing: IS_IPHONE_X ? 34 : 0,

  listRowHeight: 43,
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
      sectionHeader: 'rgba(242,242,247, 1)',
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
```


### Icons [WIP]
To match the design guidelines of iOS and Android the Icons will also have to match platform style, to do that you can use predefined set of icons [`icons.ios`](https://github.com/foundationlabs/react-native-bedrock/blob/master/assets/icons.ios.js) and [`icons.android`](https://github.com/foundationlabs/react-native-bedrock/blob/master/assets/icons.android.js)

```javascript
export default {
  SYSTEM: {
    STAR: require('./ios-icons/star.png'),

    THEMES: require('./android-icons/ic_palette.png'),
    INFO: require('./android-icons/ic_info.png'),

    DONE: require('./ios-icons/done.png'),
    CHECKMARK: require('./ios-icons/selected.png'),
    CHEVRON: require('./ios-icons/chevron.png'),
    CONTROL_CENTER: require('./ios-icons/control-center.png'),
    DISPLAY: require('./ios-icons/display-and-brightness.png')
  }
};
```

Usage:
```javascript
import ICONS from '[YOUR PATH]/assets/icons';

<Icon src={ICONS.SYSTEM.STAR} />

```


#### Components [WIP]

To build a consistent looking UI this started kit has prebuilt components list which use values defined in Themes

##### [Typography](https://github.com/foundationlabs/react-native-bedrock/blob/master/src/components/ui/text.js)
##### [List Elements](https://github.com/foundationlabs/react-native-bedrock/blob/master/src/components/ui/list.js)
##### [Screen Elements](https://github.com/foundationlabs/react-native-bedrock/blob/master/src/components/ui/screen.js)


##### [NativeUIListRow](https://github.com/foundationlabs/react-native-bedrock/blob/master/src/components/list/row.js)

```javascript
<NativeUIListRow
    onPress={() => {}}
    title={"Row title"}
    subtitle={"Row subtitle"}
    leftIcon={require([ICON PATH])}
    swipeableProps={{
        rightThreshold: 40,
        overshootRight: 20,
        friction: 2,
        leftThreshold: 30,
        renderRightActions: [RENDER FUNCTION]
    }}
    rightIcon={require([ICON PATH])}
    showChevron
/>
```

## Further Help?
This repo is a great place to start, but if you'd prefer to sit back and have your new project built for you, [get in touch with us directly](https://foundationlabs.io) and we can organize a quote.


## License

[MIT License](https://github.com/foundationlabs/react-native-bedrock/blob/master/LICENSE)


