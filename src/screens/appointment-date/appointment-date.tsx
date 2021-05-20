import React, { FC, useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
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
import CalendarPicker from "./components/calendar-picker/calendar-picker";
import TimePicker from "./components/time-picker/time-picker";
import {getRdvByProfAndDate} from "../../api/services/rendez-vous";


interface AppointmentDateProps{
  //prof: ProfModel;
  route: any;
}

const AppointmentDate: FC<AppointmentDateProps> = (props: AppointmentDateProps) => {
  // NEED TO ADD VARIABLES ONCE IT WILL WORK PROPERLY (pro profile connected)
  //const { id } = props.route.params;
  const id = 9;
  const dispatch = useDispatch();

  /*useEffect( () => {
    dispatch(fetchAllProfsRequest());
    Datehandler() => need to add day parameter
  }, []);
  */

  // @ts-ignore
  const prof: ProfessionalModel = useSelector((state: IProfState) => state.profs.profs.find(prof => prof.id === id));
  //const ProfContext = React.createContext({ dataProf: prof });

  const [isdataSelected, setIsDataSelected]= useState(false);
  const [rdvSelectedDate, setRdvSelectedDate]: any[] = useState([]);
  const [availableHoursArray, setAvailableHoursArray]: any[] = useState([]);
  const [loading, setLoading] = useState(false);
  const [elementSelected, setElementSelected] = useState(null);
  const [noDisponibilities, setNoDisponibilities] = useState('')
  let date: string;
  let time: string;

    const DateHandler = (day) => {
      // should add a use effect too when loading the page + need to get prof.id
      date = day.dateString;
      getRdvByProfAndDate(9, day.dateString)
        .then((res) => {setRdvSelectedDate(res)})
        .catch()
        .finally(hoursHandler)
    }

    const hoursHandler = () => {
      // need to add time zone
      // @ts-ignore
      let allHoursArray = ['09:00:00+00', '10:00:00+00', '11:00:00+00', '14:00:00+00', '15:00:00+00', '16:00:00+00'];
      let unvailableHours = [];
      let filteredArray = [];

      if (rdvSelectedDate) {
        console.log(rdvSelectedDate)
        for (let rdv of rdvSelectedDate) {
          // @ts-ignore
          unvailableHours.push(rdv.time_rdv);
        }
        // @ts-ignore
        filteredArray = allHoursArray.filter(hour => !unvailableHours.includes(hour));
        setAvailableHoursArray(filteredArray);
        if(!availableHoursArray){
          setNoDisponibilities('No disponibility for this day.Please choose another date.')
        }
        setLoading(false)
        console.log(availableHoursArray);
      }
    }

    const dataSelectionhandler  = (id, i) => {
      setElementSelected(i)
      time = availableHoursArray[i];
      setIsDataSelected(true);
    }

  return(
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={{flexGrow:1}} >
      <View style={styles.mainContainer}>
        <View style={styles.calendarContainer}>
          <View style={styles.profInfo}>
            <RoundAvatar photo='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'/>
            <View style={styles.profIdentity}>
              <Text style={styles.name}>Nom  </Text>
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
          {loading ? <ActivityIndicator size="large" color="#00ff00" /> : null}
          <View style={styles.calendar}>
            <CalendarPicker dateHandlerFunction={DateHandler}/>
            {noDisponibilities ? <Text>{noDisponibilities}</Text> : null}
              <View style={styles.rowTimePicker}>
                {availableHoursArray.map((hour, index) => {
                  // @ts-ignore
                  return(
                    <TouchableOpacity
                      key={index}
                      onPress={(e) => dataSelectionhandler(e, index)}
                      style={elementSelected===index? styles.selectedButton : styles.button}>
                        <View>
                          <Text>{hour}</Text>
                        </View>
                    </TouchableOpacity>
                  )
                })}
              </View>
          </View>
          <Text style={styles.textChosenData}>Your appointment is on XX/XX at XX:XX </Text>
          <View style={styles.buttonContainer}>
            {isdataSelected ? <SimpleButton text='Done' screen='Appointment-info' id={id} date={date} time={time}/> : null}
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
