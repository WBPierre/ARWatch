import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import stripe from 'tipsi-stripe';

import NavigationOptions from '../components/NavigationOptions';
import Layout from '../config/Layout';


class PaymentScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      ...NavigationOptions,
      title: 'Payment',
    }
  };

  constructor(props){
    super(props);
    this.state = {
      isPaymentPending: false
    }
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
        <Button
          title="Make a payment"
          onPress={() => this.requestPayment}
          disabled={this.state.isPaymentPending}
        />
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

export default PaymentScreen;
