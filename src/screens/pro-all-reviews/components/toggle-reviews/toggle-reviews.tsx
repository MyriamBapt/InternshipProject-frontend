import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ToggleReviewsProps{
  textOne: string;
  textTwo: string;
  textThree: string;
}


const ToggleReviews = (props: ToggleReviewsProps) => {

  const [clickedOne, setClickedOne] = useState(true);
  const [clickedTwo, setClickedTwo] = useState(false);
  const [clickedThree, setClickedThree] = useState(false);



  const ToggleOne = () => {
    if (clickedOne===false) {
      setClickedOne(true);
      setClickedTwo(false);
      setClickedThree(false);
    }
  }

  const ToggleTwo = () => {
    if (clickedTwo===false) {
      setClickedTwo(true);
      setClickedOne(false);
      setClickedThree(false);
    }
  }


  const ToggleThree = () => {
    if (clickedThree===false){
      setClickedThree(true);
      setClickedOne(false);
      setClickedTwo(false)
    }
  }

  return(<View style={styles.container}>

    <TouchableOpacity style={clickedOne ? styles.buttonpressed : styles.buttonContainer} onPress={ToggleOne}>
      <Text style={styles.appButtonText}>
        {props.textOne}
      </Text>
    </TouchableOpacity>


    <TouchableOpacity style={clickedTwo ? styles.buttonpressed : styles.buttonContainer} onPress={ToggleTwo}>
      <Text style={styles.appButtonText}>
        {props.textTwo}
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={clickedThree ? styles.buttonpressed : styles.buttonContainer} onPress={ToggleThree}>
      <Text style={styles.appButtonText}>
        {props.textThree}
      </Text>
    </TouchableOpacity>

  </View>)
};

export default ToggleReviews;

const styles = StyleSheet.create({

  container:{
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
