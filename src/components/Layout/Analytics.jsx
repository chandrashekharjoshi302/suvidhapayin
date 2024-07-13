import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const Analytics = () => {
  const [dateRange, setDateRange] = useState([dayjs(), dayjs()]);
  const [status, setStatus] = useState('');
  const [fundType, setFundType] = useState('');
  const [user, setUser] = useState('');

  const rows = [
    { id: 1, service: 'PAYIN', amount: '₹0', charges: '₹0', txn: 0, ratio: '0%' },
    { id: 2, service: 'PAYOUT', amount: '₹0', charges: '₹0', txn: 0, ratio: '0%' },
    { id: 3, service: 'PROFIT', amount: '₹0', charges: '₹0', txn: 0, ratio: '0%' },
    { id: 4, service: 'FUND TRANSFER', amount: '₹0', charges: '₹0', txn: 0, ratio: '0%' },
    { id: 5, service: 'FUND REQUEST', amount: '₹0', charges: '₹0', txn: 0, ratio: '0%' },
  ];

  const columns = [
    { field: 'id', headerName: 'SL. NO.', width: 100 },
    { field: 'service', headerName: 'SERVICE', width: 150 },
    { field: 'amount', headerName: 'AMOUNT', width: 150 },
    { field: 'charges', headerName: 'CHARGES', width: 150 },
    { field: 'txn', headerName: 'TXN', width: 100 },
    { field: 'ratio', headerName: 'RATIO', width: 100 },
  ];

  const handleSubmit = () => {
    // Handle the submit action (e.g., fetch data based on filters)
    console.log('Submit:', { dateRange, status, fundType, user });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h6" gutterBottom>Analytics</Typography>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Select Date Range"
                value={dateRange}
                onChange={(newValue) => setDateRange(newValue)}
                renderInput={(props) => <TextField {...props} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Status"
              >
                <MenuItem value="Success">Success</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Failed">Failed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>Fund Type</InputLabel>
              <Select
                value={fundType}
                onChange={(e) => setFundType(e.target.value)}
                label="Fund Type"
              >
                <MenuItem value="Type1">Type1</MenuItem>
                <MenuItem value="Type2">Type2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>Select User</InputLabel>
              <Select
                value={user}
                onChange={(e) => setUser(e.target.value)}
                label="Select User"
              >
                <MenuItem value="User1">User1</MenuItem>
                <MenuItem value="User2">User2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3} style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>Submit</Button>
          </Grid>
        </Grid>
      </Paper>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          autoHeight
        />
      </div>
    </div>
  );
};

export default Analytics;
