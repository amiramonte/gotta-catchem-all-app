import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Buttons from './buttons';
import { Container } from '@mui/system';

export default function Counter() {

    const [count, setCount] = useState(0);

    const countIncrease = () => {
        setCount((count + 1));
    };

    const countDecrease = () => {
        if (count > 0) {
            setCount((count - 1));
        }
    };

    const countReset = () => {
        setCount((0));
    };

    return (
    <div>
        <Container maxWidth="sm"> 
            <Box sx={{ width: '100%' }}>
                <Stack spacing={6}>
                    <h1>{count}</h1>
                    <Buttons countIncrease={countIncrease} countDecrease={countDecrease} countReset={countReset}/>
                </Stack>
            </Box>
        </Container>
    </div>
    )
}
