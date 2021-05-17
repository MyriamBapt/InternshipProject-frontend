import React, { FC, useState } from "react";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { FlatList, View } from "react-native";
import axios from "axios";
import TimePicker from "../time-picker/time-picker";

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

  const [rdvSelectedDate, setRdvSelectedDate]: any[] = useState([]);
  const [availableHoursArray, setAvailableHoursArray]: any[] = useState([]);

  const DateHandler = (day) => {
    // function for testing api call
    // should add a use effect too when loading the page
    // @ts-ignore
    axios.get(`http://67f0f9c6a780.ngrok.io/rendezvous/all_by_prof_date/${9}/${day.dateString}`)
      .then(res => {
        // @ts-ignore
        setRdvSelectedDate(res.data);
      })
      .finally(hoursHandler)
  }

  const hoursHandler = () => {
    // for testing
    // need to add time zone
    // @ts-ignore
    let allHoursArray = ['09:00:00+00', '10:00:00+00', '11:00:00+00', '14:00:00+00', '15:00:00+00', '16:00:00+00'];
    let unvailableHours = [];

    if (rdvSelectedDate) {
      console.log(rdvSelectedDate)
      for (let rdv of rdvSelectedDate) {
        // @ts-ignore
        unvailableHours.push(rdv.time_rdv);
        console.log('works' + unvailableHours);
      }

      for (let i = 0; i < unvailableHours.length; i++) {
        for (let j = 0; j < allHoursArray.length; j++){
          if (allHoursArray[j] === unvailableHours[i]){
            allHoursArray.splice(j,1)
          }
        }
      }
    }
    setAvailableHoursArray(allHoursArray)
  }


return(
  <View>
    <Calendar
      minDate={new Date()}
      markedDates={{
        '2021-05-19': {disabled: true, disableTouchEvent: true}
      }}
      onDayPress={(day) => DateHandler(day)}
    />
    <FlatList data={availableHoursArray} numColumns={2} renderItem={({item}) => <TimePicker text={item}/>} />
  </View>
)
}

export default CalendarPicker;
