import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

interface TagProps {
  text: string;
}

const Tag = (props: TagProps) => {
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
    margin: 10,
  },
});
