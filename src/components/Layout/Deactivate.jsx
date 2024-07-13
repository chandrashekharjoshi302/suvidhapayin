// import React, { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Button, TextField, Toolbar, Typography } from '@mui/material';
// import * as XLSX from 'xlsx';

// const MemberList = () => {
//   const [search, setSearch] = useState('');
//   const [pageSize, setPageSize] = useState(5);

//   const members = [
//     { id: 1, name: 'John Doe', memberId: 'M001', mobile: '1234567890', email: 'john@example.com', mainBal: 1000, payoutBal: 500, joinDate: '2023-01-01' },
 
//   ];

//   const columns = [
//     { field: 'slNo', headerName: 'SL. NO.', width: 100 },
//     { field: 'name', headerName: 'MEMBER NAME', width: 200 },
//     { field: 'memberId', headerName: 'MEMBER ID', width: 150 },
//     { field: 'mobile', headerName: 'MEMBER MOBILE', width: 150 },
//     { field: 'email', headerName: 'MEMBER EMAIL', width: 200 },
//     { field: 'mainBal', headerName: 'MAIN BAL', width: 120 },
//     { field: 'payoutBal', headerName: 'PAYOUT BAL', width: 120 },
//     { field: 'joinDate', headerName: 'JOIN DATE', width: 150 },
//     {
//       field: 'action',
//       headerName: 'ACTION',
//       width: 150,
//       renderCell: (params) => (
//         <Button variant="contained" color="primary" onClick={() => handleAction(params.row.id)}>Action</Button>
//       ),
//     },
//   ];

//   const handleAction = (id) => {
//     console.log('Action for member with ID:', id);
//   };

//   const handleExportExcel = () => {
//     const ws = XLSX.utils.json_to_sheet(
//       members.map(member => ({
//         'SL. NO.': member.id,
//         'MEMBER NAME': member.name,
//         'MEMBER ID': member.memberId,
//         'MEMBER MOBILE': member.mobile,
//         'MEMBER EMAIL': member.email,
//         'MAIN BAL': member.mainBal,
//         'PAYOUT BAL': member.payoutBal,
//         'JOIN DATE': member.joinDate,
//       }))
//     );

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Members');

//     XLSX.writeFile(wb, 'members.xlsx');
//   };

//   const filteredMembers = members.filter(member => member.name.toLowerCase().includes(search.toLowerCase()));

//   return (
//     <div style={{ padding: '20px' }}>
//       <Toolbar>
//         <Typography variant="h6" style={{ flex: '1 1 100%' }}>Member List</Typography>
//         <TextField
//           variant="outlined"
//           size="small"
//           placeholder="Search"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{ marginRight: '10px' }}
//         />
//         <Button variant="contained" color="primary" onClick={handleExportExcel}>Download Excel</Button>
//       </Toolbar>
//       <div style={{ height: 600, width: '100%', marginTop: '20px' }}>
//         <DataGrid
//           rows={filteredMembers.map((member, index) => ({ ...member, slNo: index + 1 }))}
//           columns={columns}
//           pagination
//           pageSize={pageSize}
//           onPageSizeChange={(newSize) => setPageSize(newSize)}
//           rowsPerPageOptions={[5, 10, 20]}
//           autoHeight
//           disableSelectionOnClick
//         />
//       </div>
//     </div>
//   );
// };

// export default MemberList;



import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField, Toolbar, Typography, Grid, Paper } from '@mui/material';
import * as XLSX from 'xlsx';

const MemberList = () => {
  const [search, setSearch] = useState('');
  const [pageSize, setPageSize] = useState(5);

  const members = [
    { id: 1, name: 'John Doe', memberId: 'M001', mobile: '1234567890', email: 'john@example.com', mainBal: 1000, payoutBal: 500, joinDate: '2023-01-01' },
    // Add more members...
  ];

  const columns = [
    { field: 'slNo', headerName: 'SL. NO.', width: 100 },
    { field: 'name', headerName: 'MEMBER NAME', width: 200 },
    { field: 'memberId', headerName: 'MEMBER ID', width: 150 },
    { field: 'mobile', headerName: 'MEMBER MOBILE', width: 150 },
    { field: 'email', headerName: 'MEMBER EMAIL', width: 200 },
    { field: 'mainBal', headerName: 'MAIN BAL', width: 120 },
    { field: 'payoutBal', headerName: 'PAYOUT BAL', width: 120 },
    { field: 'joinDate', headerName: 'JOIN DATE', width: 150 },
    {
      field: 'action',
      headerName: 'ACTION',
      width: 150,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleAction(params.row.id)}>Action</Button>
      ),
    },
  ];

  const handleAction = (id) => {
    console.log('Action for member with ID:', id);
  };

  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      members.map(member => ({
        'SL. NO.': member.id,
        'MEMBER NAME': member.name,
        'MEMBER ID': member.memberId,
        'MEMBER MOBILE': member.mobile,
        'MEMBER EMAIL': member.email,
        'MAIN BAL': member.mainBal,
        'PAYOUT BAL': member.payoutBal,
        'JOIN DATE': member.joinDate,
      }))
    );

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Members');

    XLSX.writeFile(wb, 'members.xlsx');
  };

  const filteredMembers = members.filter(member => member.name.toLowerCase().includes(search.toLowerCase()));

  const totalMembers = members.length;
  const totalMainBalance = members.reduce((sum, member) => sum + member.mainBal, 0);
  const totalPayoutBalance = members.reduce((sum, member) => sum + member.payoutBal, 0);

  return (
    <div style={{ padding: '20px' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flex: '1 1 100%' }}>Member List</Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleExportExcel}>Download Excel</Button>
      </Toolbar>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#ffeb3b', color: '#000' }}>
            <Typography variant="h6">Total Members</Typography>
            <Typography variant="h4">{totalMembers}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#4caf50', color: '#fff' }}>
            <Typography variant="h6">Total Main Balance</Typography>
            <Typography variant="h4">₹{totalMainBalance}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f44336', color: '#fff' }}>
            <Typography variant="h6">Total Payout Balance</Typography>
            <Typography variant="h4">₹{totalPayoutBalance}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <div style={{ height: 600, width: '100%', marginTop: '20px' }}>
        <DataGrid
          rows={filteredMembers.map((member, index) => ({ ...member, slNo: index + 1 }))}
          columns={columns}
          pagination
          pageSize={pageSize}
          onPageSizeChange={(newSize) => setPageSize(newSize)}
          rowsPerPageOptions={[5, 10, 20]}
          autoHeight
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default MemberList;
