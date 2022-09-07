/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Modal,
} from 'react-native';
import Task from './Components/task';

export default function App() {
  const [button, setbutton] = useState('');
  const [buttonArray, setbuttonArray] = useState();
  const [Modalopen, setModalopen] = useState(false);
  const [selecteditem, setSelectedItem] = useState([]);

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      name: 'task1',
      isDone: false,
    },
    {
      id: 2,
      name: 'task2',
      isDone: false,
    },
    {
      id: 3,
      name: 'task3',
      isDone: false,
    },
  ]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, {id: new Date(), name: task, isDone: false}]);
    setTask(null);
  };
  const completeTask = id => {
    const filteredArray = taskItems.filter(item => item.id !== id);
    setTaskItems(filteredArray);
  };
  const doneTask = i => {
    const newArray = taskItems.map(item => {
      if (item.id === i) {
        return {...item, isDone: !item.isDone};
      }
      return item;
    });

    setTaskItems(newArray);
  };

  const edit = i => {
    setbuttonArray(i);
    setModalopen(true);
  };
  const update = i => {
    const newArray = taskItems.map(item => {
      if (item.id === i) {
        return {...item, name: button};
      }
      return item;
    });
    setTaskItems(newArray);
    setbutton(' ');

    setModalopen(false);
  };

  return (
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
                value={buttonArray}
                placeholder="make changes here..."
                onChangeText={text => setbutton(text)}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                update(buttonArray);
              }}>
              <View style={styles.model_button}>
                <Text style={styles.Text_button}>save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.task_container}>
        <Text style={styles.task_title}>Today's task</Text>
        <ScrollView>
          <View style={styles.items}>
            {taskItems.map(item => {
              return (
                <>
                  <View key={item.id}>
                    <Task
                      isDone={item.isDone}
                      text={item.name}
                      completeTask={() => completeTask(item.id)}
                      doneTask={() => doneTask(item.id)}
                      edit={() => {
                        edit(item.id);
                      }}
                    />
                  </View>
                </>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.Taskwrapper}>
        <TextInput
          style={styles.textInput}
          placeholder={'write your task'}
          value={task}
          onChangeText={text => setTask(text)}></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.Addtext}>
            <Text style={styles.button}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  task_container: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  task_title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
    height: 550,
  },
  Taskwrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
  },
  Addtext: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  button: {
    fontSize: 30,
  },
  model_content: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  model_button: {
    marginTop: 5,
    borderWidth: 2,
    borderRadius: 6,
    padding: 5,
    backgroundColor: '#0000FF',
    borderColor: 'black',
  },
  main_view: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  child_view: {
    padding: 20,
    backgroundColor: '#7E99FF',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  Text_button: {
    color: 'white',
  },
});
