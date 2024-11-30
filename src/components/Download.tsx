import { useState } from "react";

import DownloadIcon from '@mui/icons-material/Download';
const Download = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-10">
      <div 
        className="cursor-pointer"
        onClick={toggleOpen}
      >
        <p className="text-xl font-bold text-[green] text-center w-full">You can click here to download dummy excel files</p>
        {/* <button className="p-2">
          {isOpen ? 'Hide' : 'Show'} Options
        </button> */}
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col items-center justify-center">
          <div className="flex  gap-2">
            <a
              href="/dummydataexcel.xlsx"
              download="dummydataexcel.xlsx"
              className="flex items-center gap-2 gradient-background p-2 text-base font-medium rounded"
            >
              <DownloadIcon />
              Download Excel File
            </a>
            <a
              href="/dummydatacsv.csv"
              download="dummydatacsvs.csv"
              className="flex items-center gap-2 gradient-background p-2 text-base font-medium rounded"
            >
              <DownloadIcon />
              Download CSV File
            </a>
          </div>

          {/* <p className="text-lg font-bold mt-4 text">Use a multisheets file</p>
          <a
            href="/multisheet.xlsx"
            download="multisheet.xlsx"
            className="flex w-fit items-center gap-2 gradient-background p-2 text-base font-medium rounded"
          >
            <DownloadIcon />
            Download Multisheet Excel File
          </a> */}
        </div>
      )}
    </div>
  );
};

export default Download;
