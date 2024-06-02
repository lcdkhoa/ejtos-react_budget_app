import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Grid, TextField, Typography } from '@mui/material';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <Grid item container style={{ background: "#E2E3E5", height: "60px", borderRadius: "5px" }} >
            <Grid item container xs={5} style={{alignContent: "center"}}>
                <Typography >
                    Budget: £{budget}
                </Typography>
            </Grid>
            <Grid item container xs>
                <TextField type="number" step="10" value={newBudget} onChange={handleBudgetChange}></TextField>
            </Grid>
        </Grid>
    );
};
export default Budget;