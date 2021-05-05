import React, { FC, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfsRequest } from "../../store/actions";
import { IProfState } from "../../store/reducers/profs-reducer";

export interface TestComponentProps {

}

const TestComponent: FC<TestComponentProps> = () => {

  const dispatch = useDispatch();
  // @ts-ignore
  const profs = useSelector((state: IProfState) => state.profs.profs);
  // @ts-ignore
  const error = useSelector((state: IProfState) => state.profs.error);

  useEffect( () => {
      dispatch(fetchAllProfsRequest());
    }, []);

  return (
    <View style={styles.container}>
      <View>
        {error ? <Text>{error}</Text> : null}
        {profs?.length ? profs.map( (prof: any) => {
          return (
            <View key={prof.id}>
              <Text key={prof.id} style={styles.text}>{prof.first_name} {prof.last_name}</Text>
            </View>)
        }) : <Text>'no users found'</Text>}
      </View>
    </View>
  );
}

export default TestComponent;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:5,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 30,
  }
})
