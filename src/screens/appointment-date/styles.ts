import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  safeArea:{
    flex:1
  },

  mainContainer: {
    flex: 1,
    backgroundColor:'#4EBDD6',
  },

  calendarContainer:{
    flex: 2,
    backgroundColor:'#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius:24,
    padding: 10
  },

  calendar:{
    flex: 1,
    justifyContent: "center",
  },

  bottomContainer:{
    flex: 1,
    backgroundColor:'#4EBDD6',
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  buttonContainer:{
    flex:0.5,
    justifyContent: "center",
  },

  profInfo:{
    flexDirection: 'row',
    backgroundColor:'rgba(235, 238, 238, 0.8)',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },

  profIdentity:{
    flex:1,
  },

  name:{
    fontFamily:'Poppins-SemiBold',
    color:'#555B70',
    fontSize: 20,
  },

  occupation:{
    fontFamily:'Poppins-Regular',
    color:'#555B70',
    fontSize: 16,
    marginRight:5
  },

  occupationRow:{
    flexDirection:'row'
  },

  titleAppointment:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 25,
    marginHorizontal: 25,
    textAlign: "center"
  },

  timePickerContainer:{
    flex: 1,
  },

  rowTimePicker:{
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: "space-between",
  },

  textChosenData:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#555B70',
    textAlign:'center',
    marginBottom: 10,
  },
})

export default styles;
