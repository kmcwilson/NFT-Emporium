import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { REMOVE_NFT } from '../utils/mutations';
import { removeNftId } from '../utils/localStorage';


export default function WishListCard(props) {
  const { loading, data } = useQuery(QUERY_USER);
  const userData = data?.me || [];
  const userDataLength = Object.keys(userData).length;
  const [removeNft] = useMutation(REMOVE_NFT);

  if (loading) { return <h1> Loading...</h1> }

  const handleDeleteNFT = async (nftId) => {
    const token = Auth.loggedIn()? Auth.getToken(): null;

    if(!token){
      return false;
    }

    try {
      await removeNft({ variables: props.id });
      removeNftId(nftId);
    } catch (err) {
      console.error(err);
      alert('Something went wrong with the function!');
    }
  };

  if (!userDataLength){
    return<h2>Loading...</h2>
  }
 
    return (
      <Grid xs={4} sm={4} md={3}>
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={`images/${props.image}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.token}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {props.collection}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.price} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.owner}
                </Typography>   
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" onClick={() => handleDeleteNFT(props.id)}>
                    Delete
                </Button>
                <Button size="small" variant="contained">Buy Now!</Button>
            </CardActions>
        </Card>
        </Grid>
    );
}