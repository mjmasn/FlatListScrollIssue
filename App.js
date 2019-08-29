/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
        `${Math.random()}`,
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.flatListRef) {
        this.flatListRef.scrollToEnd();
      }
    }, 2000);
  }

  keyExtractor = item => item;

  setFlatListRef = node => {
    this.flatListRef = node;
  };

  renderItem = ({item}) => {
    return (
      <View style={{height: 50}}>
        <Text>{item}</Text>
      </View>
    );
  };

  render() {
    const {data} = this.state;

    return (
      <FlatList
        data={data}
        style={styles.flatList}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        contentContainerStyle={styles.contentContainer}
        ref={this.setFlatListRef}
      />
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 200,
  },
});

export default App;
