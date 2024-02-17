import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/index';
import './public/stylesheet/main.css';
const store = createStore(reducer);
store.subscribe(() =>
    console.log(store.getState())
);
ReactDOM.createRoot(
	document.getElementById('root')
).render(
	<Provider store={store}>
		<App/>
	</Provider>
);
