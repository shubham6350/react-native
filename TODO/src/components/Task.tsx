/* eslint-disable react/self-closing-comp */
import React from 'react';
import styles from '../styles';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {routes, list} from '../Interface/Types';

const Task = props => {
  const navigation: routes = useNavigation();
  const temp: list = props.item;
  return (
    <View style={styles.container_item}>
      <View style={styles.list_2}>
        <View style={styles.item_1}>
          <TouchableOpacity onPress={() => props.completeTask()}>
            <View style={styles.square} />
          </TouchableOpacity>
        </View>
        <View style={styles.text_style}>
          <Text
            style={
              props.item.completed
                ? styles.completed_item_text
                : styles.item_text
            }>
            {props.item.data}
          </Text>
        </View>
        <View style={styles.button_c}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {temp})}>
            <View style={styles.circular1}></View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.deleteTask()}>
            <View style={styles.circular}></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Task;
