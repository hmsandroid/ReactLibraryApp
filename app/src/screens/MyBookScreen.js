import React, { Component } from "react";
import { AppRegistry, Text, StyleSheet, View, Button, TouchableOpacity, FlatList, Image, ToastAndroid } from "react-native";
import { HMSSplash } from "react-native-hms-ads";
import haInterface from 'react-native-ha-interface';
export default class MyBooks extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }
  sendEvent = (name) => {
    /*
     * You can trigger firebase or hms analytics conditionally.
     *
     * Assume that we imported analytics
     * from @react-native-firebase/analytics;
     *
     * isHmsAvailable
     *   ? analytics.logEvent(eventName, object)
     *   : haInterface.onEvent(eventName, object)
     *
     */
    haInterface.onEvent('testEvent', {
      testString: name,
      testInt: 666,
      testDouble: 2.2,
      testBoolean: false,
    });
    alert('Test Event Sent!');
  };
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginVertical: 20 }}
        onPress={()=>this.sendEvent(item.book_title)}>
        <Image style={{ width: 100, height: 100 }}
          source={{ uri: item.image }}
          resizeMode='contain' />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ marginBottom: 15 }}>
            {item.book_title}
          </Text>
          <Text>
            {item.author}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  renderSeparator = () => {
    return (
      <View style={{ height: 1, width: '100%', backgroundColor: 'black' }}>

      </View>
    );
  }
  componentDidMount() {
    const url = 'http://www.json-generator.com/api/json/get/ceROvkrAEi?indent=2'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.book_array
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  UNSAFE_componentWillMount() {
    HMSSplash.show();
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={book => book.book_title}
          data={this.state.dataSource}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  text: {
    fontSize: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
<View>
  <Text style={styles.text}>My Book List</Text>
</View>