import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

interface TagProps {
  text: string;
}

const Tag: FC<TagProps> = (props: TagProps) => {
  return(
    <View style={styles.container}>
      <Icon
        size={19}
        name='check-circle'
        type='font-awesome'
        color="#4EBDD6"/>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily:"Poppins-Regular",
    color:'#555B70',
    margin: 10,
  },
});
