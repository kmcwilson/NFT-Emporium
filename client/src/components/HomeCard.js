import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { saveNftIds, getSavedNftIds } from '../utils/localStorage';
import { SAVE_NFTS } from '../utils/mutations';

export default function HomeCard(props){

  const [savedNftIds, setSavedNftIds]= useState(getSavedNftIds());

  const [saveNft, {error}]= useMutation(SAVE_NFTS);

  useEffect(()=> {
    return ()=> saveNftIds(savedNftIds);
  });

  const handleSaveNfts = async (nftId) => {
    console.log('Nft Id:', nftId);
    
    const token = Auth.loggedIn()? Auth.getToken() : null;

    if(!token){
      return false;
    }

    try {
      const {data} = await saveNft({variables: {input: props}})
      setSavedNftIds([...savedNftIds, nftId])

    }
    catch (err) {
      console.error(err);

    }
  }

  
  return (
    <Grid xs={4} sm={4} md={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.nft_token}
        height="140"
        image={`/images/${props.image}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.nft_token}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         {props.nft_collection}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.price} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.owner}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={()=> handleSaveNfts(props)}>Add to Wish List</Button>
        <Button size="small" variant="contained">Buy Now!</Button>
      </CardActions>
    </Card>
    </Grid>
  );
  }


