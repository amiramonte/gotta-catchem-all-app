import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Buttons from './buttons';

export default function Counter() {

    return (
    <div>
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <p>testing</p>
                <Buttons/>
            </Stack>
        </Box>
    </div>
    )
}
