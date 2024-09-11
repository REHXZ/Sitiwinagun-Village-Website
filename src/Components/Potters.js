import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';

// Import the local image
import nurjaji from '../Images/Nurjaji.jpg'
import utama from '../Images/potter 1.jpg'
import nurari from '../Images/nurari.jpg'
import sarimna from '../Images/sariman.jpg'
import yandi from '../Images/yandi.jpg'
import wanwan from '../Images/wanwan.jpg'

const LocationCard = ({ title, imageUrl }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const formattedTitle = title.replace(/\s+/g, '_');
    navigate(`/${formattedTitle}`);
  };

  return (
    <Card 
      sx={{ 
        minHeight: '280px', 
        width: '100%', 
        maxWidth: '320px', 
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
          transform: 'translateY(-4px)',
          transition: 'all 0.3s ease-in-out',
        },
      }}
      onClick={handleClick}
    >
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
    { title: "Pak Nurjaji", imageUrl: nurjaji },
    { title: "Pak Wanwan", imageUrl: wanwan }, // Use the imported image
    { title: "Pak Utama", imageUrl: utama },
    { title: "Pak Nurari", imageUrl: nurari },
    { title: "Pak Yandi", imageUrl: sarimna },
    { title: "Pak Sariman", imageUrl: yandi },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Grid container spacing={2} sx={{ maxWidth: '1200px', p: 2 , display: 'flex', justifyContent: 'center' }}>
        {locations.map((location, index) => (
          <Grid key={index} xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <LocationCard {...location}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationCardGrid;