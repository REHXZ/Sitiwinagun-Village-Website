import React from 'react';
import ResponsiveAppBar from '../Components/Navbar';
import { useParams } from 'react-router-dom';
import { Typography, Box, Container } from '@mui/material';
import ImageList from '../Components/ImageList';
import Stack from '@mui/material/Stack';
import arkimaImage from '../Images/WhatsApp Image 2024-09-08 at 15.26.54_44ddd897.jpg';
import ImageMasonry from '../Components/IndividualProduct'; 

import nurjaji from '../Images/Nurjaji.jpg'
import utama from '../Images/potter 1.jpg'
import nurari from '../Images/nurari.jpg'
import sarimna from '../Images/sariman.jpg'
import yandi from '../Images/yandi.jpg'
import wanwan from '../Images/wanwan.jpg'

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
`;


const LocationDetailPage = () => {
  const { title } = useParams();
  
  // Mock data for location details
  const locationDetails = {
    "Pak_Nurjaji": {
      fullName: "Pak Nurjaji",
      description: "An expert wood carver from Bali, Indonesia.",
      imageUrl: nurjaji
    },
    "Pak_Nurari": {
      fullName: "Pak Nurari",
      description: "A summary about Pak Arkima.",
      imageUrl: nurari
    },
    "Pak_Utama": {
      fullName: "Pak Utama",
      description: "A senior craftsman specializing in Indonesian palm sugar production.",
      imageUrl: utama,
    },
    "Pak_Sariman": {
      fullName: "Pak Sarimna",
      description: "A senior craftsman specializing in Indonesian palm sugar production.",
      imageUrl: sarimna,
    },
    "Pak_Yandi": {
      fullName: "Pak Yandi",
      description: "A senior craftsman specializing in Indonesian palm sugar production.",
      imageUrl: yandi,
    },
    "Pak_Wanwan": {
      fullName: "Pak Wanwan",
      description: "A senior craftsman specializing in Indonesian palm sugar production.",
      imageUrl: wanwan,
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
              width: '50%',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: 4,
              mb: 2
            }}
          />
        <Typography
          variant="h1"
          sx={(theme) => ({
            fontSize: '4rem',  // Adjust this to your desired size
            fontWeight:'bold',
            fontFamily: '"Lora", serif',
            background: 'linear-gradient(90deg, #004962, #4dd2ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          })}
        >
          {location.fullName}
        </Typography>
          <Typography mt={4} variant="h5" align="center" sx={{fontFamily: '"Lora", serif'}}>
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
            {location.fullName}'s&nbsp;
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
            {location.fullName}'s&nbsp;
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
                Shop
              </Typography>
            </Typography>
          </Stack>
        </Container>
        <ImageMasonry/>

    </>
  );
};

export default LocationDetailPage;