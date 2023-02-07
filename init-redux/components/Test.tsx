import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector }  from '../app/hooks'
import { AppDispatch, RootState } from '../app/store'
import { increment, decrement } from '../slice/couterSlice'

const Test = () => {
    const value = useAppSelector((state)=> state.counter.value);
    const dispatch = useAppDispatch();

    const handleIncrement = useCallback(()=>{
        dispatch(increment());
    },[dispatch]);

    const handleDecrement = useCallback(()=>{
        dispatch(decrement());
    },[dispatch]);

  return (
    <View>
      <Text style={styles.text}>{value}</Text>
      <Button title='Increment' onPress={handleIncrement}/>

      <Button title='Decrement' onPress={handleDecrement}/>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  text:{
    fontSize:40,
    fontWeight:"600",
    textAlign:"center",
    color:"red"
  }
})
