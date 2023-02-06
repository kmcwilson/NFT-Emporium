import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';

const styles={
    greeting: {
        color:'whitesmoke',
        fontSize: '50px',
        padding: '100px', 

    }, 
    button: {
        color: 'whitesmoke', 
        padding: '50px;', 
        margin: '50px', 
        backgroundColor: '#009B77', 
        fontWeight: 'bold'
    }
}

export default function Landing (){
    return (
        <Box sx={{flexGrow: 1}} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={10} lg={8} style={styles.greeting} >
                    <h1>NFT Emporium</h1>
                    <p>Yours to explore!</p>
                    <Button style={styles.button}><Link to='/'> Explore our Nfts! </Link> </Button>
                </Grid>
                <Grid item xs={6} md={2} lg={4}> 
            
                </Grid>
            </Grid>
        </Box>
    )
}