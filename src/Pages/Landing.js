import * as React from 'react';
import ResponsiveAppBar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Products from '../Components/Products';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Potters from '../Components/Potters';
import ImageMasonry from '../Components/VillageProducts';
import VirtualTour from '../Components/VirtualTour';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';


// Global styles for the Lora font
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
`;
const testimonials = [
  {
    name: "Maria Gomez",
    role: "Cultural Historian",
    content: "Sitiwinangun's ceramic sculptures are a perfect blend of tradition and modernity. The way they have evolved while retaining their cultural essence is truly remarkable."
  },
  {
    name: "David Lee",
    role: "Product Designer",
    content: "The transformation of traditional sculptures into contemporary products is inspiring. The creativity and precision in each piece make them ideal for modern living spaces."
  },
  {
    name: "Emily Carter",
    role: "Tourism Consultant",
    content: "Sitiwinangun's recognition as a tourism village is well-deserved. The innovative approach to preserving and evolving their ceramic art attracts more visitors every year."
  }
];


function TestimonialCard({ name, role, content }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body1" color="text.secondary" paragraph>
          "{content}"
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', marginRight: 2 }}>
            {name.charAt(0)}
          </Avatar>
          <div>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


function LandingPage() {
  return (
    <div>
      <main>
        <ResponsiveAppBar/>
        
        <Hero />
        <Products/>
        <Container
        id="potters"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 2, sm: 20 },  // Adjusted padding below
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
          id="products"
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
          spacing={4}
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
            Village&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                fontFamily: '"Lora", serif',
                background: 'linear-gradient(90deg, #004962, #4dd2ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
    
              })}
            >
              Tour
            </Typography>
          </Typography>
        </Stack>
      </Container>
        <Container
        id = 'tour'
          maxWidth="lg"
          sx={{
            mt: 4,
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '600px',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <VirtualTour />
          </div>
        </Container>

        {/* New Testimonial Section */}
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 8,
              fontFamily: '"Lora", serif',
              fontSize: 'clamp(2.5rem, 8vw, 3rem)',
              background: 'linear-gradient(90deg, #004962, #4dd2ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            What Everyone is Saying
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <TestimonialCard {...testimonial} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default LandingPage;