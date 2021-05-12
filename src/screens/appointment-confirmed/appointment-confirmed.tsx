import React, { FC } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import AppointmentInfoTop from "../../components/appointment-info-top/appointment-info-top";
import { Icon } from "react-native-elements";
import SimpleButton from "../../components/simple-button/simple-button";
import { useNavigation } from "@react-navigation/native";
import { ProfessionalModel } from "../../api/models/professional.model";
import { useSelector } from "react-redux";
import { IProfState } from "../../store/reducers/profs-reducer";

interface AppointmentConfirmedProps {
  //prof: ProfModel
  route: any;
}

const AppointmentConfirmed: FC<AppointmentConfirmedProps> = (props: AppointmentConfirmedProps) => {

  const navigation = useNavigation();
  //const { id } = props.route.params;
  const id = 9;
  //attention: need to come from previous screen otherwise useSelector returns undefined (need dispatch from app-date screen)
  // @ts-ignore
  const prof: ProfessionalModel = useSelector((state: IProfState) => state.profs.profs.find(prof => prof.id === id));


  return(
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>
      <View style={styles.topContainer}>
        <AppointmentInfoTop id={prof.id}/>
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
          <SimpleButton text='Done' screen='Professionals'/>
        </View>
      </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentConfirmed;
