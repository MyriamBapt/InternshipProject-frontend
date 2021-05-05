import React, { FC } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import AppointmentInfoTop from "../../components/appointment-info-top/appointment-info-top";
import styles from "./styles";
import SimpleButton from "../../components/simple-button/simple-button";


interface AppointmentPaymentProps {
  //prof: ProfModel
}

const AppointmentPayment: FC<AppointmentPaymentProps> = (props: AppointmentPaymentProps) => {
  return(
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.topContainer}>
        <AppointmentInfoTop/>
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
          <SimpleButton text='Confirm'/>
        </View>

      </View>
      </ScrollView>
    </View>
  );
};

export default AppointmentPayment;
