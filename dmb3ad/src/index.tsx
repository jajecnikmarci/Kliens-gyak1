import { render } from 'preact';

import './index.css';
import { Login } from './Login';
import { Main } from './Main';
import { useEffect, useState } from 'preact/hooks';
import { chatService } from './ChatService';
import "./Pwa" ;

export function App() {
	//let [loggedIn, setLoggedIn] = useState(false);
	let [renderCount, setRenderCount] = useState(1);
	useEffect(() => {

		const listener = () => setRenderCount(c => c + 1);
		chatService.addListener(listener);
		return () => chatService.removeListener(listener);
	}, []);

	return (
		chatService.inbox ? <Main /> : <Login />
	);
}

render(<App />, document.getElementById('app'));

// Push notification engedély kérése
Notification.requestPermission();
