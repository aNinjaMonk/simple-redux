import { AppRegistry } from 'react-native';
import App from './components/App';
import { Navigation } from 'react-native-navigation';

Navigation.registerComponent('main', () => App);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'main',
    title: 'Todos',
    navigatorStyle: {

    },
    navigatorButtons: {}
  }
});
