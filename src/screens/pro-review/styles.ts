import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  safeArea:{
    flex:1
  },

  container:{
    flex:1,
    backgroundColor: '#4EBDD6',
  },

  topContainer:{
    flex:0.3,
    backgroundColor: '#4EBDD6',
  },

  mainContainer:{
    flex:3,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    justifyContent:'space-evenly',
    padding: 10
  },

  titleMeeting:{
    fontFamily: 'Poppins-SemiBold',
    color:'#555B70',
    textAlign: "center",
    fontSize: 18,
    marginTop: 15,
  },

  profInfo:{
    flexDirection: 'row',
    backgroundColor:'rgba(235, 238, 238, 0.8)',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
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

  starContainer:{
    flex: 1,
  },

  textTellUsMore:{
    fontFamily: 'Poppins-Regular',
    color:'#555B70',
    textAlign: "center",
    fontSize: 14,
    marginTop: 15,
  },

  tagRow:{
    flexDirection:'row',
    justifyContent: 'center'
  },

  tagSelectedStyle:{
    backgroundColor: '#4EBDD6',
    borderRadius:25,
    margin:10,
    padding: 10,
  },

  textforTagSelected:{
    fontFamily: 'Poppins-Regular',
    fontSize:14,
    color:'#FFFFFF'
  },

  tagUnselectedStyle:{
    backgroundColor:'#FFFFFF',
    borderRadius:25,
    margin:10,
    padding: 10,
  },

  textforTagUnselected:{
    fontFamily: 'Poppins-Regular',
    fontSize:14,
    color:'#4EBDD6'
  },

  inputGroup:{
    flex:1,
    marginBottom: 25,
    marginVertical: 30
  },

  infoInput:{
    borderWidth: 1,
    borderColor: '#d8d8d8',
    height: 80,
    margin: 10,
    borderRadius: 10,
    textAlignVertical: "top",
  },

  label:{
    fontFamily: 'Poppins-Regular',
    color: '#555B70',
    marginLeft: 20,
  },

  buttonContainer:{
    flex: 1,
    marginTop: 10,
    justifyContent: "center"
  },
})

export default styles;
