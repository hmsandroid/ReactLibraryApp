import React, { Component } from "react";
import { AppRegistry, Text, StyleSheet, View, Button, TouchableOpacity, FlatList, Image } from "react-native";
import {HMSSplash} from "react-native-hms-ads";

export default class MyBooks extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }
  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', marginVertical: 20 }}>
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
      </View>
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