import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

interface ButtonBookProps{
  text: string;
}

const ButtonBook= (props: ButtonBookProps) => {

  return(
    <TouchableOpacity
      style={styles.appButtonContainer}
      onPress={() => {}}>

      <Text style={styles.appButtonText}>
        {props.text} <Icon
              size={13}
              name='calendar'
              type='font-awesome'
              color='white'/>
      </Text>

    </TouchableOpacity>
  );
};

export default ButtonBook;

const styles = StyleSheet.create({
  appButtonText: {
    flex:1,
    flexDirection: "row",
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    letterSpacing: 0.12,
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'Poppins-SemiBold',
  },

  appButtonContainer: {
    flex: 0.8,
    backgroundColor: "#4EBDD6",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",

  },
});
