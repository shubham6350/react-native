import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAED',
    height: '100%',
  },
  task_container: {
    justifyContent: 'space-around',
    height: '90%',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  task_title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Taskwrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: '80%',
  },
  Addtext: {
    width: 50,
    height: 50,
    backgroundColor: '#2596be',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  button: {
    fontSize: 30,
    color: '#fff',
  },
  model_content: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
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
    backgroundColor: '#2596be',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  Text_button: {
    color: 'white',
  },
  button_header: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  circ: {
    borderRadius: 5,
    width: 'auto',
    marginTop: 10,
    padding: 5,
    backgroundColor: '#2596be',
  },
  a_button: {
    fontWeight: 'bold',
    color: '#fff',
  },

  list1: {
    padding: 20,
    height: '90%',
    borderRadius: 5,
    width: '100%',
  },
  inputtext_button: {
    justifyContent: 'flex-end',
    padding: 5,
  },

  //task.js styling

  container_item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  item_1: {
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
    borderRadius: 5,
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
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#2596be',
    marginRight: 5,
  },
  button_c: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  text_style: {
    width: '70%',
  },
});
export default styles;
