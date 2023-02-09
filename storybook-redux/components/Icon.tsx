import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface IconProps{
    icon: ImageSourcePropType,
    onPress: () => void
}

const Icon = ({icon, onPress}:IconProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image source={icon}/>
    </TouchableOpacity>
  )
}

export default Icon

const styles = StyleSheet.create({
    container:{
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22.5,
        backgroundColor:'#F5F5F5'
    }
})
