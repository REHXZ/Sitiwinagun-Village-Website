import React from 'react';
import ResponsiveAppBar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import { Typography, Box, Container } from '@mui/material';
import ImageList from '../Components/ImageList';
import Stack from '@mui/material/Stack';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
`;

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
      description: "I AM HIM!",
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
          <Typography variant="h1" gutterBottom align="center" sx={{fontFamily: '"Lora", serif'}}>
            {location.fullName}
          </Typography>
          <Typography variant="body1" align="center" sx={{fontFamily: '"Lora", serif'}}>
            {location.description}
          </Typography>
        </Box>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 10 },
            pb: { xs: 2, sm: 4 },  // Adjusted padding below
            '&::before': {
              content: `"${globalStyles}"`,
              display: 'none',
            },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
          >
            <Typography
              variant="h3"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                fontFamily: '"Lora", serif',  // Apply the Lora font
              }}
            >
            {location.fullName}&nbsp;
              <Typography
                component="span"
                variant="h3"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  fontFamily: '"Lora", serif',  // Apply the Lora font to the span
                  background: 'linear-gradient(90deg, #004962, #4dd2ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                      })}
              >
                Work
              </Typography>
            </Typography>
          </Stack>
        </Container>
        <Box sx={{ mt: 4 }}>
          <ImageList />
        </Box>
    </>
  );
};

export default LocationDetailPage;