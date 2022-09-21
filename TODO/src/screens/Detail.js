import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '../../SetUp';
import {useNavigation} from '@react-navigation/native';

const DetailScreen = ({route}) => {
  const TodoRef = firebase.firestore().collection('Todos');
  const [textHeading, onChangeHeadingtext] = useState(
    route.params.temp.data.heading,
  );
  const navigation = useNavigation();
  const updateTodo = () => {
    if (textHeading && textHeading.length > 0) {
      TodoRef.doc(route.params?.temp?.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          alert('updated successfully');
          navigation.navigate('Home');
        })
        .catch(error => {
          alert('error');
        });
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textField}
        onChangeText={onChangeHeadingtext}
        value={textHeading}
        placeholder="Upadte Todo"
      />
      <Pressable
        style={styles.buttonupadte}
        onPress={() => {
          updateTodo();
        }}>
        <Text style={styles.Text}>UPDATE TODO</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    width: '80%',
    borderWidth: 2,
    borderColor: '#2596be',
    borderRadius: 10,
    padding: 15,
  },
  buttonupadte: {
    marginTop: 10,
    backgroundColor: '#2596be',
    borderRadius: 10,
    padding: 10,
  },
  Text: {
    color: '#fff',
  },
});

export default DetailScreen;
