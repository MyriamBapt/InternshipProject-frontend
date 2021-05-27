import React, { FC, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

interface TouchableRatingStarsProps{
  rating: any;
  defaultRating: any;
}


const TouchableRatingStars: FC<TouchableRatingStarsProps> = (props:TouchableRatingStarsProps) => {


  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);


  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => props.rating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= props.defaultRating
                    ? require('./img/star_filled.png')
                    : require('./img/star_corner.png')
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <CustomRatingBar />
      </View>
    </SafeAreaView>
  );
};

export default TouchableRatingStars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },

  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});
