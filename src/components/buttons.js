import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Buttons({countIncrease, countDecrease, countReset}) {
    return (
        <div>
            <Stack spacing = {2}>
                <Button variant="contained" onClick={countIncrease}>+</Button>
                <Button variant="contained"onClick={countDecrease}>-</Button>
                <Button variant="contained"onClick={countReset}>reset</Button>
            </Stack>
        </div>
    )
}
