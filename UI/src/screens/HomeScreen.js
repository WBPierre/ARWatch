import React from 'react';
import { View, Text, Image } from 'react-native';

import NavigationOptions from '../components/NavigationOptions';


class HomeScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor: tintColor }) => (
      <Image
        source={require('../images/test.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
    ...NavigationOptions,
    title: 'Accueil'
  };


  render () {
    return(
      <View>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

export default HomeScreen;
