import React, { FC } from "react";
import { Text, View } from "react-native";

interface ProReviewPros {
  //prof: ProfModel
}

const ProReview: FC<ProReviewPros> = (props: ProReviewPros) => {
  return(
    <View>
      <Text>Screen Pro review working</Text>
    </View>
  );
};

export default ProReview;
