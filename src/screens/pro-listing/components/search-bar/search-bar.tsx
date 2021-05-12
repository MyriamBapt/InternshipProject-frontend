import React, { FC }  from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  term: string;
  onTermChange: any;
  onTermSubmit: any;
}

const SearchBar: FC<SearchBarProps> = ( {term, onTermChange, onTermSubmit} ) => {

  return(
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchbar}
        placeholder="Search..."
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({

  searchbar:{
    borderRadius:10,
    margin: 10,
    color: '#000',
    borderColor: '#000',
    borderWidth: 1,

  },
  container:{
    flex:1
  }
})
