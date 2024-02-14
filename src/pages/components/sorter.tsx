import React, { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {parseISO } from 'date-fns';
import { Stack, Button,Typography,Box } from '@mui/material';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';


interface DateSorterProps {
  onSortClick: (from: string, to: string) => void;
}


const DateSorter: React.FC<DateSorterProps> = ({ onSortClick }) => {


  const [fromDate, setFromDate] = useState<Date | null>(parseISO('2022-04-17T15:30:00.000Z'));
  const [toDate, setToDate] = useState<Date | null>(parseISO('2022-04-17T15:30:00.000Z'));
  const [errorText] = useState<string>('');

  const handleSortClick = () => {
        // Convert dates to ISO 8601 format
        const isoFromDate = fromDate ? fromDate.getTime().toString() : '';
        const isoToDate = toDate ? toDate.getTime().toString() : '';

        onSortClick(isoFromDate, isoToDate);
  };

  return (
    <>
    <Box>
      <Typography variant='h4' gutterBottom>Sort By Date</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimeField
          label="START DATE"
          value={fromDate}
          onChange={(newFromDate) => setFromDate(newFromDate)}
          format="dd/MM/yyyy/HH:mm"
        />
        <DateTimeField
          label="END DATE"
          value={toDate}
          onChange={(newToDate) => setToDate(newToDate)}
          format="dd/MM/yyyy/HH:mm"
        />
    </LocalizationProvider>
        <Button variant="contained" onClick={handleSortClick}>
          Sort
        </Button>
      </Stack>
      {errorText && (
        <Typography variant="caption" color="error">
          {errorText}
        </Typography>
      )}
      </Box>
    </>
  );
};

export default DateSorter;