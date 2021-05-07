import React, { FC, useState } from "react";
import { FlatList, Image, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { Icon } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";

import RoundAvatar from "../../components/round-avatar/round-avatar";
import Tag from "./components/tag";
import ButtonBook from "../../components/button-book/button-book";
import styles from "./styles";

import { ProfessionalModel } from "../../api/models/professional.model";
import { IProfState } from "../../store/reducers/profs-reducer";

interface ProProfileProps {
  route: any,
  screen: string
}

const ProProfile: FC<ProProfileProps> = (props: ProProfileProps) => {
  const navigation = useNavigation();
  const { id } = props.route.params;
  // @ts-ignore
  const prof: ProfessionalModel = useSelector((state: IProfState) => state.profs.profs.find(prof => prof.id === id));

  // @ts-ignore
  const starsAverage = prof.review.reduce( (prev, current) => {
    return  prev + current.stars / prof.review.length ;
  }, 0);

  const [firstReport, setFirstReport] = useState(true);
  const [followUp, setFollowUp] = useState(false);

  const ToggleButtonsHandler = () => {
    if (!firstReport){
      setFirstReport(true);
      setFollowUp(false);
    } else {
      setFirstReport(false);
      setFollowUp(true);
    }
  }

  //const friendlyTotal = prof.tag.find( tag => tag.friendly);
  const friendlyTotal = prof.tag.filter(tag => tag.friendly).length / prof.tag.length * 100;
  const understandingTotal = prof.tag.filter(tag => tag.understanding).length / prof.tag.length * 100;
  const punctualityTotal = prof.tag.filter(tag => tag.punctuality).length / prof.tag.length * 100;
  const efficiencyTotal = prof.tag.filter(tag => tag.efficiency).length / prof.tag.length * 100;

  const tags = [
    { Friendly: friendlyTotal },
    { Understanding : understandingTotal },
    { Punctuality : punctualityTotal },
    { Efficiency : efficiencyTotal }
  ];

  return(
    <View style={styles.mainContainer}>

      <View style={styles.avatarContainer}>
        <RoundAvatar photo={prof.avatar_url}/>
      </View>

      <View style={styles.top}>
      </View>

      <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
          <View style={styles.starContainer}>
            <Image source={{uri : 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png'}} style={styles.star}/>
          </View>
          <Text style={styles.stars}> {starsAverage}/5 </Text>
          <TouchableOpacity onPress={() =>  navigation.navigate('Reviews')}>
            <Text style={styles.reviews}>{prof.review.length} reviews</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.main}>
          <Text style={styles.name}>{prof.first_name} {prof.last_name}</Text>
          <View style={styles.subtitle}>
            <Text style={styles.subtext}>{prof.occupation}</Text>
            <Icon
              size={19}
              name='check-circle'
              type='font-awesome'
              color="#4EBDD6"/>
          </View>
          <Text style={styles.description}>{prof.description}</Text>
        </View>

        <View style={styles.locations}>
          <View style={styles.locationrow}>
            <View style={styles.icon}>
              <Icon
                size={19}
                name='desktop'
                type='font-awesome'
                color='white'/>
            </View>
            <Text style={styles.locationDetailsText}>Remote</Text>
          </View>
          <View style={styles.locationrow}>
            <View style={styles.icon}>
              <Icon
                size={19}
                name='map-marker'
                type='font-awesome'
                color='white'/>
            </View>
            <View style={styles.locationdetails}>
              <Text style={styles.locationTitle}>Location</Text>
              <Text style={styles.locationDetailsText}>{prof.city}</Text>
            </View>
          </View>
        </View>

        <View style={styles.flatlistContainer}>
          <FlatList
            data={tags}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => <Tag item={item} /> }
            style={styles.flatlist}/>
        </View>

        <View style={styles.priceAndDuration}>
          <View style={styles.ToggleContainer}>
            <TouchableOpacity style={firstReport ? styles.buttonpressed : styles.buttonContainer} onPress={ToggleButtonsHandler}>
              <Text style={styles.appButtonText}>
                First Report
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={followUp ? styles.buttonpressed : styles.buttonContainer} onPress={ToggleButtonsHandler}>
              <Text style={styles.appButtonText}>
                Follow-up
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>{firstReport ? prof.first_meeting_price : prof.followup_meeting_price}</Text>
          <Text style={styles.description}>duration</Text>
        </View>

        <View style={styles.button}>
          <ButtonBook text='Book an appointment'/>
        </View>

        </ScrollView>
      </View>

    </View>
  )
};

export default ProProfile;
