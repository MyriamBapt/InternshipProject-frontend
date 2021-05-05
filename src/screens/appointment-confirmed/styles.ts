import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#4EBDD6',
  },

  topContainer:{
    flex: 1,
  },

  confirmationContainer:{
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor:'#FFFFFF',
    padding: 20
  },

  textConfirmation:{
    fontFamily:'Poppins-SemiBold',
    fontSize: 16,
    color:'#555B70',
  },

  textConfirmationInfo:{
    fontFamily:'Poppins-Light',
    fontSize: 14,
    color:'#555B70',
    textAlign:'center',
    marginTop: 5,
  },

  textThankYou:{
    fontFamily:'Poppins-Regular',
    fontSize: 15,
    color:'#555B70',
    marginTop: 15,
  },

  blocText:{
    flex: 3,
    justifyContent:'center',
    alignItems:'center',
  },

  buttonContainer:{
    flex: 2,
    justifyContent: "center"
  },

})

export default styles;
