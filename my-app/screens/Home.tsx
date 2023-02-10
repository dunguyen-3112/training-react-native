import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { Button } from 'components';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from 'store/slices/counterSlice';
import { RootState } from 'store';

const HomeScreen = () => {
  const navigation = useNavigation();
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 40,
          textAlign: 'center',
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#FFF',
          padding: 10,
          margin: 30,
          marginTop: 10,
          backgroundColor: 'green',
          color: '#FFF',
        }}
      >
        {counter}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Button title="+" onPress={handleIncrement} />
        <Button title="-" onPress={handleDecrement} />
        <Button title="0" onPress={handleReset} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
