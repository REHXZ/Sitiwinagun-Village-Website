import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

export default function CardGrid() {
  return (
    <Grid
      container
      spacing={5}
      justifyContent="center"
      alignItems="center"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ maxWidth: '350px', margin: 'auto', marginBottom: '10px'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Lizard {index + 1}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lizards are a widespread group of squamate.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
