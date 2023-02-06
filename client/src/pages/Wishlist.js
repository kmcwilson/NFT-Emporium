


import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import WishListCard from '../components/WishListCard';


import { useQuery } from '@apollo/client';
import { QUERY_NFTS } from '../utils/queries';


export default function Wishlist() {

const { loading, data } = useQuery(QUERY_NFTS);
const nfts = data?.nfts || [];

  return (
    <>
      <h1 style={{padding: '50px', margin: '20px', textAlign: 'center', color:'whitesmoke'}}>My Wish List</h1>
      <Box sx={{ flexGrow: 1 }} style={{margin:'50px', marginBottom: '20px', justifyContent: 'center'}}>
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
    </>
    
  );



}

//Code for wishlist items once saveNft function works


// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

// import Auth from '../utils/auth';
// import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_USER } from '../utils/queries';
// import { REMOVE_NFT } from '../utils/mutations';
// import { removeNftId } from '../utils/localStorage';


// export default function WishList() {
//   const { loading, data } = useQuery(QUERY_USER);
//   const userData = data?.user || [];
//   const userDataLength = Object.keys(userData).length;
//   const [removeNft] = useMutation(REMOVE_NFT);

//   if (loading) { return <h1> Loading...</h1> }

//   const handleDeleteNFT = async (nftId) => {
//     const token = Auth.loggedIn()? Auth.getToken(): null;

//     if(!token){
//       return false;
//     }

//     try {
//       await removeNft({ variables: nftId.id });
//       removeNftId(nftId);
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong with the function!');
//     }
//   };

//   if (!userDataLength){
//     return<h2>Loading...</h2>
//   }
 
//     return (
//       <Box sx={{ flexGrow: 1 }} style={{margin:'50px', marginBottom: '20px', justifyContent: 'center'}}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {userData.savedNfts.map((nft)=>{
//       <Grid xs={4} sm={4} md={3}>
//         <Card sx={{maxWidth: 345}}>
//             <CardMedia
//                 component="img"
//                 alt= {`${nft.nft_token}`}
//                 height="200"
//                 image={`images/${nft.image}`}
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     {nft.nft_token}
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="div">
//                     {nft.nft_collection}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     {nft.price} 
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                 {nft.owner}
//                 </Typography>   
//             </CardContent>
//             <CardActions>
//                 <Button size="small" variant="contained" onClick={() => handleDeleteNFT(nft._id)}>
//                     Delete
//                 </Button>
//                 <Button size="small" variant="contained">Buy Now!</Button>
//             </CardActions>
//         </Card>
//         </Grid>
//         })}
//         </Grid>
//         </Box>
//     );
// }





