/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import Manage from './src/screen/Manage';
import Home from './src/screen/Home';
import DateReport from './src/screen/DateReport';
AppRegistry.registerComponent(appName, () => DateReport);
