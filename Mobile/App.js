
import { Provider} from 'react-redux';
import store from './src/redux/store.js';
import AuthNavigation from './src/navigation/AuthNavigation';
import { LogBox } from 'react-native';
import * as Linking from 'expo-linking';

const prefix = Linking.createURL('app://'); 
export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  const linking = {
    prefixes: [prefix],
  };

  return (
    <Provider store={store}>
      <AuthNavigation linking={linking}/>
    </Provider>
  );
}