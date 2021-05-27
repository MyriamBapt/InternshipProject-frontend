import React, { FC } from "react";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import RoundAvatar from "../../components/round-avatar/round-avatar";
import ReviewCard from "./components/review-card/review-card";
import ToggleReviews from "./components/toggle-reviews/toggle-reviews";
import { ProfessionalModel } from "../../api/models/professional.model";
import { useSelector } from "react-redux";
import { IProfState } from "../../store/reducers/profs-reducer";

interface ProAllReviewsProps{
  route: any,
  screen: string
}

const ProAllReviews: FC<ProAllReviewsProps> = (props:ProAllReviewsProps) => {

  const { id } = props.route.params;
  // @ts-ignore
  const prof: ProfessionalModel = useSelector((state: IProfState) => state.profs.profs.find(prof => prof.id === id));
  const profReviews = prof.review

  // @ts-ignore
  const starsAverage = prof.review.reduce( (prev, current) => {
    return  prev + current.stars / prof.review.length ;
  }, 0);

  const totalReviews = profReviews.length

  return(
    <View style={styles.container}>
      <View style={styles.top}>
      </View>
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <RoundAvatar photo={prof.avatar_url}/>
            <View style={styles.starContainer}>
              <Image source={require('./img/star_filled.png')} style={styles.star}/>
            </View>
            <Text style={styles.numberOfStars}> {starsAverage}/5 </Text>
            <Text style={styles.reviews}>{totalReviews} reviews</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
        <ToggleReviews textOne='Recent' textTwo='Positive' textThree='Negative'/>
        </View>
        <View style={styles.list}>
          <FlatList
            data={profReviews}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ReviewCard key={item.id} reviews={item}/>}
          />
        </View>
      </View>
    </View>
  )
}

export default ProAllReviews;
