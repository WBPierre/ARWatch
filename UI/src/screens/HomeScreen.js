import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import NavigationOptions from '../components/NavigationOptions';
import CardWatch from '../components/CardWatch';
import Separator from '../components/Separator';
import Layout from '../config/Layout';

import { fetchProducts } from '../../store/actions/products';


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
    name: 'Accueil'
  };

  state = {
    products: []
  }

  componentDidMount = () => {
    axios.get('https://hackaton2019watcher.herokuapp.com/products')
      .then(res => this.setState({ products: res.data}));
  };

  _renderItem ({item, index}) {
    return (
      <View>
        <CardWatch
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
          onPress={item.onPress}
        />
        <Separator/>
      </View>
    );
  }

  render () {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
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
