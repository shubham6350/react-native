/* eslint-disable no-alert */
import styles from '../styles';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import Task from '../components/Task';
import {firebase} from '../../SetUp';
import {ITODO, list, complete} from '../Interface/Types';

const HomeScreen = () => {
  //Initialize  a state{Todos} for storing data from firebase.....
  const [Todos, setTodos] = useState<list>([]);
  const TodoRef = firebase.firestore().collection('Todos');
  //Initialization a state for storing text of Todos.....
  const [AddData, setAddData] = useState<string>('');
  //calling useEffect for getting data when we change our state..
  useEffect(() => {
    const subcriber = firebase
      .firestore()
      .collection('Todos')
      .onSnapshot(querysnapshot => {
        const TodoList: list = [];
        querysnapshot.forEach(ele => {
          TodoList.push({
            data: ele.data().heading,
            completed: ele.data().completed,
            Time: ele.data().id,
            id: ele.id,
          });
        });
        setTodos(TodoList);
      });
    return () => subcriber();
  }, []);

  //Adding TODO to firebase database
  const addTodo = (): void => {
    if (AddData && AddData.length > 0) {
      const timestamp: number = new Date().getTime();
      let data: ITODO = {
        heading: AddData,
        id: timestamp,
        completed: false,
      };
      TodoRef.add(data)
        .then(() => {
          setAddData('');
          Keyboard.dismiss();
        })
        .catch(error => {
          alert(error);
        });
    }
  };
  //function to Mark complete the TODO
  const completeTodo = (item: complete): void => {
    TodoRef.doc(item.id)
      .update({
        completed: !item.completed,
      })
      .then(() => {
        if (item.completed === false) {
          alert('completed Successfully');
        } else {
          alert('You Mark As incomplete');
        }
      })
      .catch(() => {
        alert('error');
      });
  };
  //function for deleting TODO
  const deleteTodo = (todo: string): void => {
    TodoRef.doc(todo)
      .delete()
      .then(() => alert('Deleted Successfully'))
      .catch(error => {
        alert(error);
      });
  };
  // function for render data
  const renderItem = ({item}: any) => {
    return (
      <View>
        <Task
          item={item}
          completeTask={() => completeTodo(item)}
          deleteTask={() => deleteTodo(item.id)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.task_container}>
          <View style={styles.title}>
            <Text style={styles.task_title}>TODO's</Text>
          </View>
          <View style={styles.button_header} />
          <View style={styles.list1}>
            <FlatList
              data={Todos}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
        <View style={styles.inputtext_button}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.Taskwrapper}>
            <TextInput
              style={styles.textInput}
              placeholder={'write your task...'}
              value={AddData}
              // behavior={'padding'}
              onChangeText={text => setAddData(text)}
            />

            <TouchableOpacity onPress={() => addTodo()}>
              <View style={styles.Addtext}>
                <Text style={styles.button}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
