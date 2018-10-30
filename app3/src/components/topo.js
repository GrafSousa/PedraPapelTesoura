import React, { Component } from 'react';
import {
  Image,
  View
} from 'react-native';


class Topo extends Component {
  render() {
    return(
      <View>
          <Image source={require('../../imgs/jokenpo.png')} resizeMode='stretch' style={{width:'100%'}}/>
        </View>
    );
  }
}

export default Topo;
