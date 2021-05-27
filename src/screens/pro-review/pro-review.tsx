import React, { FC, useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import RoundAvatar from "../../components/round-avatar/round-avatar";
import { Icon } from "react-native-elements";
import TouchableRatingStars from "./component/touchable-rating-stars/touchable-rating-stars";
import SimpleButton from "../../components/simple-button/simple-button";
import TouchableTag from "./component/touchable-tag/touchable-tag";
import { useNavigation } from "@react-navigation/native";
import { ProfessionalModel } from "../../api/models/professional.model";
import { useDispatch, useSelector } from "react-redux";
import { IProfState } from "../../store/reducers/profs-reducer";
import { addNewReview } from "../../api/services/review";
import { TagModel } from "../../api/models/tag.model";
import { ReviewModel } from "../../api/models/review.model";
import { fetchAllProfsRequest } from "../../store/actions";
import axios from "axios";
import { UserModel } from "../../api/models/user.model";


interface ProReviewPros {
  //prof: ProfModel
  route: any,
}

const ProReview: FC<ProReviewPros> = (props: ProReviewPros) => {

  const navigation = useNavigation();
  //const { id } = props.route.params;
  const id = 9;
  const dispatch = useDispatch();
  //attention: need to come from previous screen otherwise useSelector returns undefined (need dispatch from app-date screen)
  useEffect( () => {
    dispatch(fetchAllProfsRequest());
    }, []);
  // @ts-ignore
  const prof: ProfessionalModel = useSelector((state: IProfState) => state.profs.profs.find(prof => prof.id === id));
  const [defaultRating, setDefaultRating] = useState(5);
  const [dataInput, setDataInput]  = useState('no review');
  const [user, setUser] = useState();
  const [tag, setTag] = useState();
  const [ide, setIde] = useState(0);

  const myRefs = React.useRef([]);

  let tagObject: TagModel = new TagModel({friendly: true, understanding: true, efficiency: true, punctuality: true})

  const starsHandler = (item) => {
    setDefaultRating(item);
  }

const sendReviewhandler = () => {
   axios.get('http://4887342173ea.ngrok.io/user/user_by_id/6').then(res => {setUser(res.data)})
    // let review = new ReviewModel({review: dataInput, date_hour: '25/05/21', stars: defaultRating, })
console.log('got user ?')
  // @ts-ignore
  //const userTest: UserModel = new UserModel(user)

  addNewReview(prof, user, defaultRating, dataInput, tagObject).then(res => console.log(res))
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
        <TouchableRatingStars rating={starsHandler} defaultRating={defaultRating}/>
        </View>

        <View>

        <Text style={styles.textTellUsMore}>Please tell us more</Text>

          <View style={styles.tagRow}>
            <TouchableTag text='Friendly'/>
            <TouchableTag text='Understanding'/>
          </View>

          <View style={styles.tagRow}>
            <TouchableTag text='Ponctual'/>
            <TouchableTag text='Efficient'/>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Add a comment</Text>
          <TextInput
            multiline={true}
            numberOfLines={5}
            maxLength={250}
            placeholder='Add a comment'
            style={styles.infoInput}
            onChangeText={(data) => setDataInput(data)}/>
        </View>

        <View style={styles.buttonContainer}>
          <SimpleButton text='Done' screen='Professionals'/>
        </View>
        </ScrollView>
      </View>
    </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default ProReview;
