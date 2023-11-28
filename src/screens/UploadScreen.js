import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getElastic } from "../utils/elasticSearch";
import { handleEpic } from "../utils/handleEpic";
import { FlatList } from "react-native-gesture-handler";

const UploadScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [organization, setOrganization] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    getElastic(term)
      .then((response) => {
        const results = response.hits.hits.map((hit) => hit._source);

        if (term.length === 0) {
          setSearchResults([]);
          return;
        }

        setSearchResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data from ElasticSearch:", error);
      });
  }, [term]);
  useEffect(() => {
    // Check if organization is defined and has meta array with at least one item
    if (organization && organization.meta && organization.meta.length > 0) {
      // Check if the url property exists in the first item of the meta array
      const epicURL = organization.meta[0].url;
      if (epicURL) {
        // Call handleEpic with the modified URL
        handleEpic(epicURL.replace(/\/api\/FHIR\/R4\/$/, "/oauth2/authorize"));
      }
    }
  }, [organization]);

  return (
    <View>
      <TextInput
        value={term}
        onChangeText={(newTerm) => setTerm(newTerm)}
        style={styles.search}
        placeholder="Search for your doctor or hospital"
      />
      <FlatList
        style={styles.list}
        data={searchResults}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              setOrganization(item);
              setModalVisible(true);
            }}
            style={styles.listItem}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{
                width: 100,
                height: 50,
                borderWidth: 1,
              }}
              source={{
                uri: `data:image/png;base64,${organization.image}`,
              }}
            />
            {organization?.meta?.map((org) => (
              // <Button
              //   title={org.source}
              //   onPress={() => setModalVisible(false)}
              // />
              <TouchableOpacity key={org.id}>
                <Text>{org.source}</Text>
              </TouchableOpacity>
            ))}

            <Button title="close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  list: {
    margin: 10,
  },
  listItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
