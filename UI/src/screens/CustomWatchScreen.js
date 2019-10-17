import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';

import NavigationOptions from '../components/NavigationOptions';
import Layout from '../config/Layout';
import config from '../config';


const bracelet =
  [
    {
      id: '1',
      image: require('../images/burachler.png')
    },
    {
      id: '2',
      image: require('../images/burachler.png')
    },
    {
      id: '3',
      image: require('../images/burachler.png')
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
      watchComponent: [],
      allWatchComponents: []
    };
  }

  componentDidMount () {
    axios.get('https://hackaton2019watcher.herokuapp.com/images').then(res => this.setState({ allWatchComponents: res.data }, () => {
      console.log(this.state.allWatchComponents);
    }));
  }

  _carousel;

  saveCarouselRef = (ref) => (this._carousel = ref);

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.watchContainer}>
        <Image source={{ uri: item.link }} style={styles.imageWatch}/>
      </View>
    );
  }

  resetCarousel = () => {
    this.setState({ activeIndexCarousel: 0 }, () => {
      this._carousel.snapToItem(0);
    });
  }

  handleSnapToItem = () => {
    this.setState({ activeIndexCarousel: this._carousel.currentIndex });
  };

  handlePreviousPress = () => {
    this.setState({ watchComponent: this.state.watchComponent.slice(0, this.state.watchComponent.length - 1)}, () => {
      this.resetCarousel();
    });
  };

  handleStepPress = (category) => {
    switch(category){
      case 'first': {
        this.setState({ watchComponent: [...this.state.watchComponent, this.state.allWatchComponents[0][this._carousel.currentIndex]] }, () => {
          this.resetCarousel()
        });
      }
      case 'second': {
        this.setState({ watchComponent: [...this.state.watchComponent, this.state.allWatchComponents[1][this._carousel.currentIndex]] }, () => {
          this.resetCarousel();
        });
      }
    }
  }

  handleSubmitPress = () => {
    this.setState({ watchComponent: [...this.state.watchComponent, bracelet[this._carousel.currentIndex]]},
      () => {
      const watchComponent = this.state.watchComponent;
        this.props.navigation.navigate('Cart', { watchComponent})

      });
  }

  render () {
    if(this.state.allWatchComponents[0]) {
      return (
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
                data={this.state.allWatchComponents[0]}
                renderItem={this._renderItem}
                sliderWidth={Layout.window.width}
                itemWidth={Layout.window.width}
                enableMomentum={true}
                activeSlideOffset={10}
                shouldOptimizeUpdates={true}
                onBeforeSnapToItem={this.handleSnapToItem}
              />
              <Pagination
                carouselRef={this._carousel}
                dotsLength={this.state.allWatchComponents[0].length}
                activeDotIndex={this.state.activeIndexCarousel}
                containerStyle={{backgroundColor: '#000'}}
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
              onPrevious={this.handlePreviousPress}
              onNext={() => this.handleStepPress('second')}
            >
              <Carousel
                ref={this.saveCarouselRef}
                data={this.state.allWatchComponents[1]}
                renderItem={this._renderItem}
                sliderWidth={Layout.window.width}
                itemWidth={Layout.window.width}
                enableMomentum={true}
                activeSlideOffset={10}
                onBeforeSnapToItem={this.handleSnapToItem}
              />
              <Pagination
                carouselRef={this._carousel}
                dotsLength={this.state.allWatchComponents[1].length}
                activeDotIndex={this.state.activeIndexCarousel}
                containerStyle={{backgroundColor: '#000'}}
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
              onPrevious={this.handlePreviousPress}
              onSubmit={this.handleSubmitPress.bind(this)}
            >
              <Carousel
                ref={this.saveCarouselRef}
                data={this.state.allWatchComponents[2]}
                renderItem={this._renderItem}
                sliderWidth={Layout.window.width}
                itemWidth={Layout.window.width}
                enableMomentum={true}
                activeSlideOffset={10}
                onBeforeSnapToItem={this.handleSnapToItem}
              />
              <Pagination
                carouselRef={this._carousel}
                dotsLength={this.state.allWatchComponents[2]}
                activeDotIndex={this.state.activeIndexCarousel}
                containerStyle={{backgroundColor: '#000'}}
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
    } else {
      return null;
    }
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
    alignItems: 'center',
  },
  imageWatch: {
    width: 100,
    height: 500
  }
})


export default CustomWatchScreen;
