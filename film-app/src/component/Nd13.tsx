import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Checkbox, Flex, Text } from 'theme-ui';
import CheckboxNd13 from './CheckboxNd13';
import BackDrop from './BackDrop';
import { WrapperContext } from './Layout';
import { AiFillMinusSquare } from 'react-icons/ai';

interface DataNd13 {
    showNd13?: boolean;
    dataNd13?: any;
}

const Nd13 = ({ showNd13, dataNd13 }: DataNd13) => {
	const { checked, setChecked, bg, setbg, showCheck, setShowCheck } = useContext(WrapperContext);

	const handleCheck = useCallback(() => {
		setChecked(!checked);
	}, [checked, setChecked])

	useEffect(() => {
		if (checked === true) {
			setbg('red');
		}else {
			setbg('')
		}
	}, [checked, setbg])

    return (
        <BackDrop hidden={showNd13}>
            <Flex
                sx={{
                    // visibility: !showNd13 ? 'hidden' : 'visible',
                    // opacity: !showNd13 ? 0 : 1,
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
                            {dataNd13?.title}
                        </Text>
                    </Flex>
                    <Flex sx={{ overflow: 'auto', flexDirection: 'column', marginTop: '20px' }}>
                        <Text
                            sx={{
                                fontSize: '16px',
                                fontWeight: 400,
                                color: 'white',
                                whiteSpace: 'break-spaces',
                                textOverflow: 'ellipsis',
                            }}>
                            {dataNd13?.policyDefinition}
                        </Text>
                        <Flex sx={{ flexDirection: 'column' }}>
                            {dataNd13?.listPolicy?.map((item: any) => {
                                return <CheckboxNd13 key={item.pid} dataPolicy={item} checked={checked} />;
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
							{ showCheck ?
							<Flex>
								<AiFillMinusSquare style={{ height: '20px', width: '20px', background: 'white' }} />
							</Flex> :
							<Flex onClick={handleCheck}>
                                { checked ? <Checkbox defaultChecked={true}/> : <Checkbox defaultChecked={false} /> }
                            </Flex> }
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

export default Nd13;
