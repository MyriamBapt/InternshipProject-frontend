import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

interface AppointmentInfosBottomProps{
// will need ProfName + AppointmentType + Date and time
}

const AppointmentInfosBottom = (props: AppointmentInfosBottomProps) => {

  // need id => from parent ?
  //(need to be tested))
  // @ts-ignore
  //const prof: ProfessionalModel = useSelector((state: IProfState) => state.profs.profs.find(prof => prof.id === id));


  return(
    <View style={styles.container}>
      <View style={styles.infosAndPrice}>
        <View style={styles.infos}>
          <View style={styles.infoRow}>
            <Icon
              size={19}
              name='check-circle'
              type='font-awesome'
              color="#FFFFFF"/>
          <Text style={styles.infosTextValidated}>type of report</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon
              size={19}
              name='check-circle'
              type='font-awesome'
              color="#FFFFFF"/>
          <Text style={styles.infosTextValidated}>Date</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon
              size={19}
              name='check-circle'
              type='font-awesome'
              color="#FFFFFF"/>
            <Text style={styles.infosTextValidated}>Hour</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon
              size={19}
              name='check-circle'
              type='font-awesome'
              color="#FFFFFF"/>
            <Text style={styles.infosTextValidated}>informations</Text>
          </View>
      </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>$PRICE</Text>
        </View>
      </View>
    </View>
  )
}


export default AppointmentInfosBottom;

const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'#4EBDD6',
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },

    infosAndPrice:{
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center",
    },

    infos:{
      flexDirection: "column",
      flex: 0.5,
      justifyContent: "center",
    },

    infoRow:{
      flexDirection: "row",
    },

    infosTextValidated:{
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      color: '#FFFFFF',
      marginLeft: 5,
    },

    infosTextUnvalidated:{
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      color: '#FFFFFF',
      marginLeft: 5,
    },

    price:{
      flex: 0.5,
      alignItems: "center",
      justifyContent: "center",
    },

    priceText:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
      color: '#FFFFFF',
    }
})
