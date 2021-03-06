import React, { FC, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import SimpleButton from "../../components/simple-button/simple-button";
import AppointmentInfosBottom from "../../components/appointment-infos-bottom/appointment-infos-bottom";
import styles from "./styles";
import { ProfessionalModel } from "../../api/models/professional.model";
import { useSelector } from "react-redux";
import { IProfState } from "../../store/reducers/profs-reducer";
import { useNavigation } from "@react-navigation/native";


interface AppointmentInfoProps {
  //user: UserModel,
  route: any,
}

const AppointmentInfo: FC<AppointmentInfoProps> = (props: AppointmentInfoProps) => {

  const [text, onChangeText] = React.useState("Useless Text");
  const [dataValidated, setDataValidated]= useState(true);

  const navigation = useNavigation();
  const { id } = props.route.params;
  //const id = 9;
  //attention: need to come from previous screen otherwise useSelector returns undefined (need dispatch from app-date screen)
  // @ts-ignore
  const prof: ProfessionalModel = useSelector((state: IProfState) => state.profs.profs.find(prof => prof.id === id));




  const dataValidationHandler: any = () => {
    //check infos
    // dispatch it
    //set dataValidated true
  }

  return(

    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.mainContainer}>

        <View style={styles.FormContainer}>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your full name</Text>
            <TextInput
              placeholder='Your full name'
              maxLength={100}
              selectTextOnFocus={true}
              style={styles.input}/>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              placeholder='Email address'
              maxLength={100}
              textContentType={"emailAddress"}
              selectTextOnFocus={true}
              style={styles.input}/>
          </View>

          <View style={styles.inputRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                placeholder='Age'
                keyboardType='numeric'
                maxLength={3}
                selectTextOnFocus={true}
                style={styles.input}/>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Height</Text>
              <TextInput
                placeholder='Height'
                keyboardType='numeric'
                maxLength={3}
                selectTextOnFocus={true}
                style={styles.input}/>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Weight</Text>
              <TextInput
                placeholder='Weight'
                keyboardType='numeric'
                maxLength={2}
                selectTextOnFocus={true}
                style={styles.input}/>
            </View>
          </View>


          <View style={styles.inputGroup}>
            <Text style={styles.label}>Other Information</Text>
            <TextInput
              multiline={true}
              numberOfLines={5}
              maxLength={200}
              placeholder='Other information'
              style={styles.infoInput}/>
          </View>

          <View style={styles.buttonContainer}>
            {dataValidated ? <SimpleButton text='Next' screen='Appointment-payment' id={id}/> : null}
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

export default AppointmentInfo;
