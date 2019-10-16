import React from 'react';
import { View, Text, Image, StyleSheet, Button, FlatList } from 'react-native'
import {AsyncStorage} from 'react-native';

import NavigationOptions from '../components/NavigationOptions';
import Layout from '../config/Layout'


class CartScreen extends React.Component {

    static navigationOptions = {
        ...NavigationOptions,
        title: 'Panier',
    };
    constructor(props){
        super(props);
        this.state = {
            cart: null,
            isVisible: true
        };
        this._retrieveData();
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('Cart');
            if (value !== null) {
                this.setState({cart: value});
                this.setState({isVisible:false});

            }
        } catch (error) {

        }
    };

    render () {
        return(
            <View style={styles.container}>
                {this.state.isVisible ? (<Text style={styles.textEmpty}>Votre panier est vide</Text>) : null }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: Layout.marginL,
    }
});

export default CartScreen;
