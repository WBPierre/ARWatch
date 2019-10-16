import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const margin = 4;
const radius = 10;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  color: {
    primary: '#666666',
    secondary: '#f0f0f0',
    button: '#1787FB'
  },
  margin: margin,
  marginL: margin*3,
  radius: radius
};
