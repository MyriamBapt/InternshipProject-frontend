import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { Card, Paragraph } from "react-native-paper";
import HeartFavorite from "../heart-favorite/heart-favorite";
import StarsRating from "../../../../components/stars-rating/stars-rating";
import ButtonBook from "../../../../components/button-book/button-book";

const CardProfile = (props:any) => {

  const pro = props.professional;

  return(
    <View style={styles.container}>
      <Card>

        <TouchableOpacity onPress={() => {}}>
          <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png' }} style={styles.cardCover}/>
        </TouchableOpacity>

        <View style={styles.heartContainer}>
          <HeartFavorite/>
        </View>

        <View>
          <View style={styles.starContainer}>
            <View style={styles.reviews}>
              <StarsRating/>
              <Text style={styles.numberRatings}> Reviews</Text>
            </View>
          </View>
        </View>


        <View>
          <Text style={styles.subtitle}>occupation </Text>
          <Text style={styles.textTitle}>firstname lastname</Text>
        </View>

        <Card.Content>
          <View style={styles.locationContainer}>
            <View style={styles.locations}>
              <Icon
                size={19}
                name='desktop'
                type='font-awesome'
                color='#555B70'/>
              <Paragraph style={styles.locationText}>Remote</Paragraph>
            </View>
            <View style={styles.locations}>
              <Icon
                size={19}
                name='map-marker'
                type='font-awesome'
                color='#555B70'/>
              <Paragraph style={styles.locationText}>ville</Paragraph>
            </View>
          </View>
        </Card.Content>

        <Card.Actions>
          <View style={styles.buttonContainer}>
           <ButtonBook/>
          </View>
        </Card.Actions>

      </Card>
    </View>
  );
};

export default CardProfile;


const styles = StyleSheet.create({

  container:{
    flex:0.5,
    flexDirection: "column",
    margin: 8,
    borderRadius:30
  },

  locationContainer:{

    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom:8
  },

  locations:{
    flexDirection: "row",
  },

  locationText:{
    fontSize: 10,
    lineHeight: 15,
    marginLeft:5,
    color:'#555B70',
  },

  buttonContainer:{
    flexDirection: "row",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button:{
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  starContainer:{
    flex: 1,
    position: "absolute",
    top: 110, left: 0, right: 0, bottom: 0, justifyContent: 'center',
    backgroundColor: '#9196AA',
    opacity: 0.8,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },

  textTitle:{
    flex: 1,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "bold",
    margin: 5
  },

  cardCover:{
    borderRadius:10,
    height:150
  },

  coverContainer:{
    flexDirection:"row",
    borderWidth:3,
    flex:1,
  },

  subtitle:{
    marginLeft: 5,
    marginTop: 5,
    color: "#4EBDD6",
    fontSize: 10,
    lineHeight: 12,
  },

  heartContainer: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0, alignItems: "flex-end",
    marginRight: 5,
  },

  numberRatings:{
    fontSize: 12,
    color: "white",
    marginRight:5,
  },

  reviews:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
  },

});
