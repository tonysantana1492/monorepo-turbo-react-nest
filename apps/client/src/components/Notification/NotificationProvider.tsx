import { Toaster } from 'react-hot-toast';

export const NotificationProvider = () => {
	return (
		<Toaster
			toastOptions={{
				className: 'text-sm font-medium',
			}}
		/>
	);
};
