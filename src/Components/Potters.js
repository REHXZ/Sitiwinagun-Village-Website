import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';

// Import the local image
import arkimaImage from '../Images/WhatsApp Image 2024-09-08 at 15.26.54_44ddd897.jpg';

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
    { title: "Pak Nurjaji", imageUrl: "https://media.istockphoto.com/id/1090026394/id/foto/pemuda-pribumi-ukiran-masker-kayu-di-bali-indonesia.jpg?s=612x612&w=0&k=20&c=DuhZrm27LZcUjqglWE6n2cwWaJxqJRxufwDEg7Mi-7Y=" },
    { title: "Pak Arkima", imageUrl: arkimaImage }, // Use the imported image
    { title: "Pak Utama", imageUrl: "https://media.istockphoto.com/id/1014987276/id/foto/pengrajin-senior-pembuat-gula-aren-indonesia-tersenyum-di-dapurnya.jpg?s=612x612&w=0&k=20&c=8KaO2Md8TDP4bzxtshYS2rsVLUdnSFiiR5VELJyvieE=" },
    { title: "Pak Rum", imageUrl: "https://media.istockphoto.com/id/1090026394/id/foto/pemuda-pribumi-ukiran-masker-kayu-di-bali-indonesia.jpg?s=612x612&w=0&k=20&c=DuhZrm27LZcUjqglWE6n2cwWaJxqJRxufwDEg7Mi-7Y=" },
    { title: "Pak Yandi", imageUrl: "https://media.istockphoto.com/id/173949501/id/foto/malaysia-bekerja-dengan-alat-dan-aktivitas-bangunan.jpg?s=612x612&w=0&k=20&c=kEERH0xD1qek6LLLKpVaiUYWyakPSBbAjb_LRbvUEo0=" },
    { title: "Pak Kadmiya", imageUrl: "https://media.istockphoto.com/id/173949501/id/foto/malaysia-bekerja-dengan-alat-dan-aktivitas-bangunan.jpg?s=612x612&w=0&k=20&c=kEERH0xD1qek6LLLKpVaiUYWyakPSBbAjb_LRbvUEo0=" },
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