import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// stateless 컴포넌트
// return 을 명시하지 않을 경우 {} 중괄호를 지정하면 안됨
const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Done하자</Text>
  </View>
);

// rgba 는 rgb 값과 마지막엔 불투명도 값을 나타냄
const styles = StyleSheet.create({
  header: {
    marginTop: 80,
    marginBottom: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175,47,47,0.25)',
    fontWeight: '100',
  },
});

export default Heading;
