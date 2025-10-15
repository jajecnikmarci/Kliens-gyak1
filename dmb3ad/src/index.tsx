import { render } from 'preact';

import './index.css';
import { Login } from './login';

export function App() {
	return (
		<Login/>
	);
}

render(<App />, document.getElementById('app'));
