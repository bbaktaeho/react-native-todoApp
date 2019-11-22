import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

// ./app 의 컴포넌트들
import Heading from './app/Heading';
import Input from './app/Input';
import Button from './app/Button';
import TodoList from './app/TodoList';
import TabBar from './app/TabBar';

// 전역 변수
let todoIndex = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    // 메서드를 생성자 내 클래스에 바인딩, 클래스를 사용하고 있으면 메서드는 클래스에 자동으로 바인딩되지 않음
    // 바인딩 하는 이유는 함수가 복사될 때 this 의 관계가 모호해지기 때문에
    // 애초에 arrow function 으로 선언되었으면 bind는 필요 없음
    /**this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);*/
  }
  inputChange = inputValue => {
    console.log('input value: ', inputValue);
    // setState 메서드는 재 렌더링 메서드
    this.setState({inputValue});
  };
  submitTodo = () => {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({todos: todos, inputValue: ''}, () => {
      console.log('state: ', this.state);
    });
  };
  toggleComplete = todoIndex => {
    let todos = this.state.todos;
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({todos: todos});
  };
  deleteTodo = todoIndex => {
    let {todos} = this.state;
    todos = todos.filter(todo => {
      return todo.todoIndex !== todoIndex; // 전달 받은 todoIndex 와 다른 todoIndex 만 모아서 반환
    });
    this.setState({todos: todos}); // {todos} 로 생략 가능
  };
  setType = type => {
    console.log('App.js 에서 setType 호출');

    this.setState({type});
  };

  /**
   * 렌더링
   */
  render() {
    console.log('render 호출!');

    // state 를 구조분해 할당
    const {inputValue, todos, type} = this.state;

    return (
      <View style={styles.container}>
        {/* keyboardShouldPersistTaps 속성은 키포드가 열려 있으면 닫아서 ui 가 onPress 이벤트를 모두 처리하게 함 */}
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading></Heading>
          {/* state의 inputValue를 Input 컴포넌트에 props로 전달 */}
          {/* inputChange를 Input 컴포넌트에 props로 전달 */}
          <Input
            inputValue={inputValue}
            inputChange={value => this.inputChange(value)}></Input>
          <TodoList
            type={type}
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}></TodoList>
          <Button submitTodo={this.submitTodo}></Button>
        </ScrollView>
        <TabBar type={type} setType={this.setType}></TabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
