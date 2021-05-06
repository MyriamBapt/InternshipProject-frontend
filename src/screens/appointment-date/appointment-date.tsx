import React, { FC } from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import SimpleButton from "../../components/simple-button/simple-button";
import AppointmentInfosBottom from "../../components/appointment-infos-bottom/appointment-infos-bottom";
import CalendarDateTime from "./components/calendar-date-time";
import RoundAvatar from "../../components/round-avatar/round-avatar";
import { Icon } from "react-native-elements";


interface AppointmentDateProps{
  //prof: ProfModel;
}

const AppointmentDate: FC<AppointmentDateProps> = (props: AppointmentDateProps) => {

  return(
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={{flexGrow:1}} >
      <View style={styles.mainContainer}>
        <View style={styles.calendarContainer}>
          <View style={styles.profInfo}>
            <RoundAvatar photo='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'/>
            <View style={styles.profIdentity}>
              <Text style={styles.name}>Nom Prénom</Text>
              <View style={styles.occupationRow}>
                <Text style={styles.occupation}>Occupation</Text>
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
            <SimpleButton text='Done'/>
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
