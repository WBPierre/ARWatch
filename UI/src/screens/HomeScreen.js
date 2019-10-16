import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import NavigationOptions from '../components/NavigationOptions';
import CardWatch from '../components/CardWatch'
import Layout from '../config/Layout'
import Separator from '../components/Separator'


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


  _renderItem ({item, index}) {
    return (
      <View>
        <CardWatch
          key={index}
          title={item.title}
          price={item.price}
          image={item.image}
          onPress={item.onPress}
        />
        <Separator/>
      </View>
    );
  }

  render () {

    const api =
    [
      {
        title: 'Boitier en aluminium argent de 40 mm',
        price: 'A partir de 449€',
        image: require('../images/watch1.jpeg'),
        onPress: () => this.props.navigation.navigate('WatchDetail')
      },
      {
        title: 'test',
        image: require('../images/watch1.jpeg')
      },
      {
        title: 'test',
        image: require('../images/watch1.jpeg')
      }
    ];

    return(
      <View style={styles.container}>
        <FlatList
          data={api}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Layout.marginL
  },
});

export default HomeScreen;
