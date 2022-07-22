import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Buttons({countIncrease, countDecrease, countReset}) {
    return (
        <div>
            <Stack spacing = {4}>
                <Button variant="contained" size="large" color="success" onClick={countIncrease}>+</Button>
                <Button variant="contained" size="large" color="secondary" onClick={countDecrease}>-</Button>
                <Button variant="contained" size="large" color="error" onClick={countReset}>reset</Button>
            </Stack>
        </div>
    )
}
