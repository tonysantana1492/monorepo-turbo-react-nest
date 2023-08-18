import { useEffect, useState } from 'react';

interface Props {
	link: string;
}

export const useLoadImage = ({ link }: Props) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const image = new Image();

		image.onload = () => {
			setLoading(false);
		};

		image.src = link;
	}, [link]);

	return { loading };
};
