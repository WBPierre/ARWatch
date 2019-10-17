import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import axios from 'axios';

import NavigationOptions from '../components/NavigationOptions';
import Layout from '../config/Layout';
import config from '../config';
import Carousel, { Pagination } from 'react-native-snap-carousel'


const bracelet =
  [
    {
      id: '1',
      image: require('../images/lux7.jpg')
    },
    {
      id: '2',
      image: require('../images/lux7.jpg')
    },
    {
      id: '3',
      image: require('../images/lux7.jpg')
    }
]

const dial =
  [
    {
      id: '1',
      image: require('../images/lux7.jpg')
    },
    {
      id: '2',
      image: require('../images/lux7.jpg')
    },
    {
      id: '3',
      image: require('../images/lux7.jpg')
    }
  ]

class CustomWatchScreen extends React.Component {

  static navigationOptions = {
    ...NavigationOptions,
    title: 'Customizing watch',
  };
  constructor(props){
    super(props);
    this.state = {
      activeIndexCarousel: 0,
      watchComponent: []
    };
  }

  _carousel;

  saveCarouselRef = (ref) => (this._carousel = ref);

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.watchContainer}>
        <Image source={item.image} style={styles.imageWatch}/>
      </View>
    );
  }

  handleSnapToItem = () => {
    this.setState({ activeIndexCarousel: this._carousel.currentIndex });
  }

  handleStepPress = (category) => {
    switch(category){
      case 'first': {
        this.setState({ watchComponent: [...this.state.watchComponent, bracelet[this._carousel.currentIndex]] }, () => {
          this.setState({ activeIndexCarousel: 0 }, () => {
            this._carousel.snapToItem(0);
          });
        });
      }
      case 'second': {
        this.setState({ watchComponent: [...this.state.watchComponent, dial[this._carousel.currentIndex]] }, () => {
          this.setState({ activeIndexCarousel: 0 }, () => {
            this._carousel.snapToItem(0);
          });
        });
      }
    }
  }

  handleSubmitPress = () => {
    this.setState({ watchComponent: [...this.state.watchComponent, bracelet[this._carousel.currentIndex]]},
      () => {
      const watchComponent = this.state.watchComponent;
      axios.post(`${config.api}/auth`, { watchComponent }).then(() => this.props.navigation.navigate('Cart', { watchComponent }));
      });
  }

  render () {
    return(
      <View style={{flex: 1}}>
        <ProgressSteps
          completedProgressBarColor='#000'
          activeStepIconBorderColor='#000'
          completedStepIconColor='#000'
          labelColor='#ebebe4'
          activeLabelColor='#000'
        >
          <ProgressStep
            label="Bracelet"
            nextBtnStyle={styles.nextButton}
            nextBtnTextStyle={styles.nextButtonText}
            onNext={() => this.handleStepPress('first')}
          >
            <Carousel
              ref={this.saveCarouselRef}
              data={bracelet}
              renderItem={this._renderItem}
              sliderWidth={Layout.window.width}
              itemWidth={Layout.window.width}
              enableMomentum={true}
              activeSlideOffset={10}
              onBeforeSnapToItem={this.handleSnapToItem}
            />
            <Pagination
              carouselRef={this._carousel}
              dotsLength={3}
              activeDotIndex={this.state.activeIndexCarousel}
              containerStyle={{ backgroundColor: '#000' }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </ProgressStep>
          <ProgressStep
            label="Dial"
            previousBtnStyle={styles.nextButton}
            previousBtnTextStyle={styles.nextButtonText}
            nextBtnStyle={styles.nextButton}
            nextBtnTextStyle={styles.nextButtonText}
            onNext={() => this.handleStepPress('second')}
          >
            <Carousel
              ref={this.saveCarouselRef}
              data={dial}
              renderItem={this._renderItem}
              sliderWidth={Layout.window.width}
              itemWidth={Layout.window.width}
              enableMomentum={true}
              activeSlideOffset={10}
              onBeforeSnapToItem={this.handleSnapToItem}
            />
            <Pagination
              carouselRef={this._carousel}
              dotsLength={3}
              activeDotIndex={this.state.activeIndexCarousel}
              containerStyle={{ backgroundColor: '#000' }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </ProgressStep>
          <ProgressStep
            label="Second Step"
            previousBtnStyle={styles.nextButton}
            previousBtnTextStyle={styles.nextButtonText}
            nextBtnStyle={styles.nextButton}
            nextBtnTextStyle={styles.nextButtonText}
            onSubmit={this.handleSubmitPress.bind(this)}
          >
            <Carousel
              ref={this.saveCarouselRef}
              data={dial}
              renderItem={this._renderItem}
              sliderWidth={Layout.window.width}
              itemWidth={Layout.window.width}
              enableMomentum={true}
              activeSlideOffset={10}
              onBeforeSnapToItem={this.handleSnapToItem}
            />
            <Pagination
              carouselRef={this._carousel}
              dotsLength={3}
              activeDotIndex={this.state.activeIndexCarousel}
              containerStyle={{ backgroundColor: '#000' }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nextButton: {
    width: 100,
    backgroundColor: '#000',
    borderRadius: Layout.radius,
    color: '#fff'
  },
  nextButtonText: {
    color: '#fff',
    textAlign: 'center'
  },
  watchContainer: {
    flex: 1,
  },
  imageWatch: {
    width: Layout.window.width,
    height: 500
  }
})


export default CustomWatchScreen;
