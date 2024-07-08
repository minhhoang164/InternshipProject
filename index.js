/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import Manage from './src/screen/Manage';
import Home from './src/screen/Home';
import DateReport from './src/screen/DateReport';
import Report from './src/screen/Report';
import ChupAnhBaoCaoNgay from './src/screen/ChupAnhBaoCaoNgay';
// import DateReportManage from './src/screen/DateReportManage';
import ImageUploadScreen from './src/screen/ImageUpLoadReport';
AppRegistry.registerComponent(appName, () => ImageUploadScreen);
