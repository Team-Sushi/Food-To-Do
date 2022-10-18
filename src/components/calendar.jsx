import * as React from 'react';
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function MaterialUIPickers({onAdd,date}) {
  const [value, setValue] = React.useState(dayjs(date));

  const handleChange = (newValue) => {
    setValue(newValue);
    onAdd(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Expiry Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </Stack>
    </LocalizationProvider>
  );
}

MaterialUIPickers.defaultProps = {
  date: '2022-10-18'
}