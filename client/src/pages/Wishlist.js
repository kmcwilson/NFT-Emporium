import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import WishListCard from '../components/WishListCard';


import { useQuery, useMutation } from '@apollo/client';
import { QUERY_NFTS, QUERY_USER } from '../utils/queries';
// import { REMOVE_NFT } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { removeNftId } from '../utils/localStorage';

export default function Wishlist() {

const { loading, data } = useQuery(QUERY_NFTS);
const nfts = data?.nfts || [];
console.log('Data:',data);

  return (
    <>
      <h1>{loading? (<div>Loading...</div>):(<div>My Wish List</div>)}</h1>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {nfts.map(x=> 
          (<WishListCard 
          key={x._id}
          token={x.nft_token}
          image= {x.image}
          collection={x.collection}
          price= {x.price}
          owner={x.owner}
          />)
          )}
      </Grid>
      </Box>
      {/* <h3>
        {userData.savedNfts.length ? `You have ${userData.savedNfts.length} ${userData.savedNfts.length === 1 ? 'NFT' : 'NFTs'} on your wish list!`
          : 'You have no items on your wish list pal, get shopping!'}
      </h3> */}
    </>
    
  );

  //function accepts nft's mongoDB_id value and deletes the nft from the database


}
