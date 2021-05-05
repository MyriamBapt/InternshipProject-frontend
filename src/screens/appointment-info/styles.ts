import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor:'#4EBDD6',
  },

  FormContainer:{
    flex: 2,
    backgroundColor:'#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius:24,
    padding: 10,
    justifyContent:'space-evenly',
  },

  bottomContainer:{
    flex: 1,
    backgroundColor:'#4EBDD6',
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },

  inputGroup:{
    flex:1,
  },

  input:{
    borderWidth: 1,
    borderColor: '#d8d8d8',
    height: 40,
    margin: 12,
    borderRadius: 10,
  },

  inputRow:{
    flexDirection: 'row',
  },

  infoInput:{
    borderWidth: 1,
    borderColor: '#d8d8d8',
    height: 80,
    margin: 12,
    borderRadius: 10,
    textAlignVertical: "top",
  },

  label:{
    fontFamily: 'Poppins-Regular',
    color: '#555B70',
    marginLeft: 20,
  },

  buttonContainer:{
    flex:1,
    marginTop: 40,
    marginBottom: -20
  },

  titleAppointment:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 25,
    textAlign: "center"
  },

})

export default styles;
