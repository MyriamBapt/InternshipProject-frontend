import React, { FC, useState } from "react";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { FlatList, View } from "react-native";
import axios from "axios";
import TimePicker from "../time-picker/time-picker";

interface CalendarPickerProps {
dateHandlerFunction: any;
date: any;
}

const CalendarPicker: FC<CalendarPickerProps> = (props: CalendarPickerProps) => {

  //below is a method to grey out week end days -- class method need to modify it
  /*
  const DISABLED_DAYS = ['Saturday', 'Sunday']
  state = {
    markedDates: this.getDaysInMonth(moment().month(), moment().year(),  DISABLED_DAYS)
  }

  getDaysInMonth(month, year, days) {
    let pivot = moment().month(month).year(year).startOf('month')
    const end = moment().month(month).year(year).endOf('month')

    onMonthChange={(date) => {
      this.setState({
        markedDates: this.getDaysInMonth(date.month - 1, date.year, DISABLED_DAYS)
      })
    }}

    let dates = {}
    const disabled = { disabled: true }
    while(pivot.isBefore(end)) {
      days.forEach((day) => {
        dates[pivot.day(day).format("YYYY-MM-DD")] = disabled
      })
      pivot.add(7, 'days')
    }

    return dates
  }

   */

return(
  <View>
    <Calendar
      minDate={new Date()}
      markedDates={{
      [props.date] : {marked: true, disableTouchEvent: true}
      }}
      onDayPress={(day) => props.dateHandlerFunction(day)}
    />
  </View>
)
}

export default CalendarPicker;
