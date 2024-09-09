  import React, { useState } from 'react';
  import Box from '@mui/material/Box';
  import Masonry from '@mui/lab/Masonry';
  import { styled } from '@mui/material/styles';
  import { Typography, useMediaQuery, useTheme, Modal, Fade, Backdrop } from '@mui/material';
  import Button from '@mui/material/Button';
  import DIYKIT from '../Images/WhatsApp Image 2024-09-09 at 10.45.53_dca67895.jpg';  
  const StyledMasonry = styled(Masonry)(({ theme }) => ({
    margin: 0,
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
      '& .price-overlay': {
        opacity: 1,
      },
    },
  }));

  const PriceOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    opacity: 0,
    transition: 'opacity 0.3s ease',
  }));

  const ModalContent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: 24,
    padding: theme.spacing(4, 4, 4, 4), // (top, right, bottom, left)
    borderRadius: theme.shape.borderRadius,
  }));  

  const itemData = [
    {
      img: DIYKIT,
      title: 'DIY KIT',
      description: 'A DIY kit people can use at home.',
      price: 'DIY Kit'
    },
    {
      img: 'https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp',
      title: 'Ceirbon Plate',
      description: 'This Ceirbon plate showcases intricate patterns and fine craftsmanship, making it an ideal piece for both functional use and decoration.',
      price: 109040

    },
    {
      img: 'https://i0.wp.com/fajarcirebon.com/wp-content/uploads/2020/09/thumbnail-5.jpg?w=1280&ssl=1',
      title: 'Ceirbon Mug',
      description: 'A stylish Ceirbon mug that combines tradition with practicality, featuring a unique design that reflects the rich cultural heritage of the region.',
      price: 150040
    },
    {
      img: 'https://miro.medium.com/v2/resize:fit:828/format:webp/0*L7QNmjIOZCn6MeM3',
      title: 'Ceirbon Pot',
      description: 'A beautifully handcrafted pot from Ceirbon, featuring traditional designs and vibrant colors, perfect for adding a touch of culture to any space.',
      price: 250400
    },
    {
      img: 'https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp',
      title: 'Ceirbon Plate',
      description: 'This Ceirbon plate showcases intricate patterns and fine craftsmanship, making it an ideal piece for both functional use and decoration.',
      price: 109040

    },
    {
      img: 'https://i0.wp.com/fajarcirebon.com/wp-content/uploads/2020/09/thumbnail-5.jpg?w=1280&ssl=1',
      title: 'Ceirbon Mug',
      description: 'A stylish Ceirbon mug that combines tradition with practicality, featuring a unique design that reflects the rich cultural heritage of the region.',
      price: 150040
    },
    {
      img: 'https://miro.medium.com/v2/resize:fit:828/format:webp/0*L7QNmjIOZCn6MeM3',
      title: 'Ceirbon Pot',
      description: 'A beautifully handcrafted pot from Ceirbon, featuring traditional designs and vibrant colors, perfect for adding a touch of culture to any space.',
      price: 250400
    },
    {
      img: 'https://images.prismic.io/xometry-marketing/57abb083-8a2c-4a24-9a10-c93815ac1905_ceramic-examples.jpg?auto=format%2Ccompress&rect=100%2C0%2C800%2C800&w=486&h=486&fit=max&fm=webp',
      title: 'Ceirbon Plate',
      description: 'This Ceirbon plate showcases intricate patterns and fine craftsmanship, making it an ideal piece for both functional use and decoration.',
      price: 109040

    },
    {
      img: 'https://i0.wp.com/fajarcirebon.com/wp-content/uploads/2020/09/thumbnail-5.jpg?w=1280&ssl=1',
      title: 'Ceirbon Mug',
      description: 'A stylish Ceirbon mug that combines tradition with practicality, featuring a unique design that reflects the rich cultural heritage of the region.',
      price: 150040
    }
  ];



  export default function ImageMasonry() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const getColumns = () => {
      if (isMobile) return 2;
      if (isTablet) return 3;
      return 4;
    };

    const handleOpen = (item) => {
      setSelectedItem(item);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Box sx={{ width: '100%', padding: theme.spacing(2) }}>
        <StyledMasonry columns={getColumns()} spacing={2}>
          {itemData.map((item, index) => (
            <ImageContainer key={index} onClick={() => handleOpen(item)}>
              <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                }}
              />
              <PriceOverlay className="price-overlay">
                <Typography variant="subtitle1" fontWeight="bold" textAlign={'center'} fontSize={'25px'}>
                  {item.price} Rp
                </Typography>
              </PriceOverlay>
            </ImageContainer>
          ))}
        </StyledMasonry>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
      <Fade in={open}>
        <ModalContent sx={{ textAlign: 'center', alignContent: 'center' }}>
        {selectedItem && (
          <>
            <img
              src={selectedItem.img}
              alt={selectedItem.title}
              style={{
                width: '100%',
                height: 'auto',
                marginBottom: theme.spacing(2),
                borderRadius: '8px', // Adjust as needed
              }}/>          
            <Typography variant="h3" sx={{fontFamily: '"Lora", serif',}}>
              {selectedItem.title}
            </Typography>
            <Typography variant="h5" sx={{fontFamily: '"Lora", serif',}}>
              {selectedItem.description}
            </Typography>
            <Typography variant="h5" pt={1} pb={1} sx={{ fontWeight: 'bold', fontFamily: '"Lora", serif'}}>
            {selectedItem.price} Rp
            </Typography>
            <Button variant="contained" color="success" fullWidth sx={{fontSize:'25px', fontWeight:'bold', fontFamily: '"Lora", serif'}}>
              Buy {selectedItem.title}
            </Button>
          </>
            )}
          </ModalContent>
        </Fade>

        </Modal>
      </Box>
    );
  }