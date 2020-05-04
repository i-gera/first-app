import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store.js';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';



ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
			<App />
			</Provider>
		</BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();
