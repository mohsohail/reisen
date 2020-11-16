import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  const src = "./assets/feed/images/josh-hild-Y4SGF6YBmyw-unsplash.jpg";
  // const [ratio, setRatio] = useState(1);
  // useEffect(() => {
  //   if (src) {
  //     Image.getSize(src, (width, height) => {
  //       setRatio(width / height);
  //     });
  //   }
  // }, [src]);
  return (
    <View style={styles.container}>
      {/* <ScrollView contentContainerStyle={{ alignItems: "center" }}> */}
      {/* <Text>Hello World</Text> */}
      <View>
        <Image
          style={styles.feedImage}
          // style={{ width: "100%", height: "100%", aspectRatio: ratio }}
          source={require(src)}
          // resizeMode="contain"
        />
      </View>
      {/* <StatusBar style="auto" /> */}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  feedImage: {
    width: "100%",
    height: "100%",
  },
});
