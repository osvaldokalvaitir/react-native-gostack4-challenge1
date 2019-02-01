import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";

import Post from './Post';

const white = '#FFF';
const primary = '#EE7777';
const title = '#333';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },

  header: {
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    /** 
     * No iOS precisamos aplicar 20px de padding superior já que a Status Bar 
     * não joga o conteúdo do App pra baixo automaticamente
     */
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  headerTitle: {
    color: title,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Osvaldo Kalvaitir Filho',
        content: 'Lorem ipsum velit facilisis suspendisse potenti dolor in risus quis, nec ultricies at elementum proin pharetra odio platea, adipiscing tempor nibh lacus odio volutpat dapibus diam sagittis porttitor potenti aptent etiam viverra dui ege.',
      },
      {
        id: 2,
        title: 'Aprendendo ReactJS',
        author: 'Fernanda Rodrigues Maia',
        content: 'In ut laoreet mollis maecenas in rutrum eros risus augue feugiat, est interdum laoreet conubia aliquet nunc molestie tempus dapibus. semper dui ullamcorper taciti pellentesque taciti arcu elementum, vehicula ante egestas duis iaculis quis',
      },
      {
        id: 3,
        title: 'Aprendendo Node.js',
        author: 'Alberto de Almeida',
        content: 'Vitae luctus tristique tincidunt enim fermentum commodo venenatis vestibulum ipsum, sociosqu quis maecenas netus aliquet torquent purus metus nec quis, fringilla donec blandit dui in ullamcorper varius metus,  sollicitudin accumsan quis aliquam.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            React Native App
          </Text>
        </View>
        <ScrollView>
          { posts.map(post => <Post key={post.id} data={post} />)}
        </ScrollView>
      </View>
    );
  }
}


