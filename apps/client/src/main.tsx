import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { Layout } from './layouts';

import './style/tailwind.css';
import { NotificationProvider } from './components/Notification';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<NotificationProvider />
		<Layout>
			<App />
		</Layout>
	</React.StrictMode>,
);
