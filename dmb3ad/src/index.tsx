import { render } from 'preact';

import './index.css';
import { Login } from './Login';
import { Main } from './Main';
import { useEffect, useState } from 'preact/hooks';
import { chatService } from './ChatService';

export function App() {
	let [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {

		const listener = () => setLoggedIn(!!chatService.inbox);
		chatService.addListener(listener);
		return () => chatService.removeListener(listener);
	}, []);

	return (
		loggedIn ? <Main /> : <Login />
	);
}

render(<App />, document.getElementById('app'));
