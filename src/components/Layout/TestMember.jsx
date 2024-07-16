// MemberList.js
import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, TextField, IconButton
} from '@mui/material';
import { styled } from '@mui/system';

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const TableCellStyled = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const sampleMembers = [
  {
    name: "John Doe",
    memberId: "SVDB2345",
    email: "john.doe@example.com",
    mainBal: 0.0,
    payoutBal: 0.0,
    payoutMinLimit: 100,
    payinMinLimit: 100,
    settlementTime: "TIMEPAY",
    payoutApi: "Zwitch",
    payinApi: "Timepay",
    currentCommPack: "Standard",
    currentServices: "Service 1",
    memberType: "Api User",
    active: true,
  },
  // Add more sample members as needed
];

const MemberList = () => {
  return (
    <TableContainerStyled component={Paper}>
      <TextFieldStyled
        variant="outlined"
        fullWidth
        label="Search"
      />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCellStyled>SL NO.</TableCellStyled>
            <TableCellStyled>MEMBER NAME</TableCellStyled>
            <TableCellStyled>MEMBER ID</TableCellStyled>
            <TableCellStyled>MEMBER EMAIL</TableCellStyled>
            <TableCellStyled>MAIN BAL</TableCellStyled>
            <TableCellStyled>PAYOUT BAL</TableCellStyled>
            <TableCellStyled>PAYOUT MIN LIMIT</TableCellStyled>
            <TableCellStyled>PAYIN MIN LIMIT</TableCellStyled>
            <TableCellStyled>CREDENTIALS</TableCellStyled>
            <TableCellStyled>API SWITCH</TableCellStyled>
            <TableCellStyled>SET COMM</TableCellStyled>
            <TableCellStyled>SET SERVICE</TableCellStyled>
            <TableCellStyled>SETTLEMENT TIME</TableCellStyled>
            <TableCellStyled>PAYOUT API</TableCellStyled>
            <TableCellStyled>PAYIN API</TableCellStyled>
            <TableCellStyled>CURRENT COMM PACK</TableCellStyled>
            <TableCellStyled>CURRENT SERVICES</TableCellStyled>
            <TableCellStyled>MEMBER PASSWORD</TableCellStyled>
            <TableCellStyled>MEMBER TYPE</TableCellStyled>
            <TableCellStyled>ACTIVE/DEACTIVE</TableCellStyled>
            <TableCellStyled>ACTIONS</TableCellStyled>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleMembers.map((member, index) => (
            <TableRow key={member.memberId}>
              <TableCellStyled>{index + 1}</TableCellStyled>
              <TableCellStyled>{member.name}</TableCellStyled>
              <TableCellStyled>{member.memberId}</TableCellStyled>
              <TableCellStyled>{member.email}</TableCellStyled>
              <TableCellStyled>{member.mainBal}</TableCellStyled>
              <TableCellStyled>{member.payoutBal}</TableCellStyled>
              <TableCellStyled>{member.payoutMinLimit}</TableCellStyled>
              <TableCellStyled>{member.payinMinLimit}</TableCellStyled>
              <TableCellStyled><Button variant="contained">Go</Button></TableCellStyled>
              <TableCellStyled><Button variant="contained">Go</Button></TableCellStyled>
              <TableCellStyled><Button variant="contained">Go</Button></TableCellStyled>
              <TableCellStyled><Button variant="contained">Go</Button></TableCellStyled>
              <TableCellStyled>{member.settlementTime}</TableCellStyled>
              <TableCellStyled>{member.payoutApi}</TableCellStyled>
              <TableCellStyled>{member.payinApi}</TableCellStyled>
              <TableCellStyled>{member.currentCommPack}</TableCellStyled>
              <TableCellStyled>{member.currentServices}</TableCellStyled>
              <TableCellStyled>
                <ButtonStyled variant="contained">Show</ButtonStyled>
                <ButtonStyled variant="contained">Reset</ButtonStyled>
              </TableCellStyled>
              <TableCellStyled>{member.memberType}</TableCellStyled>
              <TableCellStyled>
                <IconButton color={member.active ? "primary" : "default"}>
                  {member.active ? "Active" : "Inactive"}
                </IconButton>
              </TableCellStyled>
              <TableCellStyled>
                <ButtonStyled variant="contained">Manage</ButtonStyled>
              </TableCellStyled>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerStyled>
  );
};

export default MemberList;
