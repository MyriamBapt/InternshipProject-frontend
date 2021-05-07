import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

interface TagProps {
  item: any
}

const Tag: FC<TagProps> = ({ item }) => {
  const desc = Object.keys(item);
  const total = Object.values(item);

  return(
    <View style={styles.container}>
      <Icon
        size={19}
        name='check-circle'
        type='font-awesome'
        color="#4EBDD6"/>
      <Text style={styles.text}>{desc}</Text>
      <Text style={styles.text}>{total}%</Text>
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
    margin: 5,
  },
});
