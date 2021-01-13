import React from "react";
import { StyleSheet, Image, Text } from "react-native";

interface Props {
  src: string;
}
//
const ImageView: React.FunctionComponent<Props> = ({ src }) => {
  return (
    <Image
      source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
      style={{ width: 305, height: 159 }}
    />
  );
  // return <Text>text</Text>;
};

const styles = StyleSheet.create({
  place: {
    height: "100%",
    width: "auto",
  },
});

export default ImageView;
