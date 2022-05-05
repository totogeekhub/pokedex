import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native'
import React from 'react'
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
  const { name, order, image, type } =props;
  const color = getColorByPokemonType(type);
  const bgStyle = [{backgroundColor:  color, ...styles.bg}]
    console.log(props)
  return (
    <View>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.contentImg}>
          <Image source={{ url: image}} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{scaleX: 2}],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30, 
  },
  image: {
    width: 250,
    height: 250,
  },
})