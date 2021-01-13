import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Dimensions } from "react-native";
// import ImageView from "../../core/components/ImageView";
import Interaction from "./components/Interaction";

interface Props {}

const Feed: React.FunctionComponent<Props> = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          style={styles.place}
          source={require("../../../assets/feed/place_2.jpg")}
        />
        <Interaction />
      </View>
    </View>
  );
};

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  main: {
    height: ScreenHeight,
    backgroundColor: "#fff",
    // position: "relative",
  },
  container: {},
  place: {
    height: "80%",
    width: "auto",
  },
  interaction: {
    position: "absolute",
    top: 0,
    zIndex: 99,
  },
});

export default Feed;
