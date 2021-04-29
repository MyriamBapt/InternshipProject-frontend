import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StarsRating from "../../../../components/stars-rating/stars-rating";

interface ReviewCardProps{
  //reviews: ReviewsModel
}

const ReviewCard = (props: ReviewCardProps) => {
  return(
    <View style={styles.container}>

      <View style={styles.ratingAndDate}>
        <StarsRating/>
        <Text style={styles.date}>date_hour</Text>
      </View>
      <Text style={styles.author}>first_name last_name</Text>
      <Text style={styles.comment}>review</Text>

    </View>
  )
};

export default ReviewCard;

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:10,
    backgroundColor:'#ffff',
    marginTop:10,
  },

  ratingAndDate:{
    flexDirection: "row",
  },

  date:{
    fontSize: 10,
    color: '#9096AA',
    lineHeight: 18,
  },

  author:{
    fontSize:18,
    fontWeight: "bold",
    lineHeight: 21,
    color: '#555B70',
    margin:5,
  },

  comment:{
    fontSize: 12,
    color: '#9096AA',
    lineHeight: 18,
    margin: 5,
  },

})
