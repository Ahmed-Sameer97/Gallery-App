import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CustumizedCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: "10px 20px", width:400}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="220"
        image={props.urls.small}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.tags[0]?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.alt_description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>window.open(props.urls.full)}>Full resolution</Button>
        <Button size="small" onClick={()=>window.open(`https://unsplash.com/@${props.user.username}`)}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
