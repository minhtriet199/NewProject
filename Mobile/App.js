
import { Provider} from 'react-redux';
import store from './src/redux/store.js';
import AuthNavigation from './src/navigation/AuthNavigation';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <AuthNavigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
