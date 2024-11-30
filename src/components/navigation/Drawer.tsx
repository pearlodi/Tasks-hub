import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import datahub from '../../assets/images/datahub.png';
import AddHomeIcon from '@mui/icons-material/AddHome';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import TableChartIcon from '@mui/icons-material/TableChart';

const drawerWidth = 240;

const Drawers: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <img src={datahub} alt="logo" className="w-[150px]" />
          </Toolbar>
        </AppBar> */}

        {!isMobile && (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
           >
            <div className='nav-bg object-cover'>
            <img src={datahub} alt="logo" className="w-[150px]  py-5" />
          </div>
            {/* <Toolbar /> */}
            <div>
              <ul className="flex flex-col gap-4 p-2 pt-2 mt-5 ">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-[#ffffffa0] font-normal text-base"}>
                  <div className="flex items-center gap-2">
                    <AddHomeIcon className="text-inherit" />
                    Home
                  </div>
                </NavLink>
                <NavLink to="/table" className={({ isActive }) => isActive ? "text-white" : "text-[#ffffffa0] font-normal text-base"}>
                  <div className="flex items-center gap-2">
                    <DriveFolderUploadIcon className="text-inherit" />
                     Uploads
                  </div>
                </NavLink>
                <NavLink to="/create-table" className={({ isActive }) => isActive ? "text-white" : "text-[#ffffffa0] font-normal text-base"}>
                  <div className="flex items-center gap-2">
                    <TableChartIcon className="text-inherit" />
                     Create Table
                  </div>
                </NavLink>
              </ul>
            </div>
          </Drawer>
        )}

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div className='pb-[100px]'><Outlet /></div>
        </Box>
      </Box>

      {isMobile && (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-bold" : "text-[#ffffffa0] font-normal text-base"}>
              <div className="flex flex-col items-center">
                <AddHomeIcon className="text-inherit" />
                Create
              </div>
            </NavLink>
            <NavLink to="/table" className={({ isActive }) => isActive ? "text-white font-bold" : "text-[#ffffffa0] font-normal text-base"}>
              <div className="flex flex-col items-center">
                <DriveFolderUploadIcon className="text-inherit" />
                Uploads
              </div>
            </NavLink>
            <NavLink to="/create-table" className={({ isActive }) => isActive ? "text-white font-bold" : "text-[#ffffffa0] font-normal text-base"}>
              <div className="flex flex-col items-center">
                <TableChartIcon className="text-inherit" />
                Tables
              </div>
            </NavLink>
          </BottomNavigation>
        </Paper>
      )}
    </div>
  );
};

export default Drawers;
