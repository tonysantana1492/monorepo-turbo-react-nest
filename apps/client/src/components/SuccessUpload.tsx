import { useState } from 'react';
import { useLoadImage } from '../hooks';
import { ImageSkeletonScreen } from './ImageSkeletonScreen';
import { ArrowLeft } from './Icons';
import checked from '../assets/checked.png';

interface Props {
	link: string;
	resetLink: () => void;
}

export const SuccessUpload: React.FC<Props> = ({ link, resetLink }) => {
	const [isCopy, setCopy] = useState(false);

	const { loading } = useLoadImage({ link });

	const onCopyUrl = () => {
		navigator.clipboard.writeText(link);
		setCopy(true);
		setTimeout(() => setCopy(false), 1000);
	};

	return (
		<div className="relative flex justify-center items-center flex-col gap-8 bg-white rounded-lg py-8 px-10 w-full max-w-screen-sm">
			<div className="w-6 h-auto absolute top-5 left-5 cursor-pointer text-gray-800" onClick={resetLink}>
				<ArrowLeft />
			</div>

			<img alt="icon-success" src={checked} className="w-8 h-auto"></img>
			<h1 className="font-medium text-lg">Upload Successfully!</h1>

			{loading ? (
				<ImageSkeletonScreen />
			) : (
				<img
					alt="something that was uploaded"
					className="rounded-xl w-full h-44 object-contain"
					src={link}
				></img>
			)}
			<div className="flex justify-between items-center gap-4 bg-blue-50 border border-gray-300 rounded-lg px-1 w-full max-w-full">
				<p className="px-2 overflow-hidden whitespace-nowrap">{link}</p>
				<button onClick={onCopyUrl} className="button whitespace-nowrap">
					{isCopy ? 'Copied!' : 'Copy Link'}
				</button>
			</div>
		</div>
	);
};
