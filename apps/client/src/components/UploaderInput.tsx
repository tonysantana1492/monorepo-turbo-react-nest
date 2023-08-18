import { useId, useRef } from 'react';
import { IMAGE_FORMAT_ALLOWED } from '../constants';
import { type SelectFileOutput, type SelectFileInput } from '../type';

interface Props {
	selectFile: ({ file }: SelectFileInput) => SelectFileOutput;
}

export const UploaderInput: React.FC<Props> = ({ selectFile }) => {
	const inputPhotoId = useId();
	const inputFileRef = useRef<HTMLInputElement>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files || !event.target.value) return;

		const error = selectFile({ file: event.target.files[0] });

		if (inputFileRef.current && error) {
			inputFileRef.current.value = '';
		}
	};

	return (
		<>
			<input
				name="file"
				className="hidden"
				ref={inputFileRef}
				type="file"
				accept={IMAGE_FORMAT_ALLOWED.toString()}
				id={inputPhotoId}
				onChange={handleChange}
			/>
			<label className="button" htmlFor={inputPhotoId}>
				Choose a file
			</label>
		</>
	);
};
