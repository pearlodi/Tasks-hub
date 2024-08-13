import React from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import CustomCard from '../../components/CustomCards';
import UploadExcel from '../../components/UploadExcel';
import excel from '../../assets/images/excel.png'
import table from '../../assets/images/tablet.png'

const CardExample: React.FC = () => {
  return (
    <div className='mt-10'>
      <div className=''>
        <h1 className='text font-bold  text-center text-3xl'>WELCOME TO DATAHUB</h1>
        <p className='text font-medium  text-center text-base mt-2'>To start please click to upload an excel file or click to manually create table</p>
      </div>
      <Box className="flex flex-wrap justify-center gap-4">
        <CustomCard
          src={excel}
          buttonComponent={<UploadExcel />}
        />
        <CustomCard
          src={table}
          linkTo="/create-table"
        />
      </Box>
    </div>
  );
};

export default CardExample;
