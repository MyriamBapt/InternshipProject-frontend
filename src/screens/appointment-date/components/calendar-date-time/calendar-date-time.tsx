import React, { FC, useState } from "react";
import { Button, Platform, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from "react-native-elements";

interface CalendarDateTimeProps{
//
}

const CalendarDateTime: FC<CalendarDateTimeProps> = (props: CalendarDateTimeProps) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  return (
    <View>
      <View style={styles.row}>
        <Icon
          size={45}
          name='calendar'
          type='font-awesome'
          color="#4EBDD6"
        />
        <Text style={styles.textLabel}>Date : </Text>
        <TouchableOpacity onPress={showDatepicker} style={styles.button}>
          <Text style={styles.buttonText}>Choose a date</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Icon
          size={45}
          name='clock-o'
          type='font-awesome'
          color="#4EBDD6"
        />
        <Text style={styles.textLabel}>Time : </Text>
        <TouchableOpacity onPress={showTimepicker} style={styles.button}>
          <Text style={styles.buttonText}>Choose time</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  )
}

export default CalendarDateTime;

const styles = StyleSheet.create({

  button:{
    backgroundColor:'#4EBDD6',
    borderRadius: 25,
    padding: 15
  },

  buttonText:{
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF'
  },

  textLabel:{
    fontFamily: 'Poppins-SemiBold',
    color: '#555B70',
    textAlignVertical: "center",
  },

  row:{
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginBottom: 20
  },
})
