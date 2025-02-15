import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";
import colors from "@/src/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

let width = Dimensions.get('window').width;

export default function Modals( ){
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Ionicons name="add-circle" size={50} color={colors.primary} />
      </TouchableOpacity>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={'down'}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.line}/>
            <View style={styles.headerModal}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <AntDesign name="closecircle" size={24} color={colors.sageGrey} />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>Cadastre seu Pet</Text>
          </View>
        </View>
      </Modal>  
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: '#fff',
    height: '75%',
    borderRadius: 20,
    padding: 20,
    position: 'relative',
  },
  headerModal: {
    alignItems: 'flex-end',
  },
  line: {
    position: 'absolute',
    top: 10,
    left: width / 2.35,
    height: 5,
    width: 60,
    borderRadius: 5/2,
    backgroundColor: colors.sageGrey,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24
  },
});

