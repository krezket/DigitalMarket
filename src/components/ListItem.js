import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';


const ListItem = (props) => {
    const { id, title } = props;
    const { item } = styles;
    return (
      <View style={item}>
        <Feather name="sun" size={50} color="yellow" />
        <Text>{id}</Text>
        <Text>{title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
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
})
export default ListItem;