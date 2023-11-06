import React from 'react';
import { Box } from 'theme-ui';

const BackDrop = ({
    onClick,
    hidden,
    children,
} : React.PropsWithChildren<{ onClick?: () => void, hidden?: boolean }>) => {
    return (
        <Box
            sx={{
                visibility: hidden ? 'hidden' : 'visible',
                opacity: hidden ? 0 : 1,
                transition: '400ms',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000,
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(5px)',
                backgroundBlendMode: 'multiply',
            }}
        >
            <Box sx={{ position: 'absolute', width: '100%', height: '100%' }} onClick={onClick} />
            <Box sx={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>{children}</Box>
        </Box>
    );
}

export default BackDrop;