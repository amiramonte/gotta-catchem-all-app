import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Buttons from './buttons';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

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
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Container maxWidth="sm">
                <Stack spacing={4}>
                    <Box sx={{mx:'auto', fontWeight: "700", fontSize:'6rem', p: 2}}>
                    {count}
                    </Box>
                    <Buttons countIncrease={countIncrease} countDecrease={countDecrease} countReset={countReset}/>
                </Stack>
            </Container>
        </Grid>
    </div>
    )
}
