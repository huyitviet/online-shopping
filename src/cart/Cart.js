import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Cart (){
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, backgroundColor: "red" }} />
      <View style={{ flex: 3, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
      <View style={{ flex: 2, backgroundColor: "white" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Cart;