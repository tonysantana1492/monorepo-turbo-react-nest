import { type SelectFileOutput, type SelectFileInput } from '../type';
import { UploaderInput } from './UploaderInput';
import { DragDropInput } from './DragDropInput';
import { Loading } from './Loading';

interface Props {
	loading: boolean;
	selectFile: ({ file }: SelectFileInput) => SelectFileOutput;
}

export const UploadPhoto: React.FC<Props> = ({ loading, selectFile }) => {
	if (loading) {
		return <Loading />;
	}

	return (
		<div className="flex justify-center items-center flex-col gap-6 bg-white rounded-lg py-10 px-2 w-full max-w-screen-sm">
			<h1 className="font-semibold text-xl">Upload your image</h1>
			<p className="text-xs">File should be jpeg, png...</p>
			<form className="flex justify-center items-center flex-col gap-2 w-full">
				<DragDropInput selectFile={selectFile} />
				<p className="text-xs">Or</p>
				<UploaderInput selectFile={selectFile} />
			</form>
		</div>
	);
};
