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
import Task from '../components/task';
import {firebase, firestore} from '../../SetUp';

const HomeScreen = () => {
  const [Todos, setTodos] = useState([]);
  const TodoRef = firebase.firestore().collection('Todos');
  const [AddData, setAddData] = useState('');
  useEffect(() => {
    const subcriber = firestore()
      .collection('Todos')
      .onSnapshot(querysnapshot => {
        const TodoList = [];
        querysnapshot.forEach(ele => {
          TodoList.push({
            data: ele.data(),
            id: ele.id,
          });
        });
        setTodos(TodoList);
      });

    return () => subcriber();
  }, []);

  const addTodo = () => {
    if (AddData && AddData.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      let data = {
        heading: AddData,
        createdAt: timestamp,
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
  const completeTodo = item => {
    TodoRef.doc(item.id)
      .update({
        completed: item.completed === 'true' ? 'false' : 'true',
      })
      .then(() => {
        alert('completed Successfully');
      })
      .catch(error => {
        alert('error');
      });
  };

  const deleteTodo = todo => {
    TodoRef.doc(todo.id)
      .delete()
      .then(() => alert('Deleted Successfully'))
      .catch(error => {
        alert(error);
      });
  };
  // };
  const renderItem = ({item}) => {
    return (
      <View>
        <Task
          item={item}
          completeTask={() => completeTodo(item)}
          deleteTask={() => deleteTodo(item)}
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
          <View style={styles.button_header}></View>
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
              behavior={'padding'}
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
