import styles from '../styles';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTodo,
  deleteTodo,
  completeTodo,
  editTodo,
  activeUser,
  completed,
  all,
  DeleteAll,
} from '../redux/actions/action';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Task from './task';

const Home = () => {
  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const [Modalopen, setModalopen] = useState(false);
  const [selecteditem, setSelectedItem] = useState([]);

  const [task, setTask] = useState('');

  const [newValue, setNewValue] = useState([]);

  const handleAddTask = () => {
    dispatch(addTodo(task));
    setTask('');
  };

  const update = i => {
    setModalopen(true);
    setNewValue({text: i.text, id: i.id});
  };

  const edit = e => {
    setModalopen(false);
    dispatch(editTodo(newValue));
  };
  const edithandler = event => {
    setNewValue(prev => ({...prev, text: event.nativeEvent.text}));
  };

  console.log(state);
  const renderItem = ({item}) => {
    return (
      <View>
        <Task
          id={item.id}
          completed={item.completed}
          text={item.text}
          completeTask={() => dispatch(completeTodo(item.id))}
          deleteTask={() => dispatch(deleteTodo(item.id))}
          update={() => {
            update(item);
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* model  */}
        <Modal
          visible={Modalopen}
          animationType={'slide'}
          transparent={true}
          selecteditem={selecteditem}>
          <View style={styles.main_view}>
            <View style={styles.child_view}>
              <View style={styles.model_content}>
                <TextInput
                  value={newValue.text}
                  placeholder="make changes here..."
                  onChange={edithandler}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  edit();
                }}>
                <View style={styles.model_button}>
                  <Text style={styles.Text_button}>save</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.task_container}>
          <View style={styles.title}>
            <Text style={styles.task_title}>TODO's</Text>
          </View>
          <View style={styles.button_header}>
            <TouchableOpacity
              onPress={() => {
                dispatch(activeUser());
              }}>
              <View style={styles.circ}>
                <Text style={styles.a_button}>Active</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(all());
              }}>
              <View style={styles.circ}>
                <Text style={styles.a_button}>All TODO</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(completed());
              }}>
              <View style={styles.circ}>
                <Text style={styles.a_button}>Completed</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(DeleteAll());
              }}>
              <View style={styles.circ}>
                <Text style={styles.a_button}>Delete All</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.list1}>
            <FlatList
              data={state}
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
              value={task}
              onChangeText={text => setTask(text)}
            />

            <TouchableOpacity onPress={() => handleAddTask()}>
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
export default Home;
