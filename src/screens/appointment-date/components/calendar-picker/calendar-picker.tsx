import React, { FC } from "react";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { View } from "react-native";

interface CalendarPickerProps {

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
        '2021-05-19': {disabled: true, disableTouchEvent: true}
      }}
      onDayPress={(day) => {console.log('selected day', day)}}
    />
  </View>
)
}

export default CalendarPicker;
