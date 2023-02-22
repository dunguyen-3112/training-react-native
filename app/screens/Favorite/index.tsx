import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Foods, Loading, NotFound } from '@components';

const FavoriteScreen = () => {
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

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 83,
  },
});
