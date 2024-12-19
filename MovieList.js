import React from "react";
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

const MovieList = ({movies}) => {
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Image source={item.image} style={styles.logo}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.genre}</Text>
        <Text style={styles.subtitle}>{item.fav}</Text>
        {/* {item.cast.map((actor, index) => (
          <Text key={index} style={styles.actor}>
            {actor}
          </Text>
        ))} */}
      </View>
    );
  
    return (
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // This is needed for horizontal scrolling to work
    },
    item: {
      // backgroundColor: "#ccc",
      padding: 10,
      marginHorizontal: 10,
      marginVertical: 8,
      width: 180,
      height:265,
      borderRadius: 12,
    //   paddingBottom: -100,
    
    },
    title: {
      fontSize: 14,
      marginTop: 8,
      fontWeight: "bold",
      marginLeft: 8,
      color: "#fff",
      marginBottom: -7,
    },
    subtitle: {
      fontSize: 12,
      marginTop: 8,
      marginLeft: 8,
      color: "red",
    },
    actor: {
      fontSize: 14,
    },
    logo: {
        width: 150,
        height: 190,
        alignSelf: "center",
        borderRadius: 10,
    },
});

export default MovieList;