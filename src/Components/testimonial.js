import React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Grid from '@mui/joy/Grid';

const BottomActionsCard = () => (
  <Card
    variant="outlined"
    sx={{
      width: '100%',
      height: '100%',
      overflow: 'auto',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Avatar src="/static/images/avatar/1.jpg" size="lg" />
      <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px' }}>
        <Avatar src="/static/images/avatar/2.jpg" />
        <Avatar src="/static/images/avatar/3.jpg" />
        <Avatar src="/static/images/avatar/4.jpg" />
        <Avatar>+4K</Avatar>
      </AvatarGroup>
    </Box>
    <CardContent>
      <Typography level="title-lg">NYC Coders</Typography>
      <Typography level="body-sm">
        We are a community of developers prepping for coding interviews,
        participate, chat with others and get better at interviewing.
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
        <FavoriteBorder />
      </IconButton>
      <Button variant="outlined" color="neutral" size="sm">
        View
      </Button>
      <Button variant="solid" color="primary" size="sm">
        Join
      </Button>
    </CardActions>
  </Card>
);

export default function CardGrid() {
  return (
    <Box sx={{ width: '120%', p: 2 }}>
      <Grid container spacing={2}>
        {[...Array(4)].map((_, index) => (
          <Grid key={index} xs={12} sm={6} md={2} mb={0} mr={11}>
            <BottomActionsCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}