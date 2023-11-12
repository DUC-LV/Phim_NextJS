import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import BackDrop from './BackDrop';
import { Button, Flex, Text } from 'theme-ui';
import CheckboxNd13 from './CheckboxNd13';
import CheckboxNotSelect from '../assets/icon/CheckboxNotSelect.svg';
import ChecboxSelected from '../assets/icon/CheckboxSelected.svg';
import ChecboxMinus from '../assets/icon/CheckboxMinus.svg';
import { WrapperContext } from './Layout';

interface DataNd13 {
    showNd13?: boolean;
    dataNd13?: any;
}

const Nd13 = ({ showNd13, dataNd13 }: DataNd13) => {
	const { statusCheckbox, bgButton, setBgButton } = useContext(WrapperContext);
	// const [checkAll, setCheckAll] = useState(false);
	const [data, setData] = useState<any>();
	const [isCheck, setIsCheck] = useState([]);
	const [arr, setArr] = useState([]);

	const selectedCheckbox = () => {
		// console.log("arr", arr, dataNd13.listPolicy.map(e => e.id));
		
		if(arr.length === 0){
			setArr(dataNd13.listPolicy.map(e => e.id))
		} else {
			setArr([])
		}
	}

	// useEffect(() => {
	// 	setIsCheck(dataNd13?.listPolicy.map((item: any) => item.id));
	// }, [dataNd13?.listPolicy])

	// useEffect(() => {
	// 	if (checkAll === true) {
	// 		setBgButton('#ED2C25');
	// 	} else if (checkAll === false) {
	// 		setBgButton('#5F5F63');
	// 	}
	// }, [checkAll, setBgButton])

	const handleChange = (id: string, value: boolean) => {
		const arr = [];
		for (const a of data) {
			if (a.id !== id) {
				arr.push(a);
			} else {
				arr.push({...a, value: value});
			}
		}
	}
	const chooseCheckbox = (id) => {
		if(arr.includes(id)){
			setArr(arr.filter(e => e !== id))
		} else {
			setArr(arr.concat([id]))
		}
	}
	console.log(arr);

	const policyRequired = useMemo(() => dataNd13.listPolicy.filter(e => e.m === 1).map(e => e.id), [dataNd13.listPolicy])
	const enableButton = useMemo(() => policyRequired.every(e => arr?.includes(e)), [arr, policyRequired])
	
	console.log("policyRequired", policyRequired);
	

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
						justifyContent: 'space-between',
						background: '#141415',
						borderRadius: '16px',
					}}>
					<Flex sx={{ justifyContent: 'center' }}>
                        <Text as="h1" sx={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>
                            {dataNd13?.title}
                        </Text>
                    </Flex>
					<Flex sx={{ marginTop: '25px', marginBottom: '12px' }}>
						<Text as="h3" sx={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>
							{dataNd13.purposeActionText}
						</Text>
					</Flex>
					<Flex sx={{ overflow: 'auto', flexDirection: 'column' }}>
                        <Flex sx={{ flexDirection: 'column' }}>
                            {dataNd13?.listPolicy?.map((item: any, index: any) => {
                                return <CheckboxNd13
									key={index}
									listPolicy={item}
									checked={true}
									confirmText={dataNd13.warningUncheckText}
									arrId={item.id}
									chooseCheckbox={chooseCheckbox}
									arr={arr}
								/>;
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
							{
								dataNd13.listPolicy.length === arr.length ? 
								<Flex onClick={selectedCheckbox}><ChecboxSelected /></Flex> : 
								arr.length === 0 ? <Flex onClick={selectedCheckbox}><CheckboxNotSelect /></Flex> : <ChecboxMinus/>}
                                
                        </Flex>
                        <Flex sx={{ marginTop: '20px', justifyContent: 'center' }}>
                            <Button disabled={!enableButton} sx={{ cursor: 'pointer', backgroundColor: enableButton ? "red" : "" }}>Đồng ý</Button>
                        </Flex>
                    </Flex>
				</Flex>
			</Flex>
		</BackDrop>
	);
}

export default Nd13;