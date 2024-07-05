/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Manage from './src/screen/Manage';
import ReceptionReport from './src/screen/ReceptionReport';
AppRegistry.registerComponent(appName, () => ReceptionReport);
