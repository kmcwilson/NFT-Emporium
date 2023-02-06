import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
import '../components/Landing.css';

export default function Home (){
    return (
        <Box sx={{flexGrow: 1}} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={10} lg={8} className='greeting' style={{padding:'100px'}}>
                    <h1>NFT Emporium</h1>
                    <p>Yours to explore!</p>
                    <Button><Link className="explore" to='/ournfts'> Explore our Nfts! </Link> </Button>
                </Grid>
                <Grid item xs={6} md={2} lg={4}> 
                </Grid>
            </Grid>
        </Box>
    )
}