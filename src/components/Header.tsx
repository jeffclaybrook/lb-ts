import * as React from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Menu', 'Gallary', 'About', 'Reviews', 'Contact'];

export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', position: 'static' }}>
            <Typography
              variant='h6'
              sx={{ my: 2 }}
            >
                Lil Baghdad
            </Typography>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {navItems.map((item) => (
                    <Link
                      key={item}
                      href={item}
                      underline='none'
                      sx={{ py: 1 }}
                    >
                        {item}
                    </Link>
                ))}
            </Box>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component='nav'>
                <Toolbar>
                    <IconButton
                      color='inherit'
                      aria-label='open drawer'
                      edge='start'
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuRoundedIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
                      >
                        Lil Baghdad
                      </Typography>
                    <Box
                      sx={{ display: { xs: 'none', sm: 'block' }}}
                    >
                        {navItems.map((item) => (
                            <Link
                              key={item}
                              underline='none'
                              sx={{ color: '#fff', px: 1 }}
                              href={item}
                            >
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component='nav'>
                <Drawer
                  container={container}
                  variant='temporary'
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: false
                  }}
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                  }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}