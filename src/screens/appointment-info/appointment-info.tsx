import React, { FC } from "react";
import { View } from "react-native";
import SimpleButton from "../../components/simple-button/simple-button";
import AppointmentInfosBottom from "../../components/appointment-infos-bottom/appointment-infos-bottom";
import styles from "./styles";


interface AppointmentInfoProps {
  //user: UserModel
}

const AppointmentInfo: FC<AppointmentInfoProps> = (props: AppointmentInfoProps) => {
  return(
    <View style={styles.mainContainer}>
      <View style={styles.FormContainer}>
        <SimpleButton/>
      </View>

      <View style={styles.bottomContainer}>
        <AppointmentInfosBottom/>
      </View>
    </View>
  );
};

export default AppointmentInfo;
