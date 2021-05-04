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
          <RoundAvatar photo='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'/>
            <View style={styles.profIdentity}>
              <Text style={styles.name}>Nom Prénom</Text>
              <View style={styles.occupationRow}>
                <Text style={styles.occupation}>Occupation</Text>
                <Icon
                  size={19}
                  name='check-circle'
                  type='font-awesome'
                  color="#FFFFFF"
                />
              </View>
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
    backgroundColor:'#4DC7DD',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profIdentity:{
    flex:1,
  },

  title:{
    fontFamily: 'Poppins-SemiBold',
    color:'#FFFFFF',
    fontSize: 20,
    marginBottom: 10,
  },

  name:{
    fontFamily:'Poppins-SemiBold',
    color:'#FFFFFF',
    fontSize: 20,
  },

  occupation:{
    fontFamily:'Poppins-Regular',
    color:'#FFFFFF',
    fontSize: 16,
    marginRight:5
  },

  occupationRow:{
    flexDirection:'row'
  },

  avatarContainer:{
    flex: 1,
  },

});
