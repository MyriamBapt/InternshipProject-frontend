import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#4EBDD6',
  },

  topContainer:{
    flex: 1,
  },

  paymentContainer:{
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor:'#FFFFFF',

  },

  textConfirmation:{
    fontFamily:'Poppins-SemiBold',
    fontSize: 16,
    color:'#555B70'
  },

  textConfirmationInfo:{
    fontFamily:'Poppins-Light',
    fontSize: 14,
    color:'#555B70'
  },

  textThankYou:{
    fontFamily:'Poppins-Regular',
    fontSize: 15,
    color:'#555B70'
  },

  blocText:{
    flex: 3,
    justifyContent:'center',
    alignItems:'center',
  },

  buttonContainer:{
    flex: 1
  },

})

export default styles;
