import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard(props) {
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
        <Button size="small">Add to Wish List</Button>
        <Button size="small">Buy Now!</Button>
      </CardActions>
    </Card>
  );
}


