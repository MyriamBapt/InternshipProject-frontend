import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

const StarsRating = (props:any) => {



  const [defaultRating, setDefaultRating] = useState(props.ratings);

  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => {
              }}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
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
