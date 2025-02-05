import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import pets from "@/src/data/pets";
import colors from "@/src/constants/colors";

export default function CardPet(){

  const renderItem = ({item}: any) => (
    <View style={styles.container}>
      <View>
        <Image
          source={item.image} 
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.infoContent}>
        <View style={styles.viewText}>
          <Text style={{fontSize: 24, color: colors.primary, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={styles.infoText}>Idade: {item.age} anos</Text>
          <Text style={styles.infoText}>Comida favorita: {item.favoriteFood}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: colors.offWhite}}>Ver informações</Text>
        </TouchableOpacity>
      </View>
  </View>
  )

  return (
    <FlatList
      data={pets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e1e1",
    padding: 10,
    borderRadius: 13,
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
  },
  image: {
    borderRadius: 7.5,
    height: 160,
    width: 130,
  },
  infoContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  viewText: {
    gap: 5,
  },
  infoText: {
    backgroundColor: "#cccaca",
    padding: 2,
    borderRadius: 4,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 7.5,
  }
});