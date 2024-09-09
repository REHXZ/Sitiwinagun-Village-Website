import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

// StyledBox with updated properties
const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: '50%',
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url('/static/screenshots/material-ui/getting-started/templates/dashboard.jpg')`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url('/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg')`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: theme.palette.grey[700],
  }),
}));

// Global styles for the Lora font
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
`;

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        padding: theme.spacing(8, 0),
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
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
            Sitiwinangun&nbsp;
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
              Village
            </Typography>
          </Typography>
        <Container>
          <Typography variant='h5' mb={0} sx={{textAlign:'center', fontFamily: '"Lora", serif',}}>Sitiwinangun is a ceramic village located in Cirebon. It has been proclaimed as a tourism village since 2018 by the Sultan of Cirebon. Since then, the visit to this village keeps increasing. Some of the traditional ceramic sculptures from this ceramic centre are statues of Paksinagaliman, Singabarong, Macan Ali, Burok, Jatayu, Garuda Mungkur and Gajah Mungkur.The study is an art-based research focusing on developing the traditional ceramic sculptures into modern ceramic products. The method applied is ATUMICS that is regarding Artefact, Technic, Utility, Material, Icon, Concept, Shape. The process is through some phases, they are identification, analysis, design development, design application, mock up creation and, product exhibition. The result produces ceramic sculptures into various forms and functions adjusted to the consumers needs.</Typography>
        </Container>
        </Stack>
      </Container>
    </Box>
  );
}
