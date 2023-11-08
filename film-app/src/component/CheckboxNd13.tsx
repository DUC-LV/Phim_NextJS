import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Box, Checkbox, Grid, Text } from 'theme-ui';
// import CheckBoxNoSelect from 'assets/icons/checkbox-no-select.svg';
import { Policy, WrapperContext } from './Layout';
// import CheckBoxSelected from 'assets/icons/checkbox-selected.svg';
import { BsCheckSquare } from 'react-icons/bs';

interface Data {
    dataPolicy: Policy;
	checked: boolean;
}

const CheckboxNd13 = ({ dataPolicy, checked }: Data) => {
	const [check, setCheck] = useState(false);
	const [showMs, setShowMs] = useState(false);
	const { setChecked, bg, setbg, showCheck, setShowCheck } = useContext(WrapperContext);

	useEffect(() => {
		if (checked === true) {
			setCheck(true);
		}else if (checked === false) {
			setCheck(false);
		}
	}, [checked])

	const handle = useCallback(() => {
		setCheck(!check);
		if (checked === true && dataPolicy.m === 1 && check === true) {
			setbg('');
			setShowCheck(true);
			setShowMs(true);
		} else if (checked === true && dataPolicy.m === 1 && check === false) {
			setbg('red');
			setShowCheck(false);
			setShowMs(false);
		} else if (checked === true && dataPolicy.m === 0 && check === true) {
			setbg('red');
			setShowCheck(true);
		} else if (checked === true && dataPolicy.m === 0 && check === false) {
			setbg('red');
			setShowCheck(false);
		}
	}, [check, checked, dataPolicy.m, setShowCheck, setbg])

	useEffect(() => {
		if (checked === false && check === true && dataPolicy.m === 1) {
			setbg('red');
			setShowCheck(true);
		} else if (checked === false && check === false && dataPolicy.m === 1) {
			setbg('');
			setShowCheck(false);
		}
		else if (checked === false && check === true && dataPolicy.m === 0) {
			setbg('');
			setShowCheck(true);
		}
		else if (checked === false && check === false && dataPolicy.m === 0) {
			setbg('');
			setShowCheck(false);
		}
	}, [check, checked, dataPolicy.m, setShowCheck, setbg])

	// const handle = () => {
	// 	setCheck(!check);
	// 	if (checked === true && dataPolicy.m === 1 && check === true) {
	// 		setbg('');
	// 		setShowCheck(true);
	// 	} else if (checked === true && dataPolicy.m === 1 && check === false) {
	// 		setbg('red');
	// 		setShowCheck(false);
	// 	} else if (checked === true && dataPolicy.m === 0 && check === true) {
	// 		setbg('red');
	// 		setShowCheck(true);
	// 	} else if (checked === true && dataPolicy.m === 0 && check === false) {
	// 		setbg('red');
	// 		setShowCheck(false);
	// 	}
	// }

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
                    marginY: '5px',
                    // background: bg,
                }}>
                <Box onClick={handle}>
					{check ? <BsCheckSquare style={{ height: '20px', width: '20px', background: 'white' }}/> : <Checkbox defaultChecked={false} /> }
                </Box>
                <Box sx={{ marginLeft: '20px' }}>
                    <Text sx={{ fontSize: '16px', fontWeight: 400, color: 'white', lineHeight: '22px' }}>
                        {dataPolicy.desc}
                    </Text>
                </Box>
            </Grid>
			{showMs && <Text sx={{ fontSize: '14px', fontWeight: 400, color: '#ED2C25' }}>Điều kiện bắt buộc chọn để Viettel cung cấp dịch vụ</Text> }
        </>
    );
};

export default CheckboxNd13;