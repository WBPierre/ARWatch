import React from 'react';
import { View, Image, StyleSheet, FlatList, Button } from 'react-native';
import axios from 'axios';
import NavigationOptions from '../components/NavigationOptions';
import CardWatch from '../components/CardWatch';
import Layout from '../config/Layout';



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

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.handlePress.bind(this);
  }

  componentDidMount = () => {
    axios.get('https://hackaton2019watcher.herokuapp.com/products')
      .then(res => this.setState({ products: res.data}));
  };


   handlePress = (item) => {
    this.props.navigation.navigate('WatchDetail', { item });
  }

  _renderItem ({item, index}) {
    return (
      <View>
        <CardWatch
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
          onPress={() => this.handlePress(item)}
        />
      </View>
    );
  }

  render () {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
          renderItem={this._renderItem.bind(this)}
          keyExtractor={item => item.id}
        />
        <Button onPress={this.handlePress} title={"test"} />
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
