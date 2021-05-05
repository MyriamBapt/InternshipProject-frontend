import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

interface StarsRatingProps{
  ratings: number;
}

const StarsRating = (props:StarsRatingProps) => {


  const [defaultRating, setDefaultRating] = useState(props.ratings);

  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item) => {
          return (
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? require('./img/star_filled.png')
                    : require('./img/star_corner.png')

                }
              />
          );
        })}
      </View>
    );
  };


  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <CustomRatingBar />
      </View>
    </SafeAreaView>
  );
};

export default StarsRating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  customRatingBarStyle: {
    flexDirection: 'row',
    margin: 2,
  },

  starImageStyle: {
    width: 15,
    height: 15,
    resizeMode: 'cover',

  },
});
