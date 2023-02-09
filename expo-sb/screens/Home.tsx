import { FlatList, 
    Image, 
    StyleSheet, 
    Text, 
    View, 
    Pressable , 
    Alert,
    Platform
} from 'react-native'
import React, { useEffect, useState } from 'react'

interface PhotoProps{
    id:number,
    albumId:number,
    title:string,
    url:string,
    thumbnailUrl:string
}

const Home = () => {

    const [photos, setPhotos] =  useState<PhotoProps[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getPhotos = async ()=> {
            try{
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/photos')
                const data = await response.json()
                setPhotos(data);
            }
            catch(err){
                console.log(err);
            }
            setLoading(false);
        }
        getPhotos();
    },[])

    console.log("re-render");
    if(loading) return <Text>Loading</Text>

  return (
    <View style={styles.container}>
      <FlatList 
        data={photos}
        keyExtractor={(photo)=>photo.id+""}
        renderItem={({item})=>(
          <Pressable 
          onLongPress={()=>{
            Alert.alert("Message",`${item.title}`)
          }}
          style={styles.item}>
            <Image source={{uri:item.url}} style={{width:50,height:50}}/>
            <Text>{item.title}</Text>
          </Pressable>
        )}
    />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5f5',
    },
    item:{
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        margin:10, 
        padding:10,
        ...Platform.select({
            ios:{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android:{
                elevation: 2,
            }
        })
    }
})