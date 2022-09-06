/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const Task = (props) => {
    console.log({ props })

    return (
        <View style={style.container_item} >
            <View style={style.items}>
                <TouchableOpacity onPress={() => props.doneTask()} >
                    <View style={style.square} >
                    </View>
                </TouchableOpacity>
                <Text style={props.isDone ? style.completed_item_text : style.item_text} >{props.text}</Text>
            </View>

            <TouchableOpacity onPress={() => props.completeTask()}>
                <View style={style.circular}></View>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container_item: {
        backgroundColor: '#fff',
        padding: 15,
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
        textDecorationLine:'line-through',

    },
    circular: {
        height: 24,
        width: 24,
        borderColor: '#55BCF6',
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: 'red',
    },
    index: {
        marginLeft: 10,
        marginTop: 4,
        fontWeight: 'bold',


    },




});

export default Task; 