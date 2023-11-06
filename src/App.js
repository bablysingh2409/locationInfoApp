import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CodeCreate from './components/postalCodeCreate/CodeCreate';
import DisplayLocation from './components/displayLocation/DisplayLocation';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CodeCreate />
        <DisplayLocation />
      </Provider>
    </div>
  );
}

export default App;
