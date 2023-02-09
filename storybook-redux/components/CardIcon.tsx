import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CardIconProps{
    title: string,
    icon: ImageSourcePropType
}

const CardIcon = ({icon, title}: CardIconProps) => {
  return (
    <View style={styles.container}>
        <Image source={icon}/>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default CardIcon

const styles = StyleSheet.create({
    container:{
        width:93,
        height:93,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFFFFF',
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0000000',
        marginTop: 10
    }
})