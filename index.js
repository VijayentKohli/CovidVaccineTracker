/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { VaccineTracker } from './src/components/VaccineTracker';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => VaccineTracker);
