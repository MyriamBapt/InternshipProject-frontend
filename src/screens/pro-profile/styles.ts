import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  mainContainer:{
    flex: 1,
    backgroundColor: "#4EBDD6",
  },

  top:{
    flex:0.2,
    backgroundColor: "#4EBDD6",
    padding: 10,
  },

  container:{
    flex:3,
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
    backgroundColor:'white',
  },

  header:{
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 10,
  },

  avatarContainer:{
    flex:2,
    position: "absolute",
    top:0,
    left:20,
    zIndex:1,
  },

  reviews:{
    fontFamily:"Poppins-Regular",
    margin:10,
    fontSize: 12,
    lineHeight: 15,
    color: '#499BFC',
  },

  star:{
    height: 25,
    width: 25,
  },

  starContainer:{
    margin:5,
    height: 25,
    width: 25,
  },

  name:{
    fontFamily:"Poppins-SemiBold",
    fontSize: 18,
    lineHeight: 27,
    color: '#555B70',
    letterSpacing: 0.12,
  },

  subtext:{
    fontFamily:"Poppins-Light",
    fontSize: 11,
    lineHeight: 15,
    color: '#555B70',
    marginRight: 5
  },

  description:{
    fontFamily:"Poppins-Light",
    fontSize: 12,
    lineHeight: 20,
    color: '#555B70',
    marginTop: 10,
  },

  locations:{
    flexDirection: "row",
    justifyContent: "center",
    margin: 0,
    backgroundColor:'#F3F5F9',
  },

  locationdetails:{
    flexDirection: "column",
    margin: 5,
  },

  locationrow:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    margin:20,
  },

  locationTitle:{
    fontFamily:"Poppins-Regular",
    color: '#9096AA',
  },

  locationDetailsText:{
    fontFamily:"Poppins-Light",
    fontSize: 10,
    lineHeight: 15,
    color: '#555B70',
    marginLeft:2,
  },

  price:{
    fontFamily:"Poppins-SemiBold",
    fontSize: 36,
    lineHeight: 54,
    letterSpacing: 0.12,
    color: '#499BFC',
    marginTop:10,
  },

  button:{
    flexDirection: "row",
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },

  priceAndDuration:{
    justifyContent: "center",
    alignItems: "center",
    padding:20,
  },

  main:{
    padding:20,
  },

  subtitle:{
    flexDirection: "row",
  },

  flatlist:{
    margin: 5,
  },

  flatlistContainer:{
    margin: 5,
    alignItems: "center",
    justifyContent: "center",

  },

  icon:{
    backgroundColor: '#4EBDD6',
    opacity:0.8,
    borderRadius:10,
    height:40,
    width:40,
    padding:0,
    alignItems: "center",
    justifyContent: "center",
  },

  toggleButton:{
    flex:1,
    marginTop:5,
    alignItems: "center",
    justifyContent: "center",
  },

  stars:{
    fontWeight: "bold",
    margin:10,
    fontSize: 16,
    lineHeight: 15,
    color:'#555B70',
  },

  ToggleContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F3F5F9',
    borderRadius: 20,
  },


  buttonContainer:{
    flex:0.8,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,

  },

  appButtonText: {
    fontFamily:"Poppins-SemiBold",
    fontSize: 12,
    lineHeight: 16,
    color: '#555B70',
    letterSpacing: 0.12,
    alignSelf: 'center',
    fontWeight: "bold",
    padding:2,

  },

  buttonpressed:{
    backgroundColor: '#FFFFFF',
    flex:0.8,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  }

});

export default styles;
