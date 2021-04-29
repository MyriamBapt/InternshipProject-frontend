import React, { FC } from "react";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import RoundAvatar from "../../components/round-avatar/round-avatar";
import ReviewCard from "./components/review-card/review-card";
import ToggleReviews from "./components/toggle-reviews/toggle-reviews";

interface ProAllReviewsProps{
  //reviews: ReviewsModel;
}

const ProAllReviews: FC<ProAllReviewsProps> = (props:ProAllReviewsProps) => {

  const fakeData = [
    {
      id:1,
      stars:5,
      date_hour:'XX/XX/XXXX',
      first_name: 'paul',
      last_name:'poupou',
      review:'very nice comment'
    },
    {
      id:2,
      stars:3,
      date_hour:'XX/XX/XXXX',
      first_name: 'patrick',
      last_name:'doudou',
      review:'very nice comment again'
    },

  ]

  return(
    <View style={styles.container}>

      <View style={styles.top}>
      </View>

      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <RoundAvatar photo='to be added'/>
            <View style={styles.starContainer}>
              <Image source={{uri : 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png'}} style={styles.star}/>
            </View>
            <Text style={styles.numberOfStars}> X,X/5 </Text>
            <Text style={styles.reviews}>reviews</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
        </View>

        <View style={styles.list}>
          <FlatList
            data={fakeData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ReviewCard/>}
          />
        </View>

      </View>
    </View>
  )
}

export default ProAllReviews;
