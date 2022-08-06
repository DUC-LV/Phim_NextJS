import React from "react";
import { Box } from "theme-ui";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
	return(
		<Box>
			<Header />
			{children}
		</Box>
	)
}
export default Layout;