import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import axios from 'axios';
import {GLOBALSTYLES} from '../utils/Theme';
import {baseUrl} from '../utils/Constants';

const ShowPosts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(baseUrl + '/posts');
      //   console.log('POSTS RES : ', res.data);
      setPosts(res.data);
    } catch (err) {
      console.error('Error in getting posts : ', err.message);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainerStyle}>
        <Text style={[GLOBALSTYLES.headingStyle, {color: '#fff'}]}>
          {item.title}
        </Text>
        <Text style={[GLOBALSTYLES.headingStyle, styles.bodyStyle]}>
          {item.body}
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return <Text style={GLOBALSTYLES.headingStyle}></Text>;
  };

  return (
    <View style={[GLOBALSTYLES.container, {backgroundColor: '#2A3035'}]}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorView}
        extraData={(item, idx) => idx.toString()}
        style={styles.listContainerStyle}
      />
    </View>
  );
};

export default ShowPosts;

const styles = StyleSheet.create({
  listContainerStyle: {
    padding: 20,
  },
  itemContainerStyle: {
    backgroundColor: '#202329',
    padding: 10,
    borderRadius: 10,
  },
  bodyStyle: {
    color: '#fff',
    fontSize: 14,
  },
});
