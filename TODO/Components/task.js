/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = props => {
  return (
    <View style={style.container_item}>
      <View style={style.items}>
        <TouchableOpacity onPress={() => props.doneTask()}>
          <View style={style.square}></View>
        </TouchableOpacity>
        <Text
          style={props.isDone ? style.completed_item_text : style.item_text}>
          {props.text}
        </Text>
      </View>
      <View style={style.button_c}>
        <TouchableOpacity onPress={() => props.edit()}>
          <View style={style.circular1}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.completeTask()}>
          <View style={style.circular}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container_item: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  item_text: {
    width: '80%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  completed_item_text: {
    width: '80%',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
  circular: {
    height: 24,
    width: 24,
    borderColor: '#55BCF6',
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'red',
    marginLeft: 5,
    marginRight: 5,
  },
  index: {
    marginLeft: 10,
    marginTop: 4,
    fontWeight: 'bold',
  },
  circular1: {
    height: 24,
    width: 24,
    borderColor: '#FFA500',
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#0000FF',
    marginRight: 5,
  },
  button_c: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task;
