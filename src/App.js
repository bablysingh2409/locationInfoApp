import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CodeCreate from './components/postalCodeCreate/CodeCreate';
import DisplayLocation from './components/displayLocation/DisplayLocation';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CodeCreate />
        <DisplayLocation />
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
