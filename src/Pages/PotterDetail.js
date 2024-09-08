import React from 'react';
import ResponsiveAppBar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import { Typography, Box, Container } from '@mui/material';
import ImageList from '../Components/ImageList';

const LocationDetailPage = () => {
  const { title } = useParams();
  
  // Mock data for location details
  const locationDetails = {
    "Pak_Jamadi": {
      fullName: "Pak Jamadi",
      description: "An expert wood carver from Bali, Indonesia.",
      imageUrl: "https://media.istockphoto.com/id/1090026394/id/foto/pemuda-pribumi-ukiran-masker-kayu-di-bali-indonesia.jpg?s=612x612&w=0&k=20&c=DuhZrm27LZcUjqglWE6n2cwWaJxqJRxufwDEg7Mi-7Y="
    },
    "Pak_Jamal": {
      fullName: "Pak Jamal",
      description: "A skilled construction worker from Malaysia.",
      imageUrl: "https://media.istockphoto.com/id/173949501/id/foto/malaysia-bekerja-dengan-alat-dan-aktivitas-bangunan.jpg?s=612x612&w=0&k=20&c=kEERH0xD1qek6LLLKpVaiUYWyakPSBbAjb_LRbvUEo0="
    },
    "Pak_Simone": {
      fullName: "Pak Simone",
      description: "A senior craftsman specializing in Indonesian palm sugar production.",
      imageUrl: "https://media.istockphoto.com/id/1014987276/id/foto/pengrajin-senior-pembuat-gula-aren-indonesia-tersenyum-di-dapurnya.jpg?s=612x612&w=0&k=20&c=8KaO2Md8TDP4bzxtshYS2rsVLUdnSFiiR5VELJyvieE=",
      shop:[]
    }
  };

  const location = locationDetails[title] || { fullName: "Unknown", description: "Location not found", imageUrl: "" };

  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ mt: 20, mb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            component="img"
            src={location.imageUrl}
            alt={location.fullName}
            sx={{
              width: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: 2,
              mb: 2
            }}
          />
          <Typography variant="h3" component="h1" gutterBottom align="center">
            {location.fullName}
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            {location.description}
          </Typography>
        </Box>
        </Container>
        <Box sx={{ mt: 4 }}>
          <ImageList />
        </Box>
    </>
  );
};

export default LocationDetailPage;