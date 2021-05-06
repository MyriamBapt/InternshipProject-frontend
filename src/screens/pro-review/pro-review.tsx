import React, { FC, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import RoundAvatar from "../../components/round-avatar/round-avatar";
import { Icon } from "react-native-elements";
import TouchableRatingStars from "./component/touchable-rating-stars/touchable-rating-stars";
import SimpleButton from "../../components/simple-button/simple-button";

interface ProReviewPros {
  //prof: ProfModel
}

const ProReview: FC<ProReviewPros> = (props: ProReviewPros) => {

const [tagSelected, setTagSlected]  = useState(true);

const tagHandler = () => {

  if (tagSelected){
    setTagSlected(false)
  }
  else{
    setTagSlected(true)
  }
}

  return(
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.container}>
      <View style={styles.topContainer}>

      </View>
      <View style={styles.mainContainer}>
        <ScrollView>

        <Text style={styles.titleMeeting}>How was your meeting with</Text>

        <View style={styles.profInfo}>
          <RoundAvatar photo='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'/>
            <View style={styles.profIdentity}>
              <Text style={styles.name}>Nom Prénom</Text>
              <View style={styles.occupationRow}>
                <Text style={styles.occupation}>Occupation</Text>
                <Icon
                  size={19}
                  name='check-circle'
                  type='font-awesome'
                  color="#4EBDD6"
                />
              </View>
            </View>
        </View>

        <View style={styles.starContainer}>
        <TouchableRatingStars/>
        </View>

        <View>

        <Text style={styles.textTellUsMore}>Please tell us more</Text>

          <View style={styles.tagRow}>
            <TouchableOpacity
              style={tagSelected ? styles.tagSelectedStyle : styles.tagUnselectedStyle}
              onPress={tagHandler}>
              <Text style={tagSelected ? styles.textforTagSelected : styles.textforTagUnselected}>Friendly</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tagSelected ? styles.tagSelectedStyle : styles.tagUnselectedStyle}
              onPress={tagHandler}>
              <Text style={tagSelected ? styles.textforTagSelected : styles.textforTagUnselected}>Understanding</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tagRow}>
            <TouchableOpacity
              style={tagSelected ? styles.tagSelectedStyle : styles.tagUnselectedStyle}
              onPress={tagHandler}>
              <Text style={tagSelected ? styles.textforTagSelected : styles.textforTagUnselected}>Ponctuality</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tagSelected ? styles.tagSelectedStyle : styles.tagUnselectedStyle}
              onPress={tagHandler}>
              <Text style={tagSelected ? styles.textforTagSelected : styles.textforTagUnselected}>Efficiency</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Add a comment</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            maxLength={250}
            placeholder='Add a comment'
            style={styles.infoInput}/>
        </View>

        <View style={styles.buttonContainer}>
          <SimpleButton text='Done'/>
        </View>
        </ScrollView>
      </View>

    </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default ProReview;
