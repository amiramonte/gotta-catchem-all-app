import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Buttons() {
    return (
        <div>
            <Stack spacing = {2}>
                <Button variant="contained">+</Button>
                <Button variant="contained">-</Button>
                <Button variant="contained">reset</Button>
            </Stack>
        </div>
    )
}
