import React, { FC, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CardProfile from "./components/card-profile/card-profile";
import SearchBar from "./components/search-bar/search-bar";

interface ProListingProps {
  //proData: ProModel; TO DO
}

const ProListing: FC<ProListingProps> = (props:ProListingProps) => {

  const [searchTerm, setSearchTerm] = useState('');

  const tempData = [
    {
      id: 1,
      first_name: 'Jean',
      last_name: 'Dupont',
      email: 'test@gmil.com',
      phone: '0123456789',
      city: 'Lyon',
      occupation: 'nutrition',
      yearsActivity: 8,
      firstMeetingPrice: 50,
      followupMeetingPrice: 40,
      avatarUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      description: 'Hi ! This is my description. Hope you like it',
      stars:3,
    },

    {
      id: 2,
      first_name: 'Paul',
      last_name: 'Boudin',
      email: 'testagain@gmil.com',
      phone: '0197845213',
      city: 'Paris',
      occupation: 'nutrition',
      yearsActivity: 8,
      firstMeetingPrice: 50,
      followupMeetingPrice: 40,
      avatarUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      description: 'Hi ! This is my description. Hope you like it',
      stars:4,
    },

    {
      id: 3,
      first_name: 'Paula',
      last_name: 'Tournesol',
      email: 'testagain@gmil.com',
      phone: '0197845213',
      city: 'Paris',
      occupation: 'nutrition',
      yearsActivity: 8,
      firstMeetingPrice: 50,
      followupMeetingPrice: 40,
      avatarUrl: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      description: 'Hi ! This is my description. Hope you like it',
      stars:5,
    },
  ];



  return(
    <View style={styles.container}>
      <View>
        <SearchBar
          term={searchTerm}
          onTermChange={setSearchTerm}
          onTermSubmit={ () => {} }
        />
      </View>
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
