import * as React from 'react';
import ResponsiveAppBar from '../Components/Navbar'; // Import the Navbar
import Hero from '../Components/Hero'; // Import the Hero component
import Products from '../Components/Products'; // Import the product_list component
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Potters from '../Components/Potters';
import ImageMasonry from '../Components/VillageProducts';
// Global styles for the Lora font
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
`;

function LandingPage() {
  return (
    <div>
      <main>
        <ResponsiveAppBar/>
        <Hero />
        <Products/>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
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
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                fontFamily: '"Lora", serif',  // Apply the Lora font
              }}
            >
              Our&nbsp;
              <Typography
                id="potters"
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  fontFamily: '"Lora", serif',  // Apply the Lora font to the span
                  background: 'linear-gradient(90deg, #004962, #4dd2ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                      })}
              >
                Potters
              </Typography>
            </Typography>
          </Stack>
        </Container>
        <Potters/>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
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
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                fontFamily: '"Lora", serif',  // Apply the Lora font
              }}
            >
              Our&nbsp;
              <Typography
                id="potters"
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  fontFamily: '"Lora", serif',  // Apply the Lora font to the span
                  background: 'linear-gradient(90deg, #004962, #4dd2ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                      })}
              >
                Products
              </Typography>
            </Typography>
          </Stack>
        </Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',  // Center the ImageMasonry horizontally
            alignItems: 'center',      // Center the ImageMasonry vertically if necessary
            flexDirection: 'column',   // Keep the content in a column layout
            pt: { xs: 14, sm: 20 },
            pb: { xs: 2, sm: 4 }}}>
          <ImageMasonry />
        </Container>
      </main>
    </div>
  );
}

export default LandingPage;