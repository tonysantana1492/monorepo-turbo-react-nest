import { type SelectFileInput } from '../type';

const URL = 'http://localhost:5000/api/v1/upload/cloudinary';

export const uploadFileService = async ({ file }: SelectFileInput): Promise<string> => {
	const formData = new FormData();
	formData.append('file', file);

	try {
		const response = await fetch(URL, {
			method: 'POST',
			body: formData,
		});

		if (!response.ok) {
			throw new Error('Bad request');
		}

		const { url } = await response.json();

		return url;
	} catch (error: any) {
		throw new Error('Server is not available');
	}
};
