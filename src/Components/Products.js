import React from 'react';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import useMediaQuery from '@mui/material/useMediaQuery';

const imageUrls = [
  'https://plus.unsplash.com/premium_photo-1661380954234-13d98a83577c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595351298020-038700609878?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523263666618-c992b26eec21?q=80&w=800&auto=format&fit=crop',
  'https://plus.unsplash.com/premium_photo-1661380954234-13d98a83577c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595351298020-038700609878?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523263666618-c992b26eec21?q=80&w=800&auto=format&fit=crop',
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const PhoneGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gap: theme.spacing(1),
  height: '100vh',
}));

export default function ResponsiveImageGallery() {
  const isPhone = useMediaQuery('(max-width:600px)');

  const heights = Array.from({ length: imageUrls.length }, () => Math.floor(Math.random() * 400) + 200);

  if (isPhone) {
    return (
      <PhoneGrid>
        {imageUrls.slice(0, 6).map((url, index) => (
          <Item key={index}>
            <Image src={url} alt={`image-${index + 1}`} loading="lazy" />
          </Item>
        ))}
      </PhoneGrid>
    );
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ width: '98vw', minHeight: '50vh' }}>
        <Masonry columns={3} spacing={2}>
          {imageUrls.map((url, index) => (
            <Item key={index} sx={{ height: heights[index] }}>
              <Image src={url} alt={`image-${index + 1}`} loading="lazy" />
            </Item>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
}