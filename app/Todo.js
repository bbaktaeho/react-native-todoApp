import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import TodoButton from './TodoButton';

// stateless 컴포넌트
// 매개변수로 받는 것은 props, 즉 {todo} 는 props로 받아온 객체
// Text 컴포넌트에 title을 렌더링
const Todo = ({todo, toggleComplete, deleteTodo}) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoTExt}>{todo.title}</Text>
    <View style={styles.button}>
      <TodoButton
        name="Done"
        complete={todo.complete}
        onPress={() => {
          toggleComplete(todo.todoIndex);
        }}></TodoButton>
      <TodoButton
        name="Delete"
        onPress={() => {
          deleteTodo(todo.todoIndex);
        }}></TodoButton>
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoTExt: {
    fontSize: 17,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Todo;
