import "./globals.css";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => (
	<html lang="en">
		<head>
			<title>Category Page</title>
		</head>
		<body className="bg-gradient-to-b from-gray-300">{children}</body>
	</html>
);

export default Layout;
