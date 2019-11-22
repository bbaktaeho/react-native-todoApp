import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

// stateless 컴포넌트
// TextInput 의 selectionColor는 TextInput 의 커서 스타일을 지정
// props를 전달 props -> {inputValue, inputChange}
// TextInput 의 onChangeText 는 value가 변결될 때마다 호출됨, 변한 값도 확인하고 싶으면 메서드 자체에서 매개변수 하나만 만들어주자.
const Input = ({inputValue, inputChange}) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="what needs to be done?"
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
      onChangeText={inputChange}></TextInput>
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Input;
