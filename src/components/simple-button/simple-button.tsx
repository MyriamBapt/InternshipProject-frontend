import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface SimpleButtonProps{
  text: string;
  screen: string;
  id?: number;
  date?: string;
  time?: string;
}

const SimpleButton = (props: SimpleButtonProps) => {

  const navigation = useNavigation();

  return(
    <TouchableOpacity
      style={styles.appButtonContainer}
      onPress={() => {navigation.navigate(props.screen, {id: props.id})}}>
      <Text style={styles.appButtonText}> {props.text} </Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 17,
    lineHeight: 16,
    color: '#FFFFFF',
    letterSpacing: 0.12,
    alignSelf: 'center',
    fontFamily:'Poppins-SemiBold',
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },

  appButtonContainer: {
    flex: 0.5,
    backgroundColor: "#4EBDD6",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  }

});
