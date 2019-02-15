import React, {Component} from 'react';
import { WebView, View, ActivityIndicator, Dimensions } from 'react-native'

export default class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
  }
  
  render() {
     return (
       <View style={{ flex: 1 }}>
          <WebView
            onLoadStart={() => this.setState({ loading: true})}
            onLoad={() => this.setState({ loading: false })}
            source={{ uri: 'http://pequenocamaleao.com.br'}}
          />
          {this.state.loading && (
            <ActivityIndicator
              color="#ff7f00"
              style={styles.loading}
              size="large"
            />
          )}
       </View>
      )
    }
  } 

  const styles = {
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  
  }