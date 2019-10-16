
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator} from 'react-navigation-stack';
import { Provider } from 'react-redux';

import HomeScreen from './src/screens/HomeScreen';
import WatchDetailScreen from './src/screens/WatchDetailScreen';
import configureStore from './store/configureStore'


const AppNavigator = createDrawerNavigator(
  {
    HomeDrawer: createStackNavigator({
      Home: {
        screen: HomeScreen,
      },
      WatchDetail: {
        screen: WatchDetailScreen
      },
    }),
  }, {
    initialRouteName: 'HomeDrawer',
    contentOptions: {
      activeTintColor: '#e91e63',
    }
  });

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render(){
    return(
      <Provider store={configureStore()}>
        <AppContainer/>
      </Provider>
    )
  }
}

export default App;
