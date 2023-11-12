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
		errorCode: 201,
		message: "Thành công.",
		data: {
			listPolicy: [
				{
					id: 3,
					desc: "Cung cấp Sản phẩm, hàng hoá, dịch vụ cho Khách hàng theo Hợp đồng và thực hiện quyền, nghĩa vụ của Viettel theo quy định pháp luật, bao gồm nhưng không giới hạn",
					m: 1,
				},
				{
					id: 4,
					desc: "Hỗ trợ Khách hàng khi mua, sử dụng Sản phẩm, hàng hoá, dịch vụ do Viettel cung cấp theo Hợp đồng và quy định của pháp luật",
					m: 1,
				},
				{
					id: 5,
					desc: "Nâng cao chất lượng Sản phẩm, hàng hoá, dịch vụ mà Viettel cung cấp cho khách hàng",
					m: 1,
				},
				{
					id: 6,
					desc: `Kinh doanh dịch vụ tiếp thị, quảng cáo, giới thiệu sản phẩm phù hợp với nhu cầu của Khách hàng hoặc Viettel cho rằng Khách hàng quan tâm theo nội dung, hình thức, tần suất`,
					m: 0,
				},
				{
					id: 7,
					desc: "Kinh doanh dịch vụ nghiên cứu thị trường, thăm dò dư luận, môi giới",
					m: 0,
				},
				{
					id: 8,
					desc: "Tổ chức giới thiệu và xúc tiến thương mại",
					m: 0,
				},
			],
			confirmText: "Tôi xác nhận mình đã đọc, hiểu và đồng ý toàn bộ nội dung của Chính sách BVDLCN của Viettel",
			policyDefinition: "Khách hàng đồng ý với Văn bản chấp thuận về xử lý và bảo vệ dữ liệu cá nhân (\"Văn bản\") do Viettel xây dựng để quy định về xử lý Dữ liệu cá nhân và trách nhiệm bảo vệ Dữ liệu cá nhân của Viettel với nội dung sau:\\n\\nĐIỀU 1: ĐỊNH NGHĨA\\n Viettel: là Tập đoàn Công nghiệp - Viễn thông Quân Đội ...\\nKhách hàng\/Quý khách: là (i) cá nhận và hoặc (ii) tổ chức có cung cấp dữ liệu cá nhân...\\nDữ liệu cá nhân: là thông tin dưới dạng kí hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử...\\n Dữ liệu cá nhân cơ bản là những thông tin gồm:\\n(i)Họ, chữ đêm và tên khai sinh, tên gọi khác (nếu có);\\n(ii)Ngày, tháng, năm sinh;\\n(iii)Giới tính;\\n(iv)Nơi sinh, nơi...\\n(v)Quốc tịch;\\n\\n ĐIỀU 2: đây là điều 2",
			purposeActionText: "Mục đích xử lý",
			title: "Văn bản chấp thuận về xử lý và bảo vệ dữ liệu cá nhân",
			warningUncheckText: "Điều kiện bắt buộc chọn để Viettel cung cấp dịch vụ",
		}
	}

	const [showNd13, setShowNd13] = useState(false);
	const [statusCheckbox, setStatusCheckbox] = useState(true);
	const [bgButton, setBgButton] = useState('');

	return(
		<WrapperContext.Provider value={{ statusCheckbox, setStatusCheckbox, bgButton, setBgButton }}>
			<Box>
				<Header />
				{children}
				<Nd13 showNd13={showNd13} dataNd13={data.data} />
			</Box>
		</WrapperContext.Provider>
	)
}
export default Layout;