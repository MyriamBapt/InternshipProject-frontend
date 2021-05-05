import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

interface ButtonBookProps{
  text: string;
  screen: string;
  id: number;
}

const ButtonBook= (props: ButtonBookProps) => {

  const navigation = useNavigation();

  return(
    <TouchableOpacity
      style={styles.ButtonContainer}
      onPress={() => navigation.navigate(props.screen, {id: props.id})}>
      <View style={styles.buttonRow}>
        <Text style={styles.ButtonText}>{props.text}</Text>
        <Icon
          size={17}
          name='calendar'
          type='font-awesome'
          color='white'/>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonBook;

const styles = StyleSheet.create({

  ButtonContainer: {
    flex: 0.9,
    backgroundColor: "#4EBDD6",
    borderRadius: 25,
    paddingVertical: 11,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonRow:{
    flexDirection: 'row',
  },

  ButtonText: {
    marginRight:5,
    marginTop:3,
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    letterSpacing: 0.12,
    fontFamily: 'Poppins-SemiBold',
  },

});
