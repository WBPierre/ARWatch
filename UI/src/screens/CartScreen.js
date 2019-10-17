import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements'

import NavigationOptions from '../components/NavigationOptions';
import Layout from '../config/Layout'
import stripe from 'tipsi-stripe'


class CartScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            ...NavigationOptions,
            title: 'Panier',
            headerLeft: (
              <Icon
                onPress={() => navigation.openDrawer()}
                name='bars'
                type='font-awesome'
                color='#000'
                size={30}
              />
            ),
            headerStyle: {
                backgroundColor: '#fff',
                shadowColor: 'transparent',
                elevation: 0,
                borderBottomColor: 'transparent',
                borderBottomWidth: 0,
                marginLeft: Layout.marginL
            }
        }
    };
    constructor(props){
        super(props);
        this.state = {
            products: [],
            totalCart: 0
        };
    }

    componentDidMount  () {
        this.setState({ products: this.props.products.products});
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log(prevProps);
    }

    _renderItem ({item, index}) {
        return (
          <View key={index} style={styles.itemContainer}>
              <Image
                source={{uri: item.image}}
                style={styles.image}
              />
              <View style={styles.informations}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}€</Text>
              </View>
          </View>
        );
    }

    FlatListItemSeparator = () => {
        return (
          <View
            style={{
                height: 1,
                width: Layout.window.width - 2*Layout.marginL,
                backgroundColor: Layout.color.separator,
            }}
          />
        );
    }

    const  = stripe.setOptions({ publishableKey: 'pk_test_t37blAfCMrTelgLdJH5B1QBq'});

    requestPayment = () => {
        return stripe
          .paymentRequestWithCardForm()
          .then(stripeTokenInfo => {
              console.warn('Token created', { stripeTokenInfo });
          })
          .catch(error => {
              console.warn('Payment failed', { error });
          });
    };

    render () {

        return(
          <View style={styles.container}>
              {this.state.products.length === 0 && <Image source={require('../images/empty.png')} style={styles.emptyCart} />}
              <FlatList
                data={this.state.products}
                renderItem={this._renderItem.bind(this)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={this.FlatListItemSeparator}
              />
              <View style={styles.totalCart}>
                  <View style={{ flexDirection: 'row', paddingVertical: Layout.marginL }}>
                      <Text style={styles.totalCartTitle}>Total Panier : </Text>
                      <Text style={styles.totalCartPrice}>{this.state.totalCart}€</Text>
                  </View>
                  <Button
                    title="Pay"
                    onPress={this.requestPayment}
                    disabled={this.state.isPaymentPending}
                  />
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: Layout.marginL,
    },
    itemContainer: {
        flexDirection: 'row',
        borderRadius: Layout.radius,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        paddingHorizontal: Layout.margin,
        paddingVertical: Layout.marginL
    },
    image: {
        borderRadius: Layout.radius,
        width: 150,
        height: 150,
    },
    informations: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16
    },
    name: {
        fontSize: 24,
        letterSpacing: 2,
        fontWeight: 'bold',
        paddingLeft: 2*Layout.marginL,
        paddingRight: Layout.marginL
    },
    price: {
        fontSize: 24,
        letterSpacing: 2,
        fontWeight: '100',
        paddingHorizontal: Layout.marginL
    },
    totalCart: {
        backgroundColor: '#f4f4f4',
        height: 150,
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: Layout.marginL,
    },
    totalCartTitle: {
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: '300',
    },
    totalCartPrice: {
        fontSize: 20,
        fontWeight: '100',
    },
    buttonStyle: {
        backgroundColor: '#000'
    },
    emptyCart: {
        width: Layout.window.width,
        height: Layout.window.height - 350,
    }
});

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, null)(CartScreen);
