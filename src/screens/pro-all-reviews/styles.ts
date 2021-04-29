import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#4EBDD6',
  },

  top:{
    backgroundColor: '#4EBDD6',
  },

  main:{
    flex: 6,
    backgroundColor:'#FFFFFF',
    borderTopLeftRadius:15,
    borderTopRightRadius: 15,
  },

  header:{
    flex:1.5
  },

  headerRow:{
    flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  reviews:{
    margin:10,
    fontSize: 12,
    lineHeight: 15,
    color: '#555B70',
  },

  numberOfStars:{
    margin:10,
    fontSize: 16,
    lineHeight: 15,
    color: '#555B70',
    fontWeight: "bold",
  },

  starContainer:{
    margin:5,
    height: 25,
    width: 25,
  },

  star:{
    height: 25,
    width: 25,
  },

  buttonRow:{
    flex:0.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft:15,
    paddingRight:15,
  },

  list:{
    flex:4,
  },

});

export default styles;
