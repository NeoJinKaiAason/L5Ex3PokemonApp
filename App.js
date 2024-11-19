import React from 'react';
import { View, Text, StyleSheet, Image, SectionList, TouchableOpacity } from 'react-native';

// Data for Pokémon cards
const pokemonData = [
  {
    title: "⚡ ELECTRIC",
    data: [
      {
        name: "Pikachu",
        number: 60,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png",
      },
      {
        name: "Zapdos",
        number: 67,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_145-2x.png",
      },
    ],
    headerStyle: { backgroundColor: "#f4e34c" },
  },
  {
    title: "🔥 FIRE",
    data: [
      {
        name: "Charizard",
        number: 70,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png",
      },
      {
        name: "Moltres",
        number: 80,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_146-2x.png",
      },
    ],
    headerStyle: { backgroundColor: "#ffcccb" },
  },
  {
    title: "💧 Water",
    data: [
      {
        name: "Blastoise",
        number: 70,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png",
      },
      {
        name: "Lapras",
        number: 80,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_131-2x.png",
      },
    ],
    headerStyle: { backgroundColor: "#00FFFF" },
  },
  {
    title: "🌱 Grass",
    data: [
      {
        name: "Venosaur",
        number: 70,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_3-2x.png",
      },
      {
        name: "Scyther",
        number: 80,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_123-2x.png",
      },
    ],
    headerStyle: { backgroundColor: "#90EE90" },
  },
  {
    title: "⚪ Normal",
    data: [
      {
        name: "Jigglypuff",
        number: 70,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_39-2x.png",
      },
      {
        name: "Chansey",
        number: 80,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_113-2x.png",
      },
    ],
    headerStyle: { backgroundColor: "#D3D3D3" },
  },
  {
    title: "🔮 Psychic",
    data: [
      {
        name: "Mew",
        number: 70,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151-2x.png",
      },
      {
        name: "Mewtwo",
        number: 80,
        url: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_150-2x.png",
      },
    ],
    headerStyle: { backgroundColor: "#Ffc0cb" },
  },
];

const App = () => {
  // Function to render Pokémon card
  const renderItem = ({ item }) => (
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>{item.name}</Text>
        <Image source={{ uri: item.url }} style={styles.imageStyle} />
      </View>
  );

  return (
      <View style={styles.container}>
        {/* Add Pokémon Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD POKEMON TEST</Text>
        </TouchableOpacity>

        {/* Section List for Pokémon */}
        <SectionList
            sections={pokemonData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, headerStyle } }) => (
                <View style={[styles.header, headerStyle]}>
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
        />
      </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  addButton: {
    backgroundColor: "#007bff",
    padding: 15,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  imageStyle: {
    width: 200, // Larger width
    height: 240, // Larger height
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default App;

