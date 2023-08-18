interface Props {
	children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
	return <main className="bg-gray-100 flex justify-center items-center min-h-screen">{children}</main>;
};
