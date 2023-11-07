import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Checkbox, Flex, Text } from 'theme-ui';
import BackDrop from '../component/BackDrop';
import CheckBox from '../component/CheckBox';
import { WrapperContext } from '../component/Layout';

const NDPage = () => {
    const data = [
        {
            pid: 1,
            desc: `* Cung cấp Sản phẩm, hàng hóa, dịch vụ cho Khách hàng theo Hợp đồng và thực hiện quyền,
            nghĩa vụ của Viettel theo quy định pháp luật,bao gồm nhưng không giới hạn`,
            m: 1,
        },
        {
            pid: 2,
            desc: `* Hỗ trợ Khách hàng khi mua, sử dụng Sản phẩm,
            hàng hóa,dịch vụ do Viettel cung cấp theo hợp đồng và quy định pháp luật`,
            m: 1,
        },
        {
            pid: 3,
            desc: '* Nâng cao chất lượng Sản phẩm, hàng hóa, dịch vụ mà Viettel cung cấp cho Khách hàng',
            m: 1,
        },
        {
            pid: 4,
            desc: `Kinh doanh dịch vụ tiếp thị, quảng cáo, giới thiệu sản phẩm phù hợp với nhu cầu của Khách hàng hoặc
            Viettel cho rằng Khách hàng quan tâm theo nội dung, hình thức, tần suất`,
            m: 0,
        },
        {
            pid: 5,
            desc: 'Kinh doanh dịch vụ nghiên cứu thị trường, thăm dò dư luận, môi giới',
            m: 0,
        },
        {
            pid: 6,
            desc: 'Tổ chức giới thiệu và xúc tiến thương mại.',
            m: 0,
        },
    ];

	const [checked, setChecked] = useState(false);
	const [bg, setbg] = useState('');

	const handleCheck = useCallback(() => {
		setChecked(!checked);
	}, [checked])

	useEffect(() => {
		if (checked === true) {
			setbg('red');
		}else {
			setbg('')
		}
	}, [checked])

    return (
        <BackDrop hidden={false}>
            <Flex
                sx={{
                    // visibility: !isShow ? 'hidden' : 'visible',
                    // opacity: !isShow ? 0 : 1,
                    transition: '400ms',
                    borderRadius: '16px',
                    backgroundColor: '#141415',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    p: '20px',
                    width: '755px',
                }}>
                <Flex
                    sx={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: '#141415',
                        borderRadius: '16px',
                    }}>
                    <Flex sx={{ justifyContent: 'center' }}>
                        <Text as="h1" sx={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>
                            Văn bản chấp thuận về xử lý và bảo vệ dữ liệu cá nhân
                        </Text>
                    </Flex>
                    <Flex
                        className="nd13"
                        sx={{ overflow: 'auto', height: '535px', flexDirection: 'column', marginTop: '20px' }}>
                        {/* <Text
                            sx={{
                                fontSize: '16px',
                                fontWeight: 400,
                                color: 'white',
                                whiteSpace: 'break-spaces',
                                textOverflow: 'ellipsis',
                            }}>
                            {txt}
                        </Text> */}
                        <Text sx={{ fontSize: '17px', fontWeight: 700, color: 'white', marginY: '5px' }}>
                            Mục đích xử lí
                        </Text>
                        <Flex sx={{ flexDirection: 'column' }}>
                            {data.map(item => {
                                return <CheckBox key={item.pid} dataCheckBox={item} checked={checked} />;
                            })}
                        </Flex>
                    </Flex>
                    <Flex
                        sx={{
                            borderTop: '1px solid #464649',
                            marginTop: '20px',
                            flexDirection: 'column',
                            width: '100%',
                        }}>
                        <Flex sx={{ marginTop: '20px', alignItems: 'center' }}>
                            <Flex onClick={handleCheck}>
                                { checked ? <Checkbox defaultChecked={true}/> : <Checkbox defaultChecked={false}/> }
                            </Flex>
                            <Flex>
                                <Text sx={{ fontSize: '14px', fontWeight: 400, color: 'white' }}>
                                    Tôi xác nhận mình đã đọc, hiểu và đồng ý toàn bộ nội dung của Chính sách BVDLCN của
                                    Viettel
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex sx={{ marginTop: '20px', justifyContent: 'center' }}>
                            <Button sx={{ cursor: 'pointer', background: bg }}>Đồng ý</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </BackDrop>
    );
};

export default NDPage;