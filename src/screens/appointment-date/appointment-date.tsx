import React, { FC, useEffect, useState } from "react";
import {SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import SimpleButton from "../../components/simple-button/simple-button";
import AppointmentInfosBottom from "../../components/appointment-infos-bottom/appointment-infos-bottom";
import CalendarDateTime from "./components/calendar-date-time/calendar-date-time";
import RoundAvatar from "../../components/round-avatar/round-avatar";
import { Icon } from "react-native-elements";

import { ProfessionalModel } from "../../api/models/professional.model";
import { IProfState } from "../../store/reducers/profs-reducer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfsRequest } from "../../store/actions";


interface AppointmentDateProps{
  //prof: ProfModel;
  route: any;
}

const AppointmentDate: FC<AppointmentDateProps> = (props: AppointmentDateProps) => {
  // NEED TO ADD VARIABLES ONCE IT WILL WORK PROPERLY (pro profile connected)
  //const { id } = props.route.params;
  const id = 9;
  const dispatch = useDispatch();

  // @ts-ignore
  const prof: ProfessionalModel = useSelector((state: IProfState) => state.profs.profs.find(prof => prof.id === id));

  const [dataSelected, setDataSelected]= useState(true);

  const dataSelectedHandler: any = () => {
    //check date and time
    // dispatch it
    //set dataSelected true
  }

  return(
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={{flexGrow:1}} >
      <View style={styles.mainContainer}>
        <View style={styles.calendarContainer}>
          <View style={styles.profInfo}>
            <RoundAvatar photo='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'/>
            <View style={styles.profIdentity}>
              <Text style={styles.name}>Nom prénom</Text>
              <View style={styles.occupationRow}>
                <Text style={styles.occupation}>occupation</Text>
                <Icon
                size={19}
                name='check-circle'
                type='font-awesome'
                color="#4EBDD6"
                />
              </View>
            </View>
          </View>
          <View style={styles.calendar}>
            <CalendarDateTime/>
          </View>
          <Text style={styles.textChosenData}>Your appointment is on XX/XX at XX:XX </Text>
          <View style={styles.buttonContainer}>
            {dataSelected ? <SimpleButton text='Done' screen='Appointment-info' id={id}/> : null}
          </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.titleAppointment}>Your appointment with Professional</Text>
        <AppointmentInfosBottom/>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentDate;
