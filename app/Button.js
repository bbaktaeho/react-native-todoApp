import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

// TouchableHeighlight 컴포넌트에 터치 하면 backgroundColor는 지정된 underlayColor로 바뀌며 props로 지정함
const Button = ({submitTodo}) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor="#efefef"
      style={styles.button}
      onPress={submitTodo}>
      <Text style={styles.submit}>Submit</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(2,2,2,.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});

export default Button;
