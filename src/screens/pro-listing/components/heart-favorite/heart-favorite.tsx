import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const HeartFavorite = () => {

  const [favorite, setFavorite] = useState(false);

  const toggleFavHandler = ( ) => {

    if ( favorite === true){
      setFavorite(false);
      //need to suppress from fav list
    }
    else{
      setFavorite(true);
      //need to add to fav list
    }
  }

  return(
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={toggleFavHandler} style={styles.container}>
        <Image
          source={favorite
            ? require('./img/hearticon.png')
            : require('./img/empty_hearticon.png')} style={styles.heart}/>
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
