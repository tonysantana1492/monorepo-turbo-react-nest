export const Loading: React.FC = () => {
	return (
		<div className="flex justify-start items-start flex-col gap-6 bg-white rounded-lg p-8 w-full max-w-screen-sm">
			<p className="font-semibold">Uploading...</p>
			<div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
				<div className="w-40 bg-blue-400 h-2 rounded-full animate-horizontal"></div>
			</div>
		</div>
	);
};
