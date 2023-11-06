import React, { createContext, useState } from "react";
import { Box } from "theme-ui";
import Header from "./Header";

export const WrapperContext = createContext<any>({});

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
	const [check, setCheck] = useState(false);
    const [showMs, setShowMs] = useState(false);
	const [bg, setbg] = useState('');

	return(
		<WrapperContext.Provider value={{ check, setCheck, showMs, setShowMs, bg, setbg}}>
			<Box>
				<Header />
				{children}
			</Box>
		</WrapperContext.Provider>
	)
}
export default Layout;