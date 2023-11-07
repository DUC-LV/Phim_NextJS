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
	checked?: boolean;
}

const CheckBox = ({ dataCheckBox, checked }: Ex) => {
	const [check, setCheck] = useState(false);
	const [bg, setbg] = useState('');
	const [showMs, setShowMs] = useState(false);

	useEffect(() => {
		if (checked === true) {
			setCheck(true);
		}else if (checked === false) {
			setCheck(false);
		}
	}, [checked])

	useEffect(() => {
		if (checked === true && dataCheckBox.m === 1) {
			setbg('#28282A');
		} else if (checked === true && dataCheckBox.m === 0) {
			setbg('');
		} else if (checked === false) {
			setbg('');
		}
	}, [checked, dataCheckBox.m])

	const handle = () => {
		setCheck(!check);
		if (checked === true && dataCheckBox.m === 1) {
			setShowMs(true);
		}
	}


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
                <Box onClick={handle}>
                    {check ? <Checkbox defaultChecked={true}  /> : <Checkbox defaultChecked={false}  /> }
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
