import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements'
import Swipeout from 'react-native-swipeout';

import NavigationOptions from '../components/NavigationOptions';
import Layout from '../config/Layout'
import stripe from 'tipsi-stripe'
import LoginModal from '../components/LoginModal'
import { removeProduct } from '../store/actions/products'

const swipeoutBtns = [
    {
        text: 'Delete',
    }
]

class CartScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            ...NavigationOptions,
            title: 'Panier',
            headerStyle: {
                backgroundColor: '#fff',
                shadowColor: 'transparent',
                elevation: 0,
                borderBottomColor: 'transparent',
                borderBottomWidth: 0,
            }
        }
    };
    constructor(props){
        super(props);
        this.state = {
            products: [],
            totalCart: 0,
            isPaymentPending: false,
            paymodalModalVisible: false
        };
    }

    componentDidMount  () {
        this.setState({ products: this.props.products.products});
    }

    handleRemovePress = (item) => {
        console.log('ok')
        this.props.removeProduct(item)
    }

    _renderItem ({item, index}) {
        this.setState({totalCart: this.state.totalCart += item.price});

        return (
          <Swipeout right={swipeoutBtns} style={styles.swipeout} autoClose={true} onPress={() => this.handleRemovePress(item)}>
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
          </Swipeout>
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

    setModalVisible(visible) {
        this.setState({paymodalModalVisible: visible});
    }

    const  = stripe.setOptions({ publishableKey: 'pk_test_t37blAfCMrTelgLdJH5B1QBq'});

    handlePayButtonPress = () => {
        if(this.props.isConnected.isConnected) {
            return stripe
              .paymentRequestWithCardForm()
              .then(stripeTokenInfo => {
                  axios({
                      method: 'post',
                      url: 'https://hackaton2019watcher.herokuapp.com/order/pay',
                      headers: {
                          'autorization': this.props.isConnected.isConnected
                      }, data: { tokenId: stripeTokenInfo }
                  });
              })
              .catch(error => {
                  console.warn('Payment failed', {error});
              });
        }
        else {
            this.setModalVisible(true)
        }
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
                      <Text style={styles.totalCartPrice}>{this.state.products.length < 2 ? this.state.totalCart : this.state.totalCart/2}€</Text>
                  </View>
                  <Button
                    buttonStyle={styles.buttonStyle}
                    title={this.props.isConnected.isConnected ? "Pay" : "You need to login"}
                    onPress={this.handlePayButtonPress}
                    disabled={this.state.isPaymentPending}
                  />
              </View>
              <LoginModal isVisible={this.state.paymodalModalVisible} setModalVisible={() => this.setModalVisible(false)}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: Layout.marginL,
    },
    swipeout: {
        backgroundColor: '#f4f4f4',
        borderRadius: Layout.radius,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginVertical: Layout.marginL,
    },
    itemContainer: {
        backgroundColor: '#f4f4f4',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: Layout.margin

    },
    image: {
        borderRadius: Layout.radius,
        width: 150,
        height: 150,
    },
    informations: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16
    },
    name: {
        fontSize: 24,
        letterSpacing: 2,
        textTransform: 'uppercase',
        fontWeight: '100',
    },
    price: {
        fontSize: 16,
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

const mapStateToProps = ({ products, isConnected }) => ({ products, isConnected });

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (item) => dispatch(removeProduct(item))
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(CartScreen);
