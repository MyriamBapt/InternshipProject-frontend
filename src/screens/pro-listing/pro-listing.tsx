import React, { FC, useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet, FlatList, Text } from "react-native";
import CardProfile from "./components/card-profile/card-profile";
import SearchBar from "./components/search-bar/search-bar";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfsRequest } from "../../store/actions";
import { IProfState } from "../../store/reducers/profs-reducer";
import { ProfessionalModel } from '../../api/models/professional.model';

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

  useEffect( () => {
    dispatch(fetchAllProfsRequest());
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  return(
    <View style={styles.container}>
      <View>
        <SearchBar
          term={searchTerm}
          onTermChange={setSearchTerm}
          onTermSubmit={ () => {} }
        />
      </View>
      {loading ? <ActivityIndicator size="large" color="#00ff00" /> : null}
      {error ? <Text>{error}</Text> : null}
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={profs}
          numColumns={2}
          keyExtractor={(item: ProfessionalModel, index: number) => item.id}
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
