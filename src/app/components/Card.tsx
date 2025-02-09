import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import pets from "@/src/data/pets";
import colors from "@/src/constants/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CardPet() {
  const renderItem = ({ item }: any) => (
    <ScrollView>
      <View style={styles.card}>
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
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    color: colors.primary,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}{" "}
                </Text>
                <Text>
                  {item.age} {item.age == 1 ? "ano" : "anos"}
                </Text>
              </View>

              {/* <View style={styles.infoText}>
                <Text>
                  Idade: {item.age} {item.age == 1 ? "ano" : "anos"}{" "}
                </Text>
                <FontAwesome
                  name="calendar-o"
                  size={20}
                  color={colors.sageGrey}
                />
              </View> */}

              <View style={styles.infoText}>
                <Text>{item.favoriteFood}</Text>
                <MaterialIcons
                  name="fastfood"
                  size={20}
                  color={colors.sageGrey}
                />
              </View>

              <View style={styles.infoText}>
                <Text>Vacinação: {item.vacina}</Text>
                <FontAwesome5
                  name="syringe"
                  size={20}
                  color={colors.sageGrey}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: colors.offWhite }}>Ver informações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  return (
    <FlatList
      data={pets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={<Text style={styles.textBottom}>Fim dos Pets!</Text>}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  image: {
    borderRadius: 130 / 2,
    width: 100,
    height: 100,
    borderWidth: 0.5,
    borderColor: colors.sageGrey,
  },
  infoContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  viewText: {
    gap: 5,
  },
  infoText: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#e1e1e1",
    padding: 2,
    borderRadius: 4,
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 5,
  },
  textBottom: {
    textAlign: "center",
    margin: 20,
    color: colors.sageGrey,
  },
});
