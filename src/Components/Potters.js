import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';

const LocationCard = ({ title, location, imageUrl }) => {
  return (
    <Card sx={{ minHeight: '280px', width: '100%', maxWidth: '320px' }}>
      <CardCover>
        <img
          src={imageUrl}
          srcSet={`${imageUrl}&dpr=2 2x`}
          loading="lazy"
          alt={title}
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end'}}>
        <Typography level="h1" textColor="#fff">
          {title}
        </Typography>

      </CardContent>
    </Card>
  );
};

const LocationCardGrid = () => {
  const locations = [
    { title: "Pak Jamadi", imageUrl: "https://media.istockphoto.com/id/1090026394/id/foto/pemuda-pribumi-ukiran-masker-kayu-di-bali-indonesia.jpg?s=612x612&w=0&k=20&c=DuhZrm27LZcUjqglWE6n2cwWaJxqJRxufwDEg7Mi-7Y=" },
    { title: "Eiffel Tower", location: "Paris, France", imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=320" },
    { title: "Great Wall of China", location: "Beijing, China", imageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=320" },
    { title: "Machu Picchu", location: "Cusco Region, Peru", imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=320" },
    { title: "Taj Mahal", location: "Agra, India", imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=320" },
    { title: "Santorini", location: "Greece", imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=320" },
    { title: "Grand Canyon", location: "Arizona, USA", imageUrl: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c?auto=format&fit=crop&w=320" },
    { title: "Venice", location: "Italy", imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=320" },
    { title: "Petra", location: "Jordan", imageUrl: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&w=320" }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Grid container spacing={2} sx={{ maxWidth: '1200px', p: 2 }}>
        {locations.map((location, index) => (
          <Grid key={index} xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <LocationCard {...location} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationCardGrid;