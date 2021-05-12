import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TimePickerProps{
  text: string
}

const TimePicker: FC<TimePickerProps> = (props: TimePickerProps) => {

  const [timeAvailable, setTimeAvailable] = useState(true)

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
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
    backgroundColor: '#4EBDD6',
    padding: 10,
    borderRadius: 24
  },

  text:{
    fontFamily: 'Poppins-Regular',
    textAlign: "center",
    color: '#FFFFFF'
  }
})
