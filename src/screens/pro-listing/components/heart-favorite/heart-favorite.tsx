import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const HeartFavorite = () => {

  const HeartFilled = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png';


  const HeartEmpty ='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-256.png' ;

  const [favorite, setFavorite] = useState(false);
  const [url, setUrl] = useState(HeartEmpty)


  const toggleFavHandler = ( ) => {

    if ( favorite === true){
      setFavorite(false);
      setUrl(HeartEmpty)
    }
    else{
      setFavorite(true);
      setUrl(HeartFilled)
    }

  }

  return(
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={toggleFavHandler} style={styles.container}>
        <Image
          source={{uri: url}} style={styles.heart}/>
      </TouchableOpacity>
    </View>
  );
};

export default HeartFavorite;

const styles = StyleSheet.create({

  container:{
    flex:1
  },

  heart:{
    width: 25,
    height: 25,
    alignSelf: 'center',
  },

})
