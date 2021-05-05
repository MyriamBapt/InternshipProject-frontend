import React, { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
import AppointmentInfoTop from "../../components/appointment-info-top/appointment-info-top";
import { Icon } from "react-native-elements";
import SimpleButton from "../../components/simple-button/simple-button";

interface AppointmentConfirmedProps {
  //prof: ProfModel
}

const AppointmentConfirmed: FC<AppointmentConfirmedProps> = (props: AppointmentConfirmedProps) => {
  return(

      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <AppointmentInfoTop/>
      </View>
      <View style={styles.confirmationContainer}>
        <Icon
          size={100}
          name='check-circle'
          type='font-awesome'
          color="#4EBDD6"
        />
        <View style={styles.blocText}>
          <Text style={styles.textConfirmation}>Your appointment has been confirmed!</Text>
          <Text style={styles.textConfirmationInfo}>You'll receive an email soon with all the details you need.</Text>
          <Text style={styles.textThankYou}>Thank you.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <SimpleButton text='Done'/>
        </View>
      </View>
      </ScrollView>

  );
};

export default AppointmentConfirmed;
