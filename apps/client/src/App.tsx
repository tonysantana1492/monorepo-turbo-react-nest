import React from 'react';

import { SuccessUpload, UploadPhoto } from './components';
import { useUpload } from './hooks';

export const App: React.FC = () => {
	const { loading, link, resetLink, selectFile } = useUpload();

	if (link) return <SuccessUpload link={link} resetLink={resetLink} />;

	return <UploadPhoto loading={loading} selectFile={selectFile} />;
};
