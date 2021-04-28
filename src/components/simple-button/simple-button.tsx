import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SimpleButton = () => {

  return(
    <TouchableOpacity
      style={styles.appButtonContainer}
      onPress={() => {}}>
      <Text style={styles.appButtonText}> texte </Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;

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

  }

});
