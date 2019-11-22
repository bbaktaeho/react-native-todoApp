/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry 클래스의 메서드에서 앱이 시작됨
AppRegistry.registerComponent(appName, () => App);
