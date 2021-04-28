import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const ButtonBook= () => {

  return(
    <TouchableOpacity
      style={styles.appButtonContainer}
      onPress={() => {}}>

      <Text style={styles.appButtonText}> Text exemple
        <Icon
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
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    letterSpacing: 0.12,
    alignSelf: 'center',
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",

  },

  appButtonContainer: {
    flex: 0.8,
    backgroundColor: "#4EBDD6",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",

  },

  iconContainer:{
    flex:2
  }

});
