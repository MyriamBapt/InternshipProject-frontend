import React, { FC, useState } from "react";
import { FlatList, Image, View } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import ButtonBook from "../../components/button-book/button-book";
import navigation from "../../router/navigation";
import { Icon } from "react-native-elements";
import RoundAvatar from "../../components/round-avatar/round-avatar";
import Tag from "./components/tag";

interface ProProfileProps {
  //proData: ProModel;
}

const ProProfile: FC<ProProfileProps> = (props: ProProfileProps) => {

  /*const navigation = useNavigation();
  const [price, setPrice] = useState(results.first_meeting_price);
  const [duration, setDuration] = useState('1h - 1h30') */
  const fakeData: string[] = ['tag one','tag two', 'tag three'];

  const [clickedOne, setClickedOne] = useState(true);
  const [clickedTwo, setClickedTwo] = useState(false);

  const ToggleOne = () => {
    if (clickedOne===false){
      setClickedOne(true);
      setClickedTwo(false);
      //setPrice(results.first_meeting_price);
      //setDuration('1h - 1h30')
    }
  }

  const ToggleTwo = () => {
    if (clickedTwo===false){
      setClickedTwo(true);
      setClickedOne(false);
      //setPrice(results.followup_meeting_price);
      //setDuration('1h')
    }
  }

  return(
    <View style={styles.mainContainer}>
      <View style={styles.avatarContainer}>
        <RoundAvatar photo='need to be added'/>
      </View>
      <View style={styles.top}>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.starContainer}>
            <Image source={{uri : 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png'}} style={styles.star}/>
          </View>
          <Text style={styles.stars}> XX/5 </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.reviews}> reviews</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <Text style={styles.name}>first_name last_name</Text>
          <View style={styles.subtitle}>
            <Text style={styles.subtext}>occupation</Text>
            <Icon
              size={19}
              name='check-circle'
              type='font-awesome'
              color="#4EBDD6"/>
          </View>
          <Text style={styles.description}>Bonum integritas corporis: misera debilitas. Nunc de hominis summo bono quaeritur; Quis istud, quaeso, nesciebat? Confecta res esset. Si verbum sequimur.</Text>
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
            <Text style={styles.remote}>Remote</Text>
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
              <Text style={styles.place}>city</Text>
            </View>
          </View>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList data={fakeData} numColumns={2} columnWrapperStyle={{justifyContent: 'space-between'}} renderItem={({item}) => <Tag text={item} />} style={styles.flatlist}/>
        </View>
        <View style={styles.priceAndDuration}>
          <View style={styles.ToggleContainer}>
            <TouchableOpacity style={clickedOne ? styles.buttonpressed : styles.buttonContainer} onPress={ToggleOne}>
              <Text style={styles.appButtonText}>
                First Report
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={clickedTwo ? styles.buttonpressed : styles.buttonContainer} onPress={ToggleTwo}>
              <Text style={styles.appButtonText}>
                Follow-up
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>price</Text>
          <Text style={styles.description}>duration</Text>
        </View>
        <View style={styles.button}>
          <ButtonBook text='Book an appointment'/>
        </View>
      </View>
    </View>
  )
};

export default ProProfile;
