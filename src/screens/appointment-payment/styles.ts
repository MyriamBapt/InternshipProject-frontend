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
    flex: 1.2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor:'#FFFFFF',
    justifyContent: "center",
    padding: 10
  },

  input: {
    borderWidth: 1,
    borderColor: '#d8d8d8',
    height: 40,
    margin: 12,
    borderRadius: 10,
  },

  inputGroup:{
    flex:1,
    justifyContent: "space-evenly",
  },

  label:{
    fontFamily: 'Poppins-Regular',
    color: '#555B70',
    marginLeft: 20,
  },

  inputRow:{
    flexDirection: 'row',
  },

  buttonContainer:{
    flex:1,
    marginBottom: -10
  },

  textPayment:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    textAlign: "center",
    marginVertical: 5,
    color: '#555B70',
  },

})

export default styles;
