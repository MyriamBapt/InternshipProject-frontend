import React, { FC, useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet, FlatList, Text } from "react-native";

import { ListItem, SearchBar } from 'react-native-elements';

import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfsRequest } from "../../store/actions";

import CardProfile from "./components/card-profile/card-profile";
// import SearchBar from "./components/search-bar/search-bar";

import { IProfState } from "../../store/reducers/profs-reducer";
import { ProfessionalModel } from '../../api/models/professional.model';
import { IProfessional } from '../../api/interfaces/professional';

interface ProListingProps {
  //proData: ProModel; TO DO
}

const ProListing: FC<ProListingProps> = (props:ProListingProps) => {

  const dispatch = useDispatch();
  // @ts-ignore
  const profs: ProfessionalModel[] = useSelector((state: IProfState) => state.profs.profs);
  // @ts-ignore
  const error = useSelector((state: IProfState) => state.profs.error);
  // @ts-ignore
  const loading = useSelector((state: IProfState) => state.profs.loading);

  const [searchTerm, setSearchTerm] = useState('');
  const [arrayHolder, setArrayHolder] = useState<IProfessional[] | []>(profs);

  useEffect( () => {
    dispatch(fetchAllProfsRequest());
  }, []);



  //setArrayHolder(profs);
  console.log(`profs: ${profs}`);
  console.log(`ArrayHolder: ${arrayHolder}`);

  const searchFilterHandler = (text: string) => {
    console.log(`text: ${text}`);
    console.log(`ArrayHolder in filter: ${arrayHolder}`);
    setSearchTerm(text);

    const newData = arrayHolder.filter((item: any) => {
      const itemData = `${item.first_name.toUpperCase()} ${item.last_name.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    // @ts-ignore
    setArrayHolder( newData);
  };

 const renderSeparator = () => {
   return (
     <View
       style={{
         height: 1,
         width: '86%',
         backgroundColor: '#CED0CE',
         marginLeft: '14%',
       }}
     />
   );
 };

  const renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        round
        lightTheme
        onChangeText={text => searchFilterHandler(text)}
        autoCorrect={false}
        value={searchTerm}
        platform={"default"}
      />
    );
  };

  // @ts-ignore
  return(
    <View style={styles.container}>
      <View>
        <FlatList
          data={arrayHolder}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: item.avatar_url } }}
              title={`${item.first_name} ${item.last_name}`}
              subtitle={item.email}
            />
          )}
          keyExtractor={(item: ProfessionalModel) => item.email}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={renderHeader}
        />
      </View>
      {loading ? <ActivityIndicator size="large" color="#00ff00" /> : null}
      {error ? <Text>{error}</Text> : null}
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={profs}
          numColumns={2}
          keyExtractor={((item: ProfessionalModel) => item.id)}
          renderItem={({item}) => <CardProfile key={item.id} professional={item}  screen='Profile' />}
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
