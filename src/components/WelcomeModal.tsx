import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableViewIcon from '@mui/icons-material/TableView';
import CloseIcon from '@mui/icons-material/Close';
const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isModalShown = localStorage.getItem('isModalShown');

    if (!isModalShown) {
      setOpen(true);
      localStorage.setItem('isModalShown', 'true');
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        id="welcome-dialog"
      >
     <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <div onClick={handleClose} className='flex w-full items-end justify-end cursor-pointer'><CloseIcon /></div>
  <h1 className="text-4xl font-extrabold text-center mb-4">Welcome to DataHub</h1>
  <p className="text-lg text-center  mb-6">Explore powerful features to manage, analyze, and visualize your data.</p>
  <ul className="space-y-4">
    <li className="text-lg flex items-center gap-3">
      <CloudUploadIcon className="text-blue-600" />
      <span className="font-medium ">Upload Excel or CSV files</span>
    </li>
    <li className="text-lg flex items-center gap-3">
      <AnalyticsIcon className="text-green-600" />
      <span className="font-medium ">Analyze data using the AI chat interface</span>
    </li>
    <li className="text-lg flex items-center gap-3">
      <BarChartIcon className="text-purple-600" />
      <span className="font-medium ">Visualize data with various chart interfaces</span>
    </li>
    <li className="text-lg flex items-center gap-3">
      <TableViewIcon className="text-red-600" />
      <span className="font-medium ">Create and manage tables within the application</span>
    </li>
  </ul>
</div>

      </Dialog>
    </div>
  );
};

export default WelcomeModal;
