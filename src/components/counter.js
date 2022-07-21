import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function counter() {

    const [count, setCount] = useState(0);




    return (
    <div>
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <p>Testing</p>
            </Stack>
        </Box>
    </div>
    )
}
