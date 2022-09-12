/* eslint-disable prettier/prettier */
import React from 'react';
import styles from '../styles';
import {View, Text,TouchableOpacity} from 'react-native';

const Task = props => {
  // console.log(props,'props');
  return (
    <View style={styles.container_item}>
      <View style={styles.item_1}>
        <TouchableOpacity onPress={() => props.completeTask()}>
          <View style={styles.square}></View>
        </TouchableOpacity>
        <Text
          style={props.completed ? styles.completed_item_text : styles.item_text}>
          {props.text}
        </Text>
      </View>
      <View style={styles.button_c}>
        <TouchableOpacity onPress={() => props.update(props)}>
          <View style={styles.circular1}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.deleteTask()}>
          <View style={styles.circular}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Task;
