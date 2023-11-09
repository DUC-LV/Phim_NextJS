/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { Box } from "theme-ui";
import Header from "./Header";
import Nd13 from "./Nd13";

export interface Policy {
    pid?: number;
    desc?: string;
    m?: number;
}

interface DataNd13 {
    title: string;
    policyDefinition: string;
    confirmText: string;
    listPolicy: Policy[];
}

export const WrapperContext = createContext<any>({});

const Layout = ({ children }: React.PropsWithChildren<{}>) => {

	const data = {
        errorCode: '200',
        message: 'Thành công',
        data: {
            title: 'Văn bản chấp thuận về xử lý và bảo vệ dữ liệu cá nhân',
            policyDefinition: `Khách hàng đồng ý với Văn bản chấp thuận về xử lý và bảo vệ dữ liệu cá nhân (“Văn Bản”)`,
            confirmText: 'Tôi xác nhận đã đọc...',
            listPolicy: [
                { pid: 1, desc: '* Mục đích nâng cao chất lượng Sản phẩm', m: 1 },
                { pid: 2, desc: 'Tổ chức giới thiệu và xúc tiến thương mại', m: 0 },
                { pid: 3, desc: '* Mục đích cung cấp sản phẩm, hàng hoá dịch vụ ', m: 1 },
            ],
        },
    };

	const [showNd13, setShowNd13] = useState(false);
    const [dataNd13, setDataNd13] = useState<DataNd13>();
	const [showCheck, setShowCheck] = useState(false);
	const [checked, setChecked] = useState(false);
	const [bg, setbg] = useState('');

	useEffect(() => {
		setDataNd13(data.data);
	}, [])

	return(
		<WrapperContext.Provider value={{ checked, setChecked, bg, setbg, showCheck, setShowCheck }}>
			<Box>
				<Header />
				{children}
				<Nd13 showNd13={showNd13} dataNd13={dataNd13 ? dataNd13 : {}} />
			</Box>
		</WrapperContext.Provider>
	)
}
export default Layout;