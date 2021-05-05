import React, { FC } from "react";
import { View } from "react-native";
import styles from "./styles";
import SimpleButton from "../../components/simple-button/simple-button";
import AppointmentInfosBottom from "../../components/appointment-infos-bottom/appointment-infos-bottom";
import CalendarDateTime from "./components/calendar-date-time";


interface AppointmentDateProps{
  //prof: ProfModel;
}

const AppointmentDate: FC<AppointmentDateProps> = (props: AppointmentDateProps) => {

  return(
    <View style={styles.mainContainer}>
      <View style={styles.calendarContainer}>
        <CalendarDateTime/>
        <SimpleButton text='Done'/>
      </View>

      <View style={styles.bottomContainer}>
        <AppointmentInfosBottom/>
      </View>
    </View>
  );
};

export default AppointmentDate;
