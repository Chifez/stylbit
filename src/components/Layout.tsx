import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-primary min-h-screen text-white">
			<Header />
			<div className="min-h-[40vh]">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
