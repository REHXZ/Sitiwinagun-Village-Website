import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';

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
          srcSet={`${imageUrl} 2x`}
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
    { title: "Pak Nurjaji", imageUrl: require('../Images/Nurjaji.jpg') },
    { title: "Pak Wanwan", imageUrl: require('../Images/wanwan.jpg') },
    { title: "Pak Utama", imageUrl: require('../Images/potter 1.jpg') },
    { title: "Pak Nurari", imageUrl: require('../Images/nurari.jpg') },
    { title: "Pak Yandi", imageUrl: require('../Images/yandi.jpg') },
    { title: "Pak Sariman", imageUrl: require('../Images/sariman.jpg') },
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