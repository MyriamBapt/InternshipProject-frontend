import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import RoundAvatar from "../round-avatar/round-avatar";
import AppointmentInfosBottom from "../appointment-infos-bottom/appointment-infos-bottom";
import { Icon } from "react-native-elements";

interface AppointmentInfoTopProps{

}

const AppointmentInfoTop: FC<AppointmentInfoTopProps> = (props: AppointmentInfoTopProps) => {

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Your appointment with</Text>
        <View style={styles.profInfo}>
          <RoundAvatar photo='https://cdn.pixabay.com/photo/2021/04/27/18/54/sunflower-6212201_960_720.jpg'/>
            <View style={styles.profIdentity}>
              <Text style={styles.text}>Nom Prénom</Text>
              <Text style={styles.text}>Occupation
              <Icon
              size={19}
              name='check-circle'
              type='font-awesome'
              color="#FFFFFF"
              />
              </Text>
        </View>
      </View>
        <AppointmentInfosBottom/>
    </View>
  );
};

export default AppointmentInfoTop;

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#4EBDD6',
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  profInfo:{
    flexDirection: 'row',
    backgroundColor:'#e4e4e4',
    borderRadius: 20,
    padding: 10,
  },

  profIdentity:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontFamily: 'Poppins-SemiBold',
    color:'#FFFFFF',
    fontSize: 20,
  },

  text:{
    fontFamily:'Popins-Regular',
    color:'#FFFFFF',
    fontSize: 16,
  },

  avatarContainer:{
    flex: 1,
  },

});
