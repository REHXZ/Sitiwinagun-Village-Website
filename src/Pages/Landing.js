import * as React from 'react';
import ResponsiveAppBar from '../Components/Navbar'; // Import the Navbar
import Hero from '../Components/Hero'; // Import the Hero component
import Products from '../Components/Products'; // Import the product_list component
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Potters from '../Components/Potters';

function LandingPage() {
  return (
    <div style={{}}>
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
          pb: { xs: 8, sm: 12 },
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
            }}
          >
            Our&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
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
