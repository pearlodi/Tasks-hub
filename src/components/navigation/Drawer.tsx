import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import datahub from '../../assets/images/datahub.png'
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Drawers: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <img src={datahub} alt="logo" className='w-[150px]'/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
       <div>
        <ul className='flex flex-col gap-4  pl-8 pt-10'>
          <Link to="/" className='text-[#ffffffa0] font-bold text-base'> Data Hub</Link>
          <Link to="/table" className='text-[#ffffffa0] font-bold text-base'>Uploads</Link>
          <Link to="/create-table" className='text-[#ffffffa0] font-bold text-base'> Create table</Link>

        </ul>
       </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Drawers;
