import { type SelectFileOutput, type SelectFileInput } from '../type';
import image from '../assets/image.svg';

interface Props {
	selectFile: ({ file }: SelectFileInput) => SelectFileOutput;
}

export const DragDropInput: React.FC<Props> = ({ selectFile }) => {
	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();

		selectFile({ file: event.dataTransfer.files[0] });
	};

	return (
		<div
			className="flex justify-center items-center flex-col border-blue-500 border border-dashed rounded-xl bg-blue-50 w-full p-10"
			onDrop={handleDrop}
			onDragOver={handleDragOver}
		>
			<img alt="upload" src={image} />
			<p className="text-gray-400">Drag & Drop your image here</p>
		</div>
	);
};
