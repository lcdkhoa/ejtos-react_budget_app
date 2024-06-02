import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import Budget from './components/Budget';
import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import { Container } from '@mui/material';
const App = () => {
    return (
        <AppProvider>
            <Container>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <Grid item contaner direction={"row"}>
                    <Grid item container direction={"row"}>
                        <Grid item xs={3}>
                            <Budget/>
                        </Grid>
                        <Grid item xs={3}>
                            <Remaining />
                        </Grid>
                        <Grid item xs={3}>
                            <ExpenseTotal />
                        </Grid>
                    </Grid>
                    <Grid item container direction={"column"}>
                        <ExpenseList />
                        <ExpenseItem />
                    </Grid>
                    <Grid>
                        <AllocationForm />
                    </Grid>
                </Grid>
            </Container>
        </AppProvider>
    )
}
export default App;
