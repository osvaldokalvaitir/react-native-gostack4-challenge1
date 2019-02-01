import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const white = '#FFF';
const title = '#333';
const border = '#dddddd';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
  },

  postHeader: {
    borderBottomColor: border,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
  },

  title: {
    color: title,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
    </View>
    <Text style={styles.content}>{data.content}</Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
