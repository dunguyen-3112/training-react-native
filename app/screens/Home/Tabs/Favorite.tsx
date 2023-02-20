import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Foods, Loading, NotFound, SearchCtr } from '@components';

const Favorite = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading marginTop={120} />
      ) : foods.length === 0 ? (
        <NotFound marginTop={310} />
      ) : (
        <Foods horizontal foods={foods} />
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 83,
  },
});
