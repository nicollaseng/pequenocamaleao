import React, {Component} from 'react';
import { WebView } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return <WebView source={{ uri: 'http://pequenocamaleao.com.br'}} />
  }
}
