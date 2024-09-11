import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { Typography, useMediaQuery, useTheme, Modal, Fade, Backdrop, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import DIYKIT from '../Images/NEW4.png';  
import chicken from '../Images/Chicken.jpg'
import magnet from '../Images/Magnet.jpg'
import ugly from '../Images/Ugly shit.jpg'
import face from '../Images/face.jpg'
import keychain from '../Images/Keychain.jpg'
import jug from '../Images/Jug.jpg'
import cup from '../Images/Cup.jpg'

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
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 500,
  maxHeight: '80vh',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.paper,
  boxShadow: 24,
  padding: theme.spacing(4, 4, 4, 4),
  borderRadius: theme.shape.borderRadius,
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.grey[500],
}));

const itemData = [
  {
    img: DIYKIT,
    title: 'DIY KIT',
    description: 'A DIY kit people can use at home.',
    price: '100,000'
  },
  {
    img: chicken,
    title: 'Ayam Cantik Hand-Painted Chicken Figurine',
    description: 'This charming hand-painted chicken figurine, with intricate red swirl patterns, reflects the playful artistry of Sitiwinangun Village. Perfect as a decorative piece for your home or garden, it brings a touch of traditional craftsmanship to any space.',
    price: '150,000'
  },
  {
    img: magnet,
    title: 'Gerabah Magnet Miniature Pot Refrigerator Magnet',
    description: 'Bring a touch of Sitiwinangun craftsmanship to your kitchen with these beautifully handcrafted miniature clay pot refrigerator magnets. Each magnet showcases intricate patterns and the villages name, making it a perfect cultural souvenir or unique gift.',
    price: '30,000'
  },
  {
    img: ugly,
    title: 'Patung Tawa Laughing Man Statue',
    description: 'This striking, rustic statue of a laughing man captures the joyful spirit of Sitiwinanguns artisans. Skillfully crafted from clay, it makes an eye-catching addition to any indoor or outdoor setting, representing humor and positive energy.',
    price: '350,000'
  },
  {
    img: face,
    title: 'Topeng Tenang Clay Mask of Serenity',
    description: 'Handcrafted in the artisan village of Sitiwinangun, this terracotta mask captures a serene expression, perfect for home decor or as a unique wall hanging. Each mask is sculpted with care, showcasing the traditional craftsmanship of the region.',
    price: '75,000'
  },
  {
    img: keychain,
    title: 'Pesona Miniatur Miniature Charm Collection',
    description: 'A delightful assortment of miniature ceramic charms, including animals, masks, and other playful designs. Each charm is meticulously painted and crafted by local artisans in Sitiwinangun, making them perfect as keychains, bag accessories, or small gifts.',
    price: '25,000 per charm'
  },
  {
    img: jug,
    title: 'Kendi Sitiwinangun" Water Jug',
    description: 'This traditionally designed water jug reflects the rich cultural heritage of Sitiwinangun. The jugs earthy tones and simple, elegant shape make it a functional piece of art, ideal for both decorative purposes and practical use.',
    price: '150,000'
  },
  {
    img: cup,
    title: 'Cangkir Bunga Sitiwinangun Sitiwinangun Floral Terracotta Mug',
    description: 'This Ceirbon plate showcases intricate patterns and fine craftsmanship, making it an ideal piece for both functional use and decoration.',
    price: 109040
  },
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
    return 3;
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
                height: 'auto'
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
            <CloseButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </CloseButton>
            {selectedItem && (
              <>
                <img
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  style={{
                    width: '100%',
                    height: '50%',
                    marginBottom: theme.spacing(2),
                    borderRadius: '8px',
                  }}
                />          
                <Typography variant="h4" sx={{fontFamily: '"Lora", serif'}}>
                  {selectedItem.title}
                </Typography>
                <Typography variant="body1" sx={{fontFamily: '"Lora", serif'}}>
                  {selectedItem.description}
                </Typography>
                <Typography variant="h5" pt={1} pb={1} sx={{ fontWeight: 'bold', fontFamily: '"Lora", serif'}}>
                  {selectedItem.price} Rp
                </Typography>
                <Button variant="contained" color="success" fullWidth sx={{fontSize:'18px', fontWeight:'bold', fontFamily: '"Lora", serif'}}>
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