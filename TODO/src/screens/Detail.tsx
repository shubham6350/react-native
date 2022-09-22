/* eslint-disable no-alert */
import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '../../SetUp';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../Interface/Types';
import styles from './Detail_style';

const DetailScreen = ({route}) => {
  const TodoRef = firebase.firestore().collection('Todos');
  const [textHeading, onChangeHeadingtext] = useState<string>(
    route.params.temp.data,
  );

  const navigation: routes = useNavigation();
  //function for updating TODO
  const updateTodo = (): void => {
    if (textHeading && textHeading.length > 0) {
      TodoRef.doc(route.params?.temp?.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          alert('updated successfully');
          navigation.navigate('Home');
        })
        .catch(_error => {
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

export default DetailScreen;
