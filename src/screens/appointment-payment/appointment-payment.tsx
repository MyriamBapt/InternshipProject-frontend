import React, { FC } from "react";
import { Text, View } from "react-native";
import AppointmentInfoTop from "../../components/appointment-info-top/appointment-info-top";
import styles from "./styles";


interface AppointmentPaymentProps {
  //prof: ProfModel
}

const AppointmentPayment: FC<AppointmentPaymentProps> = (props: AppointmentPaymentProps) => {
  return(
    <View style={styles.container}>
      <View style={styles.topContainer}><AppointmentInfoTop/>
      </View>
      <View style={styles.paymentContainer}>
      </View>
    </View>
  );
};

export default AppointmentPayment;
