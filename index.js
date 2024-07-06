/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Manage from './src/screen/Manage';
import ReceptionReport from './src/screen/ReceptionReport';
import ReceptionInput from './src/screen/ReceptionInput';
import DateInput from './src/screen/DateInput';
AppRegistry.registerComponent(appName, () => DateInput);
