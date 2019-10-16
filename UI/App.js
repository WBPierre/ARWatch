
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';


const AppNavigator = createDrawerNavigator(
  {
    HomeDrawer: createStackNavigator({
      Home: {
        screen: HomeScreen
      },
    }),
  }, {
    initialRouteName: 'HomeDrawer',
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
