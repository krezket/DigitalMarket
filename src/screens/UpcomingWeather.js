import React from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native";
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
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/gifs/wizard.gif')}
        style={styles.image}
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  image: {
    flex: 1
  }
})
export default UpcomingWeather;