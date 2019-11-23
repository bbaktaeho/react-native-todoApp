import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const TodoButton = ({onPress, complete, name}) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor="#efefef"
    style={styles.button}>
    {/* style 이 배열이라면 이 중 하나를 고를 수 있음. 인덱스 순서로 읽혀짐 */}
    <Text
      style={[
        styles.text,
        complete ? styles.complete : null,
        name === 'Delete' ? styles.deleteButton : null,
      ]}>
      {name}
    </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  text: {
    color: '#666666',
  },
  complete: {
    color: 'green',
    fontWeight: 'bold',
  },
  deleteButton: {
    color: 'rgba(175,47,47,1)',
  },
});

export default TodoButton;
