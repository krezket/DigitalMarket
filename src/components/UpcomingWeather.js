import React from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons';

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
const Item = (props) => {
  const { id, title } = props;
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="yellow" />
      <Text>{id}</Text>
      <Text>{title}</Text>
    </View>
  )
}
const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item id={item.id} title={item.title} />
  )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground>
        source={require('../../assets/gifs/neutron.gif')}
        style={styles.image}
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
    width: 100,
    height: 100,
  }
})
export default UpcomingWeather;