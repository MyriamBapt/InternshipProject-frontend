import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

interface CalendarDateTimeProps{
//
}

const CalendarDateTime = (props: CalendarDateTimeProps) => {

  const [date, setDate] = useState(new Date());

  return(
    <View>
      <DateTimePicker value={date}/>
    </View>
  )

}

export default CalendarDateTime;

const styles = StyleSheet.create({

})
