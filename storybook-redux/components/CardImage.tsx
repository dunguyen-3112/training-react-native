import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CardImageProps{
    title: string,
    icon: ImageSourcePropType
}

const CardImage = ({icon, title}: CardImageProps) => {
  return (
    <View>
        <ImageBackground source={icon}/>
        <Text>{title}</Text>
    </View>
  )
}

export default CardImage

const styles = StyleSheet.create({})