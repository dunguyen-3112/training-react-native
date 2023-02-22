import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Empty, Foods, Header, Loading, Search, Tags } from '@components';

const SearchScreen = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <Tags marginTop={17} />
      {loading ? (
        <Loading marginTop={120} />
      ) : foods.length === 0 ? (
        <Empty />
      ) : (
        <Foods foods={foods} horizontal />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 62,
  },
});
