import { useCallback, useEffect, useState } from 'react';

import { uploadFileService } from '../services/file';
import { type SelectFileInput, type SelectFileOutput } from '../type';
import { IMAGE_FORMAT_ALLOWED, IMAGE_MAX_SIZE_ALLOWED } from '../constants';
import { Notification } from '../components/Notification';

export const useUpload = () => {
	const [file, setFile] = useState<File>();
	const [loading, setLoading] = useState(false);
	const [link, setLink] = useState('');

	const uploadFile = useCallback(async ({ file }: SelectFileInput) => {
		setLoading(true);

		try {
			const link = await uploadFileService({ file });
			setLink(link);
		} catch (error: any) {
			Notification.error(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	const selectFile = useCallback(({ file }: SelectFileInput): SelectFileOutput => {
		if (!file) {
			Notification.error('Need select a file');
			return true;
		}

		if (!IMAGE_FORMAT_ALLOWED.includes(file.type)) {
			Notification.error('Image format not supported');
			return true;
		}

		if (file.size > IMAGE_MAX_SIZE_ALLOWED * 1000 * 1024) {
			Notification.error(`Image size cannot exceed more than ${IMAGE_MAX_SIZE_ALLOWED}MB`);
			return true;
		}

		setFile(file);
	}, []);

	const resetLink = useCallback(() => {
		setLink('');
	}, []);

	useEffect(() => {
		if (!file) return;
		uploadFile({ file });
	}, [file, uploadFile]);

	return { loading, link, resetLink, selectFile };
};
