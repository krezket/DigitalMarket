import React from "react";
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem id={item.id} title={item.title} />
    )
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/gifs/wizard.gif')}
        style={image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather;