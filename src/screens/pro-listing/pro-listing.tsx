import React, { FC } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SearchBar } from "react-native-elements";
import CardProfile from "./components/card-profile/card-profile";

interface ProListingProps {
  //proData: ProModel; TO DO MODEL
}

const ProListing: FC<ProListingProps> = () => {

  const tempData = [
    {
      id: 1,
      first_name: 'Jean',
      last_name: 'DUOPONT',
      email: 'test@gmil.com',
      phone: '0123456789',
      city: 'Lyon',
      occupation: 'nutrition',
      yearsActivity: 8,
      firstMeetingPrice: 50,
      followupMeetingPrice: 40,
      avatarUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      description: 'Hi ! This is my description. Hope you like it'
    },

    {
      id: 2,
      first_name: 'Paul',
      last_name: 'BOUDIN',
      email: 'testagain@gmil.com',
      phone: '0197845213',
      city: 'Paris',
      occupation: 'nutrition',
      yearsActivity: 8,
      firstMeetingPrice: 50,
      followupMeetingPrice: 40,
      avatarUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      description: 'Hi ! This is my description. Hope you like it'
    },

    {
      id: 3,
      first_name: 'paula',
      last_name: 'TOURNESOL',
      email: 'testagain@gmil.com',
      phone: '0197845213',
      city: 'Paris',
      occupation: 'nutrition',
      yearsActivity: 8,
      firstMeetingPrice: 50,
      followupMeetingPrice: 40,
      avatarUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      description: 'Hi ! This is my description. Hope you like it'
    },
  ];



  return(
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={tempData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <CardProfile professional={item}  screen='Profile' />}
        />
      </View>
    </View>
  );
};


export default ProListing;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:5,
    backgroundColor: '#ffffff'
  },

  listContainer:{
    flex:1,
  },

})
