/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../stores/index.store";
import { useEffect } from "react";
import { getAccounts } from "../../../stores/account.store";
import AccountRow from "./userRow";
import React from "react";
import AccountModal from "./modal/create";

const users = () => {
  const dispatch: AppDispatch = useDispatch();
  const accounts = useSelector((state: RootState) => state.accounts.accounts);

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Typography variant="h5">List of Accounts</Typography>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
        <Button variant="contained" onClick={handleOpenModal}>
          Create New
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((Account) => (
              <AccountRow key={Account._id} Account={Account} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AccountModal open={openModal} handleClose={handleCloseModal} />
    </>
  );
};
export default users;
