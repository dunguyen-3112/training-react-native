import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'components';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Blog" onPress={() => navigation.navigate('Blog')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
