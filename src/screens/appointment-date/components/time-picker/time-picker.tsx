import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TimePickerProps{
  text: string
  dataSelectionFunction: any;
  stateHourSelected: any;
}

const TimePicker: FC<TimePickerProps> = (props: TimePickerProps) => {

  // need to add recuperation of rdv

  const [timeAvailable, setTimeAvailable] = useState(true)

  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.dataSelectionFunction} >
        <Text style={props.stateHourSelected ?  styles.textSelected : styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TimePicker;

const styles = StyleSheet.create({

  container:{
    flex: 1,
  },

  button:{
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 24,
  },

  selectedButton:{
    backgroundColor: '#4EBDD6',
    padding: 10,
    borderRadius: 24
  },

  text:{
    fontFamily: 'Poppins-Regular',
    textAlign: "center",
    color: '#FFFFFF'
  },

  textSelected:{
    fontFamily: 'Poppins-Regular',
    textAlign: "center",
    color: '#4EBDD6',
  }
})
