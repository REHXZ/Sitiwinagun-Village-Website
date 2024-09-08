import * as React from 'react';
import ResponsiveAppBar from '../Components/Navbar'; // Import the Navbar
import Hero from '../Components/Hero'; // Import the Hero component
import Products from '../Components/Products'; // Import the product_list component
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Potters from '../Components/Potters';

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
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  fontFamily: '"Lora", serif',  // Apply the Lora font to the span
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                Potters
              </Typography>
            </Typography>
          </Stack>
        </Container>
        <Potters/>
      </main>
    </div>
  );
}

export default LandingPage;