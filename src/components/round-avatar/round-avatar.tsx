import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface RoundAvatarProps {
  photo: string;
}

const RoundAvatar = (props: RoundAvatarProps) => {
  return(
    <View style={styles.avatarContainer}>
      <Image source={{uri : props.photo}} style={styles.avatar}/>
    </View>
  )
};

export default RoundAvatar;

const styles = StyleSheet.create({

  avatarContainer:{
    flex:1,
    height: 110,
    width: 110,
    borderRadius: 60,
    overflow: "hidden",

  },

  avatar:{
    flex:1,
    height: 110,
    width: 110,
    borderRadius: 60,
  },
})
