import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import rootStore  from './rootStore'


render(
	<Provider store={rootStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);


