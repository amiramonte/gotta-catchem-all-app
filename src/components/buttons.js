import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { blue, brown } from '@mui/material/colors';


export default function Buttons({countIncrease, countDecrease, countReset}) {

    const eyes = blue[200];

    return (
        <div>
            <Stack spacing = {4}>
                <Button variant="contained" size="large" color={eyes} onClick={countIncrease}>+</Button>
                <Button variant="contained" size="large" color={eyes} onClick={countDecrease}>-</Button>
                <Button variant="contained" size="large" color="error" onClick={countReset}>Start Again!</Button>
            </Stack>
        </div>
    )
}
