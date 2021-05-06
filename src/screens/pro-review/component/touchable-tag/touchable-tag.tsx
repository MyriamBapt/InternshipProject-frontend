import React, { FC, useState } from "react";
import styles from "../../styles";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TouchableTagProps{
  //
}

const TouchableTag: FC<TouchableTagProps> = (props: TouchableTagProps) => {

  const [tagSelected, setTagSlected]  = useState(true);

  const tagHandler = () => {

    if (tagSelected){
      setTagSlected(false)
    }
    else{
      setTagSlected(true)
    }
  }

  return(
  <View>
    <TouchableOpacity
      style={tagSelected ? styles.tagSelectedStyle : styles.tagUnselectedStyle}
      onPress={tagHandler}>
      <Text style={tagSelected ? styles.textforTagSelected : styles.textforTagUnselected}>Friendly</Text>
    </TouchableOpacity>
  </View>
  );
};

const style = StyleSheet.create({

  tagSelectedStyle:{
    backgroundColor: '#4EBDD6',
    borderRadius:25,
    margin:10,
    padding: 10,
  },

  textforTagSelected:{
    fontFamily: 'Poppins-Regular',
    fontSize:14,
    color:'#FFFFFF'
  },

  tagUnselectedStyle:{
    backgroundColor:'#FFFFFF',
    borderRadius:25,
    margin:10,
    padding: 10,
  },

  textforTagUnselected:{
    fontFamily: 'Poppins-Regular',
    fontSize:14,
    color:'#4EBDD6'
  },

});
