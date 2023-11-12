import React, { useCallback, useContext, useEffect, useState } from "react";
import { Box, Grid, Text } from "theme-ui";
import CheckboxNotSelect from '../assets/icon/CheckboxNotSelect.svg';
import ChecboxSelected from '../assets/icon/CheckboxSelected.svg';
import { WrapperContext } from "./Layout";

interface Data {
    listPolicy: any;
	checked: boolean;
	confirmText: string;
	arrId?: any;
	chooseCheckbox: (id: number) => void;
	arr: number[]
}

const CheckboxNd13 = ({ listPolicy, checked , confirmText, arrId, chooseCheckbox, arr}: Data) => {
	const { setStatusCheckbox, setBgButton } = useContext(WrapperContext);
	const [check, setCheck] = useState(checked);
	const [bgBox, setBgBox] = useState('');
	const [colorBorderBox, setColorBorderBox] = useState('');
	const [showMs, setShowMs] = useState(false);

	// console.log(arrId);

	useEffect(() => {
		if (checked === true) {
			setCheck(true);
		} else if (checked === false) {
			setCheck(false);
		}
	}, [checked])

	useEffect(() => {
		if (check === true && listPolicy.m === 1 ) {
			setBgBox('#28282A');
		} else if (check === false) {
			setBgBox('');
		}
	}, [check, listPolicy.m])

	

	// const chooseCheckbox = useCallback(() => {
	// 	setCheck(!check)
	// 	if (checked === true) {
	// 		if (check === true) {
	// 			setStatusCheckbox(false);
	// 			if (listPolicy.m === 1) {
	// 				setShowMs(true);
	// 				setBgButton('#5F5F63');
	// 			}
	// 		} else if (check === false) {
	// 			setStatusCheckbox(true);
	// 			if (listPolicy.m === 1) {
	// 				setShowMs(false);
	// 				setBgButton('#ED2C25');
	// 			}
	// 		}
	// 	} else if (checked === false) {
	// 		if (listPolicy.m === 1) {
	// 			if (check === false) {
	// 				setArr(arr.concat([listPolicy.id]))
	// 			}
			// 	if (check === false) {
			// 		setBgButton('#ED2C25');
			// 		setStatusCheckbox(false);
			// 	} else if (check === true) {
			// 		setStatusCheckbox(true);
			// 		setBgButton('#5F5F63');
			// 	}
			// } else if (listPolicy.m === 0) {
			// 	setBgButton('#5F5F63');
			// 	if (check === false) {
			// 		setStatusCheckbox(false);
			// 	} else if (check === true) {
			// 		setStatusCheckbox(true);
			// 	}
			// }
		// }
	// }, [arr, check, checked, listPolicy.id, listPolicy.m, setBgButton, setStatusCheckbox]);

	// console.log(arr);

	// let arr1 = [1, 2, 3];
	// let arr2 = [2, 3];

	// let isFound = arr1.some( ai => arr2.includes(ai) );

	// console.log(isFound);

	// && listPolicy.id === 3 && listPolicy.id === 4 && listPolicy.id === 5

	return (
		<>
			<Grid
                columns={[2, '0fr 1fr']}
                sx={{
                    width: '99%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #464649',
                    alignItems: 'center',
                    marginY: '6px',
					backgroundColor: bgBox,
                }}>
                <Box onClick={() => chooseCheckbox(arrId)} sx={{ width: '24px' }}>
					{ arr?.includes(arrId) ? <ChecboxSelected /> : <CheckboxNotSelect /> }
                </Box>
                <Box>
                    <Text sx={{ fontSize: '16px', fontWeight: 400, color: 'white' }}>
                        {listPolicy.desc}
                    </Text>
                </Box>
            </Grid>
			{ showMs && <Text sx={{ fontSize: '16px', fontWeight: 400, color: '#ED2C25'}}>{confirmText}</Text> }
		</>
	);
}

export default CheckboxNd13;