import React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import HomeCard from '../components/HomeCard';

import { useQuery} from '@apollo/client';
import { QUERY_NFTS} from '../utils/queries';



export default function Home() {

 
const { loading, data } = useQuery(QUERY_NFTS);
const nfts = data?.nfts || [];
console.log('Data:',data);

  return (
    <>
      <h1 style={{padding: '50px', margin: '20px', textAlign: 'center', color:'whitesmoke'}}>{loading? (<div>Loading...</div>):(<div>Our NFTs</div>)}</h1>
      <Box sx={{ flexGrow: 1 }} style={{margin:'50px', marginBottom: '20px', justifyContent: 'center'}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {nfts.map(nft=> 
          (
           <HomeCard 
          key={nft._id}
          _id={nft._id}
          nft_token={nft.nft_token}
          image= {nft.image}
          nft_collection={nft.collection}
          price= {nft.price}
          owner={nft.owner}
          />
      )
          )}
      </Grid>
      </Box>
    </>
    
  );


}
