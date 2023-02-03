import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { REMOVE_NFT } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeNftId } from '../utils/localStorage';
import seeds from ''

export default function WishListCard(props) {
     const { loading, data } = useQuery(QUERY_USER);
  const userData = data?.me || [];
  const userDataLength = Object.keys(userData).length;
  const [removeNft] = useMutation(REMOVE_NFT);

  if (loading) { return <h1> Loading...</h1> }

  const handleDeleteNFT = async (nftId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      await removeNft({ variables: { nftId } });
      removeNftId(nftId);
    } catch (err) {
      console.error(err);
      alert('Something went wrong with the function!');
    }
  };
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={`/static/images/cards/${props.image}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.nft_token}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {props.nft_token}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.price} {props.owner}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDeleteNFT(props._id)}>
                    Delete
                </Button>
                <Button size="small">Buy Now!</Button>
            </CardActions>
        </Card>
    );
}