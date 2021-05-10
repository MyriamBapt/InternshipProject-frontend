import React, { FC, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import AppointmentInfoTop from "../../components/appointment-info-top/appointment-info-top";
import styles from "./styles";
import SimpleButton from "../../components/simple-button/simple-button";
import { useNavigation } from "@react-navigation/native";
import { ProfessionalModel } from "../../api/models/professional.model";
import { useSelector } from "react-redux";
import { IProfState } from "../../store/reducers/profs-reducer";

interface AppointmentPaymentProps {
  //prof: ProfModel
  route: any;
}

const AppointmentPayment: FC<AppointmentPaymentProps> = (props: AppointmentPaymentProps) => {

  const navigation = useNavigation();
  //const { id } = props.route.params;
  const id = 9;
  //attention: need to come from previous screen otherwise useSelector returns undefined (need dispatch from app-date screen)
  // @ts-ignore
  const prof: ProfessionalModel = useSelector((state: IProfState) => state.profs.profs.find(prof => prof.id === id));

  const [dataValidated, setDataValidated]= useState(true);

  const paymentValidationHandler: any = () => {
    //check infos
    //dispatch it + stripe
    //set dataValidated true
  }

  return(

    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AppointmentInfoTop id={prof.id}/>
      </View>

      <View style={styles.paymentContainer}>

        <Text style={styles.textPayment}>Payment information</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name on card</Text>
          <TextInput
            placeholder='Name on card'
            maxLength={100}
            selectTextOnFocus={true}
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Credit Card Numbers</Text>
          <TextInput
            placeholder='Credit Card Numbers'
            textContentType={"creditCardNumber"}
            maxLength={16}
            keyboardType='numeric'
            style={styles.input}
          />
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Expiration date</Text>
            <TextInput
              placeholder=''
              maxLength={16}
              keyboardType='numeric'
              style={styles.input}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              placeholder=''
              maxLength={3}
              keyboardType='numeric'
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          {dataValidated ? <SimpleButton text='Confirm' screen='Appointment-confirmed'/> : null}
        </View>

      </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentPayment;
