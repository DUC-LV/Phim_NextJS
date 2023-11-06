import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Checkbox, Text, Box, Grid } from 'theme-ui';
import { WrapperContext } from './Layout';

export interface DataCheckBox {
    pid?: number;
    desc?: string;
    m?: number;
}

interface Ex {
    dataCheckBox: DataCheckBox;
}

const CheckBox = ({ dataCheckBox }: Ex) => {
	const { check, setCheck } = useContext(WrapperContext);

	const [checked, setChecked] = useState(!check);
    const [showMs, setShowMs] = useState(false);
	const [bg, setbg] = useState('');

	// const selectCheckBox = () => {
	// 	setChecked(!checked);
	// 	if (dataCheckBox.m === 1 && checked === true) {
	// 		setbg('#28282A');
	// 		setCheck(true);
	// 	} else if (dataCheckBox.m === 0) {
	// 		setbg('');
	// 	} else if (checked === false) {
	// 		setbg('');
	// 	}
	// }


	const selectCheckBox = useCallback(() => {
		setChecked(!checked);
		if (dataCheckBox.m === 1 && checked === true) {
			setbg('#28282A');
		} else if (dataCheckBox.m === 0) {
			setbg('');
			setCheck(false);
		} else if (checked === false) {
			setbg('');
		}
	}, [checked, dataCheckBox.m, setCheck])

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
					background: bg
                }}>
                <Box onClick={selectCheckBox}>
                    {checked ? <Checkbox defaultChecked={false} value={dataCheckBox.pid} /> : <Checkbox defaultChecked={true} />}
                </Box>
                <Box sx={{ marginLeft: '20px' }}>
                    <Text sx={{ fontSize: '16px', fontWeight: 400, color: 'white', lineHeight: '22px' }}>
                        {dataCheckBox.desc}
                    </Text>
                </Box>
            </Grid>
            {showMs && <Text>Điều kiện bắt buộc chọn để Viettel cung cấp dịch vụ</Text>}
        </>
    );
};

export default CheckBox;
