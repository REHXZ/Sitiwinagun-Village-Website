import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import ImageList from '../Components/ImageList';

const LocationDetailPage = () => {
  const { title } = useParams();
  
  // In a real application, you would fetch the location details based on the title
  // For this example, we'll use mock data
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
      imageUrl: "https://media.istockphoto.com/id/1014987276/id/foto/pengrajin-senior-pembuat-gula-aren-indonesia-tersenyum-di-dapurnya.jpg?s=612x612&w=0&k=20&c=8KaO2Md8TDP4bzxtshYS2rsVLUdnSFiiR5VELJyvieE="
    }
  };

  const location = locationDetails[title] || { fullName: "Unknown", description: "Location not found", imageUrl: "" };

  return (
    <>
      <Box sx={{ maxWidth: '800px', margin: 'auto', padding: 4 }}>
        <Typography level="h1" gutterBottom>{location.fullName}</Typography>
        <img src={location.imageUrl} alt={location.fullName} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        <Typography level="body1" sx={{ marginTop: 2 }}>{location.description}</Typography>
      </Box>
      <Box sx={{ width: '100%', margin: '0 auto', padding: '0 16px', marginTop: 4 }}>
        <ImageList />
      </Box>
    </>
  );
};

export default LocationDetailPage;
