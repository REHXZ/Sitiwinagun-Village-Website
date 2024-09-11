import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';
import { label } from 'framer-motion/client';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '0.875rem',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Our Village', href: '/' },
    { 
      label: 'Our Potters', 
      href: '/#potters', 
      subItems: [
        { label: 'Pak Nurjaji', href: '/Pak_Nurjaji' },
        { label: 'Pak Arkima', href: '/Pak_Nurari' },
        { label: 'Pak Utama', href: '/Pak_Utama' },
        { label: 'Pak Sarimna', href: '/Pak_Sariman' },
        { label: 'Pak Yandi', href: '/Pak_Yandi' },
        { label: 'Pak Wanwan', href: '/Pak_Wanwan' },
      ],
    },
    { label: 'Our Products', href: '/#products' },
    {label: 'Village Tour', href: '/#tour'},

  ];

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 6 }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <NavButton
            href="/"
            sx={{
              fontSize: '20px',
              background: 'linear-gradient(90deg, #004962, #4dd2ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            Sitiwinangun
          </NavButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.label}>
                  <NavButton
                    aria-controls="potters-menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                  >
                    {item.label}
                  </NavButton>
                  <Menu
                    id="potters-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      'aria-labelledby': 'potters-button',
                    }}
                  >
                    {item.subItems.map((subItem) => (
                      <MenuItem
                        key={subItem.label}
                        component="a"
                        href={subItem.href}
                        onClick={handleMenuClose}
                      >
                        {subItem.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <NavButton key={item.label} href={item.href}>
                  {item.label}
                </NavButton>
              )
            ))}
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                {navItems.map((item) => (
                  <MenuItem key={item.label} component="a" href={item.href}>
                    <Typography variant="subtitle1">{item.label}</Typography>
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
